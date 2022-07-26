export interface User {
    username: string;
    password: string;
}
export declare class SerializedUser {
    username: string;
    password: string;
    constructor(partial: Partial<SerializedUser>);
}
