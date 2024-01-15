import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
import { Collaborator } from 'src/module/collaborator/entity/Collaborator.entity';

export class RegisterAuthDto {


  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @Exclude()
  collaborator: Collaborator;
}
