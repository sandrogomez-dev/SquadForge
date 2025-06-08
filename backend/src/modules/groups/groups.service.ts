import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupFiltersDto } from './dto/group-filters.dto';
import { Prisma } from '../../../generated/prisma';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async createGroup(userId: string, createGroupDto: CreateGroupDto) {
    // Verify game exists
    const game = await this.prisma.game.findUnique({
      where: { id: createGroupDto.gameId },
    });

    if (!game) {
      throw new NotFoundException('Game not found');
    }

    // Verify game mode exists if provided
    if (createGroupDto.gameModeId) {
      const gameMode = await this.prisma.gameMode.findUnique({
        where: { id: createGroupDto.gameModeId },
      });

      if (!gameMode || gameMode.gameId !== createGroupDto.gameId) {
        throw new NotFoundException('Game mode not found or does not belong to the specified game');
      }
    }

    // Create the group
    const group = await this.prisma.group.create({
      data: {
        ...createGroupDto,
        ownerId: userId,
        scheduledAt: createGroupDto.scheduledAt ? new Date(createGroupDto.scheduledAt) : null,
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            avatar: true,
            reputation: true,
          },
        },
        game: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
        gameMode: {
          select: {
            id: true,
            name: true,
          },
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                avatar: true,
                reputation: true,
              },
            },
          },
        },
        _count: {
          select: {
            members: true,
          },
        },
      },
    });

    // Add owner as first member
    await this.prisma.groupMember.create({
      data: {
        userId,
        groupId: group.id,
        role: 'OWNER',
      },
    });

    return group;
  }

  async findGroups(filters: GroupFiltersDto, userId?: string) {
    const where: Prisma.GroupWhereInput = {
      isPublic: true, // Only show public groups by default
    };

    // Apply filters
    if (filters.gameId) {
      where.gameId = filters.gameId;
    }

    if (filters.gameModeId) {
      where.gameModeId = filters.gameModeId;
    }

    if (filters.platform) {
      where.platform = filters.platform;
    }

    if (filters.region) {
      where.region = filters.region;
    }

    if (filters.status) {
      where.status = filters.status;
    }

    if (filters.isPublic !== undefined) {
      where.isPublic = filters.isPublic;
    }

    if (filters.scheduledAfter || filters.scheduledBefore) {
      where.scheduledAt = {};
      if (filters.scheduledAfter) {
        where.scheduledAt.gte = new Date(filters.scheduledAfter);
      }
      if (filters.scheduledBefore) {
        where.scheduledAt.lte = new Date(filters.scheduledBefore);
      }
    }

    if (filters.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    // Premium filter - only show priority groups if requested
    if (filters.priorityOnly) {
      where.isPriority = true;
    }

    const orderBy: Prisma.GroupOrderByWithRelationInput = {};
    if (filters.sortBy === 'scheduledAt') {
      orderBy.scheduledAt = filters.sortOrder;
    } else if (filters.sortBy === 'title') {
      orderBy.title = filters.sortOrder;
    } else {
      orderBy.createdAt = filters.sortOrder;
    }

    // Priority groups should appear first for premium users
    const groups = await this.prisma.group.findMany({
      where,
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            avatar: true,
            reputation: true,
          },
        },
        game: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
        gameMode: {
          select: {
            id: true,
            name: true,
          },
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                avatar: true,
                reputation: true,
              },
            },
          },
        },
        _count: {
          select: {
            members: true,
          },
        },
      },
      orderBy: [
        { isPriority: 'desc' }, // Priority groups first
        orderBy,
      ],
      take: filters.limit,
      skip: filters.offset,
    });

    return groups;
  }

  async findGroupById(id: string, userId?: string) {
    const group = await this.prisma.group.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            avatar: true,
            reputation: true,
          },
        },
        game: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
        gameMode: {
          select: {
            id: true,
            name: true,
          },
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                avatar: true,
                reputation: true,
              },
            },
          },
        },
        _count: {
          select: {
            members: true,
          },
        },
      },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    // Check if user can view this group
    if (!group.isPublic && userId !== group.ownerId) {
      const isMember = group.members.some(member => member.userId === userId);
      if (!isMember) {
        throw new ForbiddenException('You do not have permission to view this group');
      }
    }

    return group;
  }

  async joinGroup(groupId: string, userId: string) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        members: true,
        _count: {
          select: {
            members: true,
          },
        },
      },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    if (group.status !== 'OPEN') {
      throw new BadRequestException('Group is not accepting new members');
    }

    if (group._count.members >= group.maxMembers) {
      throw new BadRequestException('Group is full');
    }

    // Check if user is already a member
    const existingMember = group.members.find(member => member.userId === userId);
    if (existingMember) {
      throw new BadRequestException('You are already a member of this group');
    }

    // Add user to group
    await this.prisma.groupMember.create({
      data: {
        userId,
        groupId,
        role: 'MEMBER',
      },
    });

    // Update group status if full
    if (group._count.members + 1 >= group.maxMembers) {
      await this.prisma.group.update({
        where: { id: groupId },
        data: { status: 'FULL' },
      });
    }

    return { message: 'Successfully joined the group' };
  }

  async leaveGroup(groupId: string, userId: string) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        members: true,
      },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    const member = group.members.find(member => member.userId === userId);
    if (!member) {
      throw new BadRequestException('You are not a member of this group');
    }

    if (member.role === 'OWNER') {
      throw new BadRequestException('Group owner cannot leave the group. Transfer ownership or delete the group instead.');
    }

    // Remove user from group
    await this.prisma.groupMember.delete({
      where: { id: member.id },
    });

    // Update group status if it was full
    if (group.status === 'FULL') {
      await this.prisma.group.update({
        where: { id: groupId },
        data: { status: 'OPEN' },
      });
    }

    return { message: 'Successfully left the group' };
  }

  async deleteGroup(groupId: string, userId: string) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    if (group.ownerId !== userId) {
      throw new ForbiddenException('Only the group owner can delete the group');
    }

    await this.prisma.group.delete({
      where: { id: groupId },
    });

    return { message: 'Group deleted successfully' };
  }
} 