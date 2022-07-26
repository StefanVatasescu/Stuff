import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { NextFunction } from 'express';
import { nextTick } from 'process';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
    controllers: [CustomersController],
    providers: [CustomersService]
})
export class CustomersModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware, (
            req: Request, res: Response, next: NextFunction) => {
                console.log('Last Middleware')
                next();
            }
        ). exclude({
            path: 'customers/create',
            method: RequestMethod.POST,
        },
        {
            path: 'customers',
            method: RequestMethod.GET,
        },)
        .forRoutes(CustomersController);
    }
}
