import { Module } from '@nestjs/common';
// *file env
import { ConfigModule } from '@nestjs/config';
//* typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// *Modules
import { MedicalInvoiceModule } from './module/medical-invoice/medical-invoice.module';
import { ClientModule } from './module/client/client.module';
import { MedicalHistoryModule } from './module/medical-history/medical-history.module';
import { CollaboratorModule } from './module/collaborator/collaborator.module';
import { CollaboratorScheduleModule } from './module/collaborator-schedule/collaborator-schedule.module';
import { ReportModule } from './module/report/report.module';
import { MedicalAppointmentModule } from './module/medical-appointment/medical-appointment.module';
import { MedicalScheduleModule } from './module/medical-schedule/medical-schedule.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASS,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MedicalInvoiceModule,
    ClientModule,
    MedicalHistoryModule,
    CollaboratorModule,
    CollaboratorScheduleModule,
    ReportModule,
    MedicalAppointmentModule,
    MedicalScheduleModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
