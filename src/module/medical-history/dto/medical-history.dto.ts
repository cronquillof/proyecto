import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ClientDto } from 'src/module/client/dto/Client.dto';

export class medicalHistoryDto {
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  family_history!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  habits!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  previous_medication!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  current_medication!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  allergies!: string;

  @Type(() => ClientDto)
  client!: ClientDto;
}
