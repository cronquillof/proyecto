import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { medicalAppointment } from 'src/module/medical-appointment/entity/MedicalAppointment.entity';
import { types } from 'src/common/enums/invoice.enums';

@Entity()
export class medicalInvoice {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 500 })
  description!: string;

  @Column()
  total_value!: number;

  @Column()
  payment_method!: string;

  @Column({ type: 'enum', enum: types })
  type!: types;
}