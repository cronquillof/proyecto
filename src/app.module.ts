import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModule } from './module/module.module';
import { CommonModule } from './common/common.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [ModuleModule, CommonModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
