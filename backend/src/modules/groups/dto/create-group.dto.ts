import { IsString, IsOptional, IsBoolean, IsInt, IsDateString, IsEnum, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

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

export class CreateGroupDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  gameId: string;

  @IsOptional()
  @IsString()
  gameModeId?: string;

  @IsEnum(Platform)
  platform: Platform;

  @IsEnum(Region)
  region: Region;

  @IsInt()
  @Min(2)
  @Max(20)
  @Transform(({ value }) => parseInt(value))
  maxMembers: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  isPublic?: boolean = true;

  @IsOptional()
  @IsDateString()
  scheduledAt?: string;

  @IsOptional()
  @IsString()
  timezone?: string;
} 