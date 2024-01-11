import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { medicalAppointment } from '../../medical-appointment/entity/MedicalAppointment.entity';

@Entity()
export class medicalSchedule {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'int', nullable: false })
  avalible_appointments!: number;

  @Column({ type: 'varchar', length: 200 })
  location!: string;

  @OneToOne(() => medicalAppointment)
  @JoinColumn()
  appointment!: medicalAppointment;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;
}
