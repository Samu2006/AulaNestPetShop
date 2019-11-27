import { CustomerController } from '../backoffice/controllers/customer.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [CustomerController]
})
export class BackofficeModule {}