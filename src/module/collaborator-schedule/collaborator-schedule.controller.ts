import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CollaboratorScheduleService } from './collaborator-schedule.service';

import { collaboratorScheduleDto } from './dto/collaborator-schedule.dto';
import errors from 'src/utils/errors';
import { ApiTags } from '@nestjs/swagger';
import { collaboratorSchedule } from 'src/module/collaborator-schedule/entity/CollaboratorSchedule.entity';

@ApiTags('Collaborator Schedule')
@Controller('collaborator-schedule')
export class CollaboratorScheduleController {
  constructor(private scheduleService: CollaboratorScheduleService) {}

  @Get()
  async findSchedule(): Promise<collaboratorSchedule[]> {
    const schedule = this.scheduleService.findAll();
    return schedule;
  }

  @Post()
  async createSchedule(@Body() collaboratorSchedule: collaboratorScheduleDto) {
    const schedule = await this.scheduleService
      .create(collaboratorSchedule)
      .catch((error) => {
        throw new HttpException(
          {
            message: error.message || errors[error.errno],
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return schedule;
  }

  @Put()
  async updateSchedule(@Body() collaboratorSchedule: collaboratorScheduleDto) {
    const schedule = await this.scheduleService
      .update(collaboratorSchedule)
      .catch((error) => {
        throw new HttpException(
          {
            message: error.message || errors[error.errno],
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return schedule;
  }

  @Delete('/:id')
  async deleteSchedule(@Param('id') id: number) {
    const schedule = await this.scheduleService.delete(id).catch((error) => {
      throw new HttpException(
        {
          message: error.message || errors[error.errno],
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
    return schedule;
  }
}
