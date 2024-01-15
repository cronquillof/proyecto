import { Expose } from 'class-transformer';
import { genders } from '../enums/client.enums';

export class ClientSerializer {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  password: string;
}