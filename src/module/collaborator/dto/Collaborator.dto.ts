import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { roles } from 'src/common/enums/collaborator.enums';
import { collaboratorSchedule } from 'src/module/collaborator-schedule/entity/CollaboratorSchedule.entity';

export class CollaboratorDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @ApiProperty({ enum: [roles] })
  @IsNotEmpty()
  @IsEnum(roles)
  rol!: roles;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  department!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  phone!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @Type(() => collaboratorSchedule)
  schedule!: collaboratorSchedule[];
}
