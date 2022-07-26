import { Injectable } from '@nestjs/common';
import { User } from '../../types/User';

@Injectable()
export class UsersService {
    private users: User[] = [
    {
        username : 'andy',
        password: 'andy',
    },
    {
        username : 'bandy',
        password: 'bandy',
    },
    {
        username : 'candy',
        password: 'candy',
    },
    {
        username : 'dandy',
        password: 'dandy',
    },
    ];

    getUsers(){
        return this.users;
    }

    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }
}
