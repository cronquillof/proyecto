import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { medicalAppointmentDto } from 'src/module/medical-appointment/dto/medical-appointment.dto';

export class medicalScheduleDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  avalible_appointments!: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  location!: string;

  @ApiProperty()
  @Type(() => medicalAppointmentDto)
  appointment!: medicalAppointmentDto;
}
