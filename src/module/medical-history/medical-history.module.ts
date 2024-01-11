import { Module } from '@nestjs/common';
import { MedicalHistoryController } from './medical-history.controller';
import { MedicalHistoryService } from './medical-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { medicalHistory } from 'src/module/medical-history/entity/MedicalHistory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([medicalHistory])],
  controllers: [MedicalHistoryController],
  providers: [MedicalHistoryService],
})
export class MedicalHistoryModule {}
