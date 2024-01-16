import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { medicalInvoice } from 'src/module/medical-invoice/entity/MedicalInvoice.entity';
import { Repository } from 'typeorm';
import { medicalInvoiceDto } from './dto/medical-invoice.dto';

@Injectable()
export class MedicalInvoiceService {
  constructor(
    @InjectRepository(medicalInvoice)
    private readonly medicalInvoiceRepository: Repository<medicalInvoice>,
  ) {}

  async find(): Promise<medicalInvoice[]> {
    const invoices = await this.medicalInvoiceRepository.find();
    return invoices;
  }

  async create(invoice: medicalInvoiceDto): Promise<medicalInvoice> {
    const data = await this.medicalInvoiceRepository.save(invoice);
    return data;
  }
  async update(invoice: medicalInvoiceDto): Promise<medicalInvoice> {
    const data = await this.medicalInvoiceRepository.save(invoice);
    return data;
  }

  async delete(id: number) {
    const invoices = await this.medicalInvoiceRepository.delete({ id });
    return invoices;
  }
}