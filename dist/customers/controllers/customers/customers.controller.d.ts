import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    getCustomer(id: number, req: Request, res: Response): void;
    searchCustomerById(id: number): {
        id: number;
        email: string;
        createdAt: Date;
    };
}
