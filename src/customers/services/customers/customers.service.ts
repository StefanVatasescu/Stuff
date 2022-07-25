import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    users= [{
        id: 1,
            email: "johnny@gmail.com",
            createdAt: new Date(),
        },
        {
        id: 2,
            email: "dohnny@gmail.com",
            createdAt: new Date(),
        },
        {
        id: 3,
            email: "bohnny@gmail.com",
            createdAt: new Date(),
        },
    ];

    findCustomerById(id: number) {
        return this.users.find((user) => user.id === id);
    }
}
