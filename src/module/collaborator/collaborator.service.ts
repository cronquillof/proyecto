import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collaborator } from 'src/module/collaborator/entity/Collaborator.entity';
import { Repository } from 'typeorm';
import { CollaboratorDto } from './dto/Collaborator.dto';

@Injectable()
export class CollaboratorService {
  constructor(
    @InjectRepository(Collaborator)
    private readonly collaboratorRepository: Repository<Collaborator>,
  ) {}

  async find(): Promise<Collaborator[]> {
    const collaborators = await this.collaboratorRepository.find();
    return collaborators;
  }

  async create(collaborator: CollaboratorDto): Promise<Collaborator> {
    const collaborators = await this.collaboratorRepository.save(collaborator);
    return collaborators;
  }

  async update(collaborator: CollaboratorDto): Promise<Collaborator> {
    const collaborators = await this.collaboratorRepository.save(collaborator);
    return collaborators;
  }

  async delete(id: number): Promise<{}> {
    const collaborators = await this.collaboratorRepository.delete({ id });
    return { collaborators };
  }
}
