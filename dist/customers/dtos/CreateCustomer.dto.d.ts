import { CreateAddressDto } from "./CreateAddress.dto";
export declare class CreateCustomerDto {
    id: number;
    email: string;
    name: string;
    address: CreateAddressDto;
}
