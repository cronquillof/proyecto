import { Exclude, Expose } from 'class-transformer';

export class SerializedRegisterAuth {
  @Expose()
  email: string;

  @Exclude()
  password: string;
}
