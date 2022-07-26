import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from '../../types';

@Injectable()
export class UsersService {
    private users: User[] = [
    {
        id : 1,
        username : 'andy',
        password: 'andy',
    },
    {
        id : 2,
        username : 'bandy',
        password: 'bandy',
    },
    {
        id : 3,
        username : 'candy',
        password: 'candy',
    },
    {
        id : 4,
        username : 'dandy',
        password: 'dandy',
    },
    ];

    getUsers(){
        return this.users.map((user) =>  new SerializedUser(user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }
}
