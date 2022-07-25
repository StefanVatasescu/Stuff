import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsNumberString()
    id : number;

    @IsEmail()
    email : string;

    @IsNotEmpty()
    name : string;
}