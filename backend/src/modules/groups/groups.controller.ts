import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
  ValidationPipe,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupFiltersDto } from './dto/group-filters.dto';

// TODO: Implement JWT Auth Guard
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  // @UseGuards(JwtAuthGuard) // TODO: Uncomment when auth is implemented
  async createGroup(
    @Body(ValidationPipe) createGroupDto: CreateGroupDto,
    @Request() req: any, // TODO: Type this properly when auth is implemented
  ) {
    // TODO: Get user ID from JWT token
    const userId = req.user?.id || 'temp-user-id'; // Temporary for development
    return this.groupsService.createGroup(userId, createGroupDto);
  }

  @Get()
  async findGroups(
    @Query(ValidationPipe) filters: GroupFiltersDto,
    @Request() req: any,
  ) {
    const userId = req.user?.id; // Optional for public groups
    return this.groupsService.findGroups(filters, userId);
  }

  @Get(':id')
  async findGroupById(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    const userId = req.user?.id;
    return this.groupsService.findGroupById(id, userId);
  }

  @Post(':id/join')
  // @UseGuards(JwtAuthGuard) // TODO: Uncomment when auth is implemented
  async joinGroup(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    const userId = req.user?.id || 'temp-user-id'; // Temporary for development
    return this.groupsService.joinGroup(id, userId);
  }

  @Post(':id/leave')
  // @UseGuards(JwtAuthGuard) // TODO: Uncomment when auth is implemented
  async leaveGroup(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    const userId = req.user?.id || 'temp-user-id'; // Temporary for development
    return this.groupsService.leaveGroup(id, userId);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard) // TODO: Uncomment when auth is implemented
  async deleteGroup(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    const userId = req.user?.id || 'temp-user-id'; // Temporary for development
    return this.groupsService.deleteGroup(id, userId);
  }
} 