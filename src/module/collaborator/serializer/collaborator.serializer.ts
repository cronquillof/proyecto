import { Expose } from 'class-transformer';

export class CollaboratorSerializer {
  @Expose()
  id?: number;

  @Expose()
  department!: string;
}
