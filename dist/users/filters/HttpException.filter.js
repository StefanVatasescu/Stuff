"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFIlter = void 0;
class HttpExceptionFIlter {
    catch(exception, host) {
        console.log(exception.getResponse());
        console.log(exception.getStatus());
        console.log(exception);
        const context = host.switchToHttp();
        const response = context.getResponse();
        response.sendStatus(exception.getStatus());
    }
}
exports.HttpExceptionFIlter = HttpExceptionFIlter;
//# sourceMappingURL=HttpException.filter.js.map