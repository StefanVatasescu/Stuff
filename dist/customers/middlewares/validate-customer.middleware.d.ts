import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
export declare class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Request, next: NextFunction): any;
}
