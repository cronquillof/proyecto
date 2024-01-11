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
  UseGuards,
} from '@nestjs/common';
import errors from 'src/utils/errors';
import { MedicalAppointmentService } from './medical-appointment.service';

import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/guard/auth.guard';
import { AppointmentDto } from './dto/appointment.dto';

@ApiTags('Medical Appointment')
@Controller('medical-appointment')
export class MedicalAppointmentController {
  constructor(private medicalAppointmentService: MedicalAppointmentService) {}
  @Post()
  @UseGuards(AuthGuard)
  async findInvoices(@Body() appointmentDto: AppointmentDto) {
    return await this.medicalAppointmentService.find(appointmentDto);
  }

  @Post()
  @UseGuards(AuthGuard)
  async createAppointment(@Body() appointment: any) {
    return await this.medicalAppointmentService.create(appointment);
  }

  /* @Post()
  async createInvoice(@Body() appointment: medicalAppointmentDto) {
    return this.medicalAppointmentService.create(appointment).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
  @Put()
  async updateInvoice(@Body() appointment: medicalAppointmentDto) {
    return this.medicalAppointmentService.update(appointment).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  } */
  @Delete('/:id')
  async deleteInvoice(@Param('id') id: number) {
    return this.medicalAppointmentService.delete(id).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
}
