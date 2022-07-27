import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

export class HttpExceptionFIlter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log(exception.getResponse());
        console.log(exception.getStatus());
        console.log(exception);

        const context = host.switchToHttp();
        const Request = context.getRequest<Request>();
        const response = context.getResponse<Response>();

        response.sendStatus(exception.getStatus());
    }
}