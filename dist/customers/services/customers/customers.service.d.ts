import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
export declare class CustomersService {
    customers: {
        id: number;
        email: string;
        name: string;
    }[];
    findCustomerById(id: number): {
        id: number;
        email: string;
        name: string;
    };
    createCustomer(customerDto: CreateCustomerDto): void;
    getCustomers(): {
        id: number;
        email: string;
        name: string;
    }[];
}
