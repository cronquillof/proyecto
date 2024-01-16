import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClientService } from './client.service';

import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/guard/auth.guard';
import { RegisterAuthDto } from '../auth/dto/register-auth.dto';
@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private clienteService: ClientService) {}

  @Get('/doctor')
  async findClientsDoctor() {
    return await this.clienteService.findClientsDoctor();
  }

  @Get('/')
  async findAll() {
    return await this.clienteService.findAll();
  }

  @Get('/:email')
  @UseGuards(AuthGuard)
  async getClientByEmail(@Param('email') email: string) {
    const client = await this.clienteService.findClientByEmail(email);
    return { data: client, message: 'Se ha encontrado una coincidencia' };
  }

  @Get('/:id')
  async getClientById(@Param('id') id: number) {
    const client = await this.clienteService.findClientsById(id);
    return { data: client, message: 'Se ha encontrado una coincidencia' };
  }

  @Post()
  async createClient(@Body() client: RegisterAuthDto) {
    const data = await this.clienteService.createClient(client);
    return { data, message: 'Se creo el nuevo cliente' };
  }

  @Put()
  async updateClient(@Body() client: RegisterAuthDto) {
    const response = await this.clienteService.updateClient(client);
    return { response, message: 'El paciente fue actualizado' };
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: number) {
    const response = await this.clienteService.deleteClient(id);
    return { response, message: 'El paciente fue eliminado ' };
  }
}