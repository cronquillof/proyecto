import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { collaboratorSchedule } from 'src/module/collaborator-schedule/entity/CollaboratorSchedule.entity';
import { medicalAppointment } from 'src/module/medical-appointment/entity/MedicalAppointment.entity';
import { roles } from 'src/common/enums/collaborator.enums';
@Entity()
export class Collaborator {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  department!: string;

  @Column({ type: 'enum', default: roles.DOCTOR, enum: roles, nullable: true })
  role: string;

  @OneToMany(() => collaboratorSchedule, (schedule) => schedule.collaborator, {
    cascade: ['insert', 'update'],
    eager: true,
    onDelete: 'CASCADE',
  })
  schedules?: collaboratorSchedule[];

  @OneToMany(
    () => medicalAppointment,
    (appointment) => appointment.collaborator,
    {
      cascade: ['insert', 'update'],
      onDelete: 'CASCADE',
    },
  )
  appointments!: medicalAppointment[];
}
