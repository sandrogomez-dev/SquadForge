export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  reputation: number;
  isPremium: boolean;
  steamId?: string;
  psnId?: string;
  xboxId?: string;
}

export interface Game {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  maxPlayersPerGroup: number;
  platforms: string[];
}

export interface GameMode {
  id: string;
  name: string;
  description?: string;
  gameId: string;
}

export enum Platform {
  PC = 'PC',
  PLAYSTATION = 'PlayStation',
  XBOX = 'Xbox',
  SWITCH = 'Switch',
}

export enum Region {
  NA = 'NA',
  EU = 'EU',
  ASIA = 'ASIA',
  OCE = 'OCE',
  SA = 'SA',
}

export enum GroupStatus {
  OPEN = 'OPEN',
  FULL = 'FULL',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface GroupMember {
  id: string;
  userId: string;
  role: 'OWNER' | 'MODERATOR' | 'MEMBER';
  joinedAt: string;
  user: User;
}

export interface Group {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  maxMembers: number;
  isPublic: boolean;
  status: GroupStatus;
  gameId: string;
  gameModeId?: string;
  platform: Platform;
  region: Region;
  scheduledAt?: string;
  timezone?: string;
  isPriority: boolean;
  ownerId: string;
  owner: User;
  game: Game;
  gameMode?: GameMode;
  members: GroupMember[];
  _count: {
    members: number;
  };
}

export interface CreateGroupData {
  title: string;
  description?: string;
  gameId: string;
  gameModeId?: string;
  platform: Platform;
  region: Region;
  maxMembers: number;
  isPublic?: boolean;
  scheduledAt?: string;
  timezone?: string;
}

export interface GroupFilters {
  gameId?: string;
  gameModeId?: string;
  platform?: Platform;
  region?: Region;
  status?: GroupStatus;
  isPublic?: boolean;
  scheduledAfter?: string;
  scheduledBefore?: string;
  search?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'createdAt' | 'scheduledAt' | 'title';
  sortOrder?: 'asc' | 'desc';
  priorityOnly?: boolean;
} 