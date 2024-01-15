import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsStrongPassword,
} from 'class-validator';

import { Collaborator } from 'src/module/collaborator/entity/Collaborator.entity';

export class ClientDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @Exclude()
  collaborator: Collaborator;
  
}
