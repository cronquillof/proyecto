import { Injectable } from '@nestjs/common';
import { ReportDto } from './dto/report.dto';
import { Report } from 'src/module/report/entity/Report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  async find() {
    const report = await this.reportRepository.find();
    return report;
  }

  async create(report: ReportDto) {
    const data = await this.reportRepository.save(report);
    return data;
  }

  async update(report: ReportDto) {
    const data = await this.reportRepository.save(report);
    return data;
  }

  async delete(id: number) {
    const data = await this.reportRepository.delete({ id });
    return data;
  }
}
