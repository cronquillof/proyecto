import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class AppointmentDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;
}
