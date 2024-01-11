import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { medicalScheduleDto } from './dto/medical-schedule.dto';
import { medicalSchedule } from 'src/module/medical-schedule/entity/MedicalSchedule.entity';

@Injectable()
export class MedicalScheduleService {
  constructor(
    @InjectRepository(medicalSchedule)
    private readonly medicalScheduleRepository: Repository<medicalSchedule>,
  ) {}

  async find() {
    const schedule = await this.medicalScheduleRepository.find();
    return schedule;
  }

  async create(schedule: medicalScheduleDto) {
    const data = await this.medicalScheduleRepository.save(schedule);
    return data;
  }

  async update(schedule: medicalScheduleDto) {
    const data = await this.medicalScheduleRepository.save(schedule);
    return data;
  }

  async delete(id: number) {
    const data = await this.medicalScheduleRepository.delete({ id });
    return data;
  }
}
