import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from 'src/module/report/entity/Report.entity';
import { ReportDto } from './dto/report.dto';
import errors from 'src/utils/errors';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Report')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  async findReport(): Promise<Report[]> {
    const report = await this.reportService.find();
    return report;
  }

  @Post()
  async createReport(@Body() report: ReportDto): Promise<Report> {
    const data = await this.reportService.create(report).catch((error) => {
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
  async updateReport(@Body() report: ReportDto): Promise<Report> {
    const data = await this.reportService.update(report).catch((error) => {
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
    const report = await this.reportService.delete(id).catch((error) => {
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
