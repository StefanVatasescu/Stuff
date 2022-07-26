import { User } from '../../types/User';
export declare class UsersService {
    private users;
    getUsers(): User[];
    getUserByUsername(username: string): User;
}
