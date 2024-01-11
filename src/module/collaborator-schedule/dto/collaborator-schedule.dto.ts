import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CollaboratorDto } from '../../collaborator/dto/Collaborator.dto';
import { ApiProperty } from '@nestjs/swagger';

export class collaboratorScheduleDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsNotEmpty()
  @Type(() => CollaboratorDto)
  collaborator!: CollaboratorDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  start_date!: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  end_date!: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  is_available!: boolean;
}
