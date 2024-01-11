import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { medicalAppointment } from 'src/module/medical-appointment/entity/MedicalAppointment.entity';
import { Repository } from 'typeorm';
import { medicalAppointmentDto } from './dto/medical-appointment.dto';
import { AppointmentDto } from './dto/appointment.dto';
import { ClientService } from '../client/client.service';

@Injectable()
export class MedicalAppointmentService {
  constructor(
    @InjectRepository(medicalAppointment)
    private readonly medicalAppointmentRepository: Repository<medicalAppointment>,
    private readonly clientService: ClientService,
  ) {}

  async find(appointmentDto: AppointmentDto) {
    const appointment = await this.medicalAppointmentRepository.find({
      where: { client: { email: appointmentDto.email } },
    });
    return appointment;
  }

  async create(appointment: any) {
    const res = await this.medicalAppointmentRepository.save(appointment);
    return res;
  }

  /* async create(appointment: medicalAppointmentDto): Promise<medicalAppointmentDto> {
    const data = await this.medicalAppointmentRepository.save(appointment);
    return data;
  }
  async update(appointment: medicalAppointmentDto): Promise<medicalAppointmentDto> {
    const data = await this.medicalAppointmentRepository.save(appointment);
    return data;
  } */

  async delete(id: number) {
    const invoices = await this.medicalAppointmentRepository.delete({ id });
    return invoices;
  }
}
