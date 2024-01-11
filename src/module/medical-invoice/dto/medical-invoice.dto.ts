import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { types } from 'src/common/enums/invoice.enums';
export class medicalInvoiceDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_appointment: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  total_value: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @ApiProperty({ enum: [types] })
  @IsNotEmpty()
  @IsEnum(types)
  type: types;
}
