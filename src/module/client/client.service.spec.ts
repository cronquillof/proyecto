import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientDto, CreateClientDto } from './dto/Client.dto';
import { Client } from './entity/client.entity';
import { Collaborator } from '../collaborator/entity/Collaborator.entity';
import { Repository } from 'typeorm';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService;
  let repository: Repository<Client>;

  beforeEach(async () => {
    service = new ClientService(repository);
    controller = new ClientController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create method', () => {
    it('should be defined create', () => {
      expect(controller.createClient).toBeDefined();
    });
    it('should return create', async () => {
      const mockUser: Client = {
        email: 'dv237968@gmail.com',
        password: 'Piter09806969454@',
        fullname: 'Daniel',
        dni: '12345678',
        appointments: [],
        collaborator: new Collaborator(),
      };
      jest
        .spyOn(service, 'createClient')
        .mockImplementation(() => Promise.resolve(mockUser as Client));
      expect(await controller.createClient(mockUser)).toEqual({
        data: mockUser,
        message: 'Se creo el nuevo cliente',
      });
    });
  });

  describe('FindAll method', () => {
    it('should be defined findAll', () => {
      expect(controller.findAll).toBeDefined();
    });

    it('should return an array of users', () => {
      const mockUser: Array<ClientDto> = [
        {
          email: 'dv237968@gmail.com',
          password: 'Piter09806969454@',
        },
      ];

      service.findAll = jest.fn().mockImplementation(() => mockUser);
    });
  });
});