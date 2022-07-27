import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): SerializedUser[];
    getByUsername(username: string): SerializedUser;
    getById(userid: number): SerializedUser;
}
