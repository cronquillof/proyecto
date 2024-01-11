import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import errors from 'src/utils/errors';
import { MedicalScheduleService } from './medical-schedule.service';
import { medicalScheduleDto } from './dto/medical-schedule.dto';
import { medicalSchedule } from 'src/module/medical-schedule/entity/MedicalSchedule.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medica Schedule')
@Controller('medical-schedule')
export class MedicalScheduleController {
  constructor(
    private readonly medicalScheduleService: MedicalScheduleService,
  ) {}

  @Get()
  async findReport(): Promise<medicalSchedule[]> {
    const report = await this.medicalScheduleService.find();
    return report;
  }

  @Post()
  async createReport(
    @Body() schedule: medicalScheduleDto,
  ): Promise<medicalSchedule> {
    const data = await this.medicalScheduleService
      .create(schedule)
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return data;
  }
  @Put()
  async updateReport(
    @Body() report: medicalScheduleDto,
  ): Promise<medicalSchedule> {
    const data = await this.medicalScheduleService
      .update(report)
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return data;
  }
  @Delete('/:id')
  async deleteReport(@Query('id') id: number) {
    const report = await this.medicalScheduleService
      .delete(id)
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return report;
  }
}
