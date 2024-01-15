import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from 'src/module/client/entity/Client.entity';
import { Repository } from 'typeorm';
import { ClientDto } from 'src/module/client/dto/Client.dto';
import { genders } from 'src/common/enums/client.enums';
import { ClientSerializer } from 'src/common/serializer/client.serializer';

describe('ClientService', () => {
  let service: ClientService;
  let clientRepository: Repository<Client>;

  const clientTokenRepository = getRepositoryToken(Client);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: clientTokenRepository,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    clientRepository = module.get<Repository<Client>>(clientTokenRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('clienRepository should be defined', () => {
    expect(clientRepository).toBeDefined();
  });
  describe('Create Client', () => {
    it('should create a client with ClientDto', async () => {
      const client: ClientDto = {
        email: 'dv237968@gmail.com',
        password:'123',
        id:1,
        collaborator:null
      };
      const expectedClient = {
        email: 'dv237968@gmail.com',
        password:'123',
        id:1,
        collaborator:null
      };

      // Mock the repository's save method to return the expectedClient object
      jest
        .spyOn(clientRepository, 'save')
        .mockResolvedValue(
          expectedClient as unknown as Promise<ClientSerializer>,
        );

      const result = await service.createClient(client);

      expect(result).toEqual(expectedClient);
      expect(clientRepository.save).toHaveBeenCalledWith(client);
    });
  });
  describe('Find Client width id', () => {
    it('should find all clients ', async () => {
      const clientId = 1;
      const expectedClient = {
        id: 1,
        email: 'dv237968@gmail.com',
        password:'123',
      };

      // Mock the repository's save method to return the expectedClient object
      jest
        .spyOn(clientRepository, 'findOne')
        .mockResolvedValue(
          expectedClient as unknown as Promise<ClientSerializer>,
        );

      const result = await service.findClientsById(clientId);

      expect(result).toEqual(expectedClient);
      expect(clientRepository.findOne).toHaveBeenCalledWith(clientId);
    });
  });
});