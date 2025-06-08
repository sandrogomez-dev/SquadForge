import { IsOptional, IsString, IsEnum, IsInt, IsBoolean, IsDateString, Min, Max } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Platform, Region } from './create-group.dto';

export enum GroupStatus {
  OPEN = 'OPEN',
  FULL = 'FULL',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export class GroupFiltersDto {
  @IsOptional()
  @IsString()
  gameId?: string;

  @IsOptional()
  @IsString()
  gameModeId?: string;

  @IsOptional()
  @IsEnum(Platform)
  platform?: Platform;

  @IsOptional()
  @IsEnum(Region)
  region?: Region;

  @IsOptional()
  @IsEnum(GroupStatus)
  status?: GroupStatus;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  isPublic?: boolean;

  @IsOptional()
  @IsDateString()
  scheduledAfter?: string;

  @IsOptional()
  @IsDateString()
  scheduledBefore?: string;

  @IsOptional()
  @IsString()
  search?: string; // Search in title and description

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number = 20;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  offset?: number = 0;

  @IsOptional()
  @IsString()
  sortBy?: 'createdAt' | 'scheduledAt' | 'title' = 'createdAt';

  @IsOptional()
  @IsString()
  sortOrder?: 'asc' | 'desc' = 'desc';

  // Premium filter - only for premium users
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  priorityOnly?: boolean;
} 