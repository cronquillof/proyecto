import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { genders } from '../enums/client.enums';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  second_name: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  surname: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  second_surname: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  dni: string;

  @Column({ type: 'enum', enum: genders, nullable: false })
  gender: genders;

  @Column({ type: 'date', nullable: false })
  birth_date: Date;

  @Column({ type: 'varchar', length: 10, nullable: false })
  phone: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  address: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'boolean', nullable: false })
  health_insurance: boolean;
}