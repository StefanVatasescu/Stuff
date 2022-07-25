import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {

    customers= [{
            id: 1,
            email: "johnny@gmail.com",
            name: "John",
        },
        {
            id: 2,
            email: "dohnny@gmail.com",
            name: "Dohn",
        },
        {
            id: 3,
            email: "bohnny@gmail.com",
            name: "Bohn",
        },
    ];

    findCustomerById(id: number) {
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto){
        this.customers.push(customerDto);

    }

    getCustomers(){
        return this.customers;
    }
}
