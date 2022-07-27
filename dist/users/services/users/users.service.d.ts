import { SerializedUser, User } from '../../types';
export declare class UsersService {
    private users;
    getUsers(): SerializedUser[];
    getUserByUsername(username: string): User;
    getUserById(id: number): User;
}
