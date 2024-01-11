import { Module } from '@nestjs/common';
import { MedicalAppointmentController } from './medical-appointment.controller';
import { MedicalAppointmentService } from './medical-appointment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { medicalAppointment } from 'src/module/medical-appointment/entity/MedicalAppointment.entity';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [ClientModule, TypeOrmModule.forFeature([medicalAppointment])],
  controllers: [MedicalAppointmentController],
  providers: [MedicalAppointmentService],
})
export class MedicalAppointmentModule {}
