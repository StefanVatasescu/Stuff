import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto {

    @IsNumberString()
    @IsNotEmpty()
    id : number;

    @IsEmail()
    email : string;

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address : CreateAddressDto;
}