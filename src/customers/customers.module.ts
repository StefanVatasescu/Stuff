import { Get, Module } from '@nestjs/common';

@Module({
    
})
export class CustomersModule {

    @Get('')
    getCustomer(){
        return{
            id: 1,
            email: 'john@gmail.com',
            createdAt: new Date(),
        };
    }

}