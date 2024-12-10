import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [StoreModule, CustomerModule],
})
export class AppModule {}
