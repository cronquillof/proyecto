import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Client } from './entity/Client.entity';
import { Not, Repository } from 'typeorm';
import { RegisterAuthDto } from '../auth/dto/register-auth.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}
  
  async findAll(): Promise<Client[]> {
    const client = await this.clientRepository.find();
    return client;
  }

  async findClientByEmail(email: string): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: [{ email }],
    });
    return client;
  }

  async findClientsDoctor() {
    const clients = await this.clientRepository.find({
      where: { collaborator: Not('Null') },
    });
    return clients;
  }

  async createClient(client: RegisterAuthDto) {
    try {
      return await this.clientRepository.save(client);
    } catch (error) {
      throw new BadRequestException('Error Server', {
        description: error.message,
      });
    }
  }

  async findClientsById(id: number) {
    const client = await this.clientRepository.findOne({
      where: [{ id }],
    });
    if (!client) throw new NotFoundException('El usuario no existe');
    return client;
  }

  async updateClient(client: RegisterAuthDto) {
    const data = await this.clientRepository.save(client);
    if (!data) throw new BadRequestException('Error Server');
    return data;
  }

  async deleteClient(id: number) {
    const ClientExist = await this.findClientsById(id);

    if (!ClientExist) {
      throw new ConflictException('El cliente con el id no existe');
    }
    const rows = await this.clientRepository.delete({ id });
    return { client_email: ClientExist.email, is_delete: rows.affected == 1 };
  }
}