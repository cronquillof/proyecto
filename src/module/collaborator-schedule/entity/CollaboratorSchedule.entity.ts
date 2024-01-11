import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Collaborator } from '../../collaborator/entity/Collaborator.entity';

@Entity()
export class collaboratorSchedule {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Collaborator, (collaborator) => collaborator.schedules, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  collaborator!: Collaborator;

  @Column({ type: 'date', nullable: false })
  start_date!: Date;

  @Column({ type: 'date', nullable: false })
  end_date!: Date;

  @Column({ type: 'boolean', nullable: false })
  is_available!: boolean;
}
