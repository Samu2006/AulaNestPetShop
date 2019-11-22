import { BackofficeModule } from './backoffice.module';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [BackofficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
