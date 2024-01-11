import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MedicalHistoryService } from './medical-history.service';
import { medicalHistory } from 'src/module/medical-history/entity/MedicalHistory.entity';
import { medicalHistoryDto } from './dto/medical-history.dto';

@ApiTags('Medical History')
@Controller('medical-history')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryServices: MedicalHistoryService) {}

  @Get('all')
  async findAllHistory(): Promise<medicalHistory[]> {
    const data = await this.medicalHistoryServices.findAll();
    return data;
  }

  @Get('/:id')
  async findHistory(@Param('id') id: number): Promise<medicalHistory> {
    const data = await this.medicalHistoryServices.findOne(id);
    return data;
  }

  @Post()
  createHistory(@Body() history: medicalHistoryDto): Promise<medicalHistory> {
    const data = this.medicalHistoryServices.create(history);
    return data;
  }

  @Put()
  uppdateHistory(@Body() history: medicalHistoryDto): Promise<medicalHistory> {
    const data = this.medicalHistoryServices.update(history);
    return data;
  }

  @Delete('/:id')
  deleteHistory(@Param('id') id: number) {
    const data = this.medicalHistoryServices.delete(id);
    return data;
  }
}
