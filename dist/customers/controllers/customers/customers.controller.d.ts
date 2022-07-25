import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    getCustomer(id: number, req: Request, res: Response): void;
    getAllCustomers(): {
        id: number;
        email: string;
        name: string;
    }[];
    searchCustomerById(id: number): {
        id: number;
        email: string;
        name: string;
    };
    createCustomer(createCustomerDto: CreateCustomerDto): void;
}
