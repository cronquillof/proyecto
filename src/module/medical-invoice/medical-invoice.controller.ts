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
import { MedicalInvoiceService } from './medical-invoice.service';
import { medicalInvoiceDto } from './dto/medical-invoice.dto';
import errors from 'src/utils/errors';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medical Invoice')
@Controller('medical-invoice')
export class MedicalInvoiceController {
  constructor(private medicalInvoiceService: MedicalInvoiceService) {}
  @Get()
  async findInvoices() {
    return this.medicalInvoiceService.find();
  }

  @Post()
  async createInvoice(@Body() invoice: medicalInvoiceDto) {
    return this.medicalInvoiceService.create(invoice).catch((error) => {
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
  async updateInvoice(@Body() invoice: medicalInvoiceDto) {
    return this.medicalInvoiceService.update(invoice).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
  @Delete('/:id')
  async deleteInvoice(@Param('id') id: number) {
    return this.medicalInvoiceService.delete(id).catch((error) => {
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
