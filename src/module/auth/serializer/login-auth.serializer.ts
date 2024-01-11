import { Exclude, Expose, Type } from 'class-transformer';
import { CollaboratorSerializer } from 'src/module/collaborator/serializer/collaborator.serializer';

export class SerializedLoginAuth {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  token: string;

  @Expose()
  dni: string;

  @Expose()
  role: string;

  @Expose()
  @Type(() => CollaboratorSerializer)
  collaborator: CollaboratorSerializer;

  @Exclude()
  password: string;
}
