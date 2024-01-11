import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';
import { medicalScheduleDto } from 'src/module/medical-schedule/dto/medical-schedule.dto';
export class ReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @ApiProperty()
  @Type(() => medicalScheduleDto)
  schedule!: medicalScheduleDto;
}
