import { Module } from '@nestjs/common';
import { CustomersController } from './customers/controllers/customers/customers.controller';
import { CustomersService } from './customers/services/customers/customers.service';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm';
@Module({
  imports: [UsersModule, CustomersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: '217.148.143.37',
    port: 15432,
    username: 'caviboxuser',
    password: 'parolapguser',
    database: 'test',
    entities: [User],
    synchronize: true
  })],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class AppModule {}
