import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';
import { SerializedUser, User } from '../../types';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,){

    }

    private users: User[] = [];

    getUsers(){
        return this.users.map((user) =>  new SerializedUser(user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }

    createUser(createUserDto: CreateUserDto) {

    }
}
