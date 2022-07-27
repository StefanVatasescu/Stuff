import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound,exceptions';
import { HttpExceptionFIlter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService){

    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers(){
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('username/:username')
    getByUsername(@Param('username') username: string){
        const user = this.userService.getUserByUsername(username);
        if (user) return new SerializedUser(user);
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFIlter)
    @Get('userid/:userid')
    getById(@Param('userid', ParseIntPipe) userid: number) {
        const user = this.userService.getUserById(userid);
        if(user) return new SerializedUser(user);
        else {
            throw new UserNotFoundException();
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto) {

    }
}
