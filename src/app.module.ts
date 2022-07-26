import { Module } from '@nestjs/common';
import { CustomersController } from './customers/controllers/customers/customers.controller';
import { CustomersService } from './customers/services/customers/customers.service';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
@Module({
  imports: [UsersModule, CustomersModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class AppModule {}
