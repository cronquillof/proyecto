import { Expose } from 'class-transformer';
import { genders } from '../enums/client.enums';

export class ClientSerializer {
  @Expose()
  id: number;

  @Expose()
  fullname: string;

  @Expose()
  dni: string;

  @Expose()
  email: string;

  @Expose()
  password: string;
}