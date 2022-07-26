import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from '../../types';

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
        return this.users.map((user) => plainToClass(SerializedUser, user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }
}
