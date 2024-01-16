import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Client } from '../../client/entity/Client.entity';
import { Collaborator } from '../../collaborator/entity/Collaborator.entity';
import { medicalInvoice } from '../../medical-invoice/entity/MedicalInvoice.entity';

@Entity()
export class medicalAppointment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'datetime', nullable: false })
  appointment_date!: Date;

  @Column({ type: 'boolean', nullable: true })
  appointment_state!: boolean;

  @ManyToOne(() => Collaborator, (collaborator) => collaborator.appointments, {
    eager: true,
  })
  collaborator!: Collaborator;

  @ManyToOne(() => Client, (client) => client.appointments)
  client!: Client;

  @OneToOne(() => medicalInvoice, { cascade: true })
  @JoinColumn()
  invoice!: medicalInvoice;
}