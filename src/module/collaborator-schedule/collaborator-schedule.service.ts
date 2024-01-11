import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { collaboratorSchedule } from 'src/module/collaborator-schedule/entity/CollaboratorSchedule.entity';
import { Repository } from 'typeorm';
import { collaboratorScheduleDto } from './dto/collaborator-schedule.dto';

@Injectable()
export class CollaboratorScheduleService {
  constructor(
    @InjectRepository(collaboratorSchedule)
    private readonly collaboratorScheduleRepository: Repository<collaboratorSchedule>,
  ) {}

  async findAll(): Promise<collaboratorSchedule[]> {
    const schedule = await this.collaboratorScheduleRepository.find();
    return schedule;
  }

  async create(collaboratorSchedule: collaboratorScheduleDto) {
    const schedules = await this.collaboratorScheduleRepository.save(
      collaboratorSchedule,
    );
    return schedules;
  }

  async update(collaboratorSchedule: collaboratorScheduleDto) {
    const schedules = await this.collaboratorScheduleRepository.save(
      collaboratorSchedule,
    );
    return schedules;
  }
  
  async delete(id: number) {
    const schedule = await this.collaboratorScheduleRepository.delete({ id });
    return schedule;
  }
}
