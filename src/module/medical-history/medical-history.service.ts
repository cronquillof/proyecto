import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { medicalHistory } from 'src/module/medical-history/entity/MedicalHistory.entity';
import { Repository } from 'typeorm';
import { medicalHistoryDto } from './dto/medical-history.dto';
import errors from 'src/utils/errors';

@Injectable()
export class MedicalHistoryService {
  constructor(
    @InjectRepository(medicalHistory)
    private readonly medicalHistoryRepository: Repository<medicalHistory>,
  ) {}

  findAll(): Promise<medicalHistory[]> {
    const data = this.medicalHistoryRepository.find().catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
    return data;
  }

  async findOne(id: number) {
    const data = this.medicalHistoryRepository
      .findOne({ where: [{ id }] })
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return data;
  }

  async create(history: medicalHistoryDto): Promise<medicalHistory> {
    const data = await this.medicalHistoryRepository
      .save(history)
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return data;
  }
  async update(history: medicalHistoryDto) {
    const data = await this.medicalHistoryRepository
      .save(history)
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return data;
  }
  async delete(id: number) {
    const data = await this.medicalHistoryRepository
      .delete({ id })
      .catch((error) => {
        throw new HttpException(
          {
            message: errors[error.errno] || error.message,
            statusCode: error.errno || error.statusCode,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
    return data;
  }
}
