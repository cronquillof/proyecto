import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorDto } from './dto/Collaborator.dto';
import errors from 'src/utils/errors';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Collaborator')
@Controller('collaborator')
export class CollaboratorController {
  constructor(private collaboratorService: CollaboratorService) {}

  @Get()
  async findCollaborators() {
    return await this.collaboratorService.find();
  }

  @Post()
  async createCollaborator(@Body() collaborator: CollaboratorDto) {
    return await this.collaboratorService
      .create(collaborator)
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Put()
  async updateCollaborator(@Body() collaborator: CollaboratorDto) {
    return await this.collaboratorService
      .update(collaborator)
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Delete('/:id')
  async deleteCollaborator(@Param('id') id: number) {
    return await this.collaboratorService.delete(id).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
}
