import { Collaborator } from 'src/module/collaborator/entity/Collaborator.entity';
import { medicalAppointment } from 'src/module/medical-appointment/entity/MedicalAppointment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique('Email', ['email'])
@Unique('Dni', ['dni'])
export class Client {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 60, nullable: false })
  fullname!: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  dni!: string;

  @Column({ type: 'varchar', nullable: false })
  email!: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToMany(() => medicalAppointment, (appointment) => appointment.client, {
    eager: true,
  })
  appointments: medicalAppointment[];

  @OneToOne(() => Collaborator, { eager: true })
  @JoinColumn()
  collaborator: Collaborator;
}
