import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{

    use(req: Request, res: Request, next: NextFunction) {
        console.log('Hello, World! I am inside ValidateCustomerMiddleware!!!');
        const { authorization } = req.headers;
        if(!authorization)
            return res
                .status(403)
                .send({error: 'No Authentification TOken Provided' });
        next();
    }
}