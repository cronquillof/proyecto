import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Client } from '../../client/entity/Client.entity';

@Entity()
export class medicalHistory {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 400, nullable: true })
  family_history!: string;

  @Column({ type: 'varchar', length: 400, nullable: true })
  habits!: string;

  @Column({ type: 'varchar', length: 400, nullable: true })
  previous_medication!: string;

  @Column({ type: 'varchar', length: 400, nullable: true })
  current_medication!: string;

  @Column({ type: 'varchar', length: 400, nullable: true })
  allergies!: string;

  @OneToOne(() => Client, (client) => client.id, { cascade: true })
  @JoinColumn()
  client!: Client;
}
