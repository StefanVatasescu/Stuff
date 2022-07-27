import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser, User } from '../../types';
import { User as UserEntity } from '../../../typeorm';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    private users;
    getUsers(): SerializedUser[];
    getUserByUsername(username: string): User;
    getUserById(id: number): User;
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
}
