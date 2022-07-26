"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersModule = void 0;
const common_1 = require("@nestjs/common");
const customers_controller_1 = require("./controllers/customers/customers.controller");
const validate_customer_account_middleware_1 = require("./middlewares/validate-customer-account.middleware");
const validate_customer_middleware_1 = require("./middlewares/validate-customer.middleware");
const customers_service_1 = require("./services/customers/customers.service");
let CustomersModule = class CustomersModule {
    configure(consumer) {
        consumer.apply(validate_customer_middleware_1.ValidateCustomerMiddleware, validate_customer_account_middleware_1.ValidateCustomerAccountMiddleware, (req, res, next) => {
            console.log('Last Middleware');
            next();
        }).exclude({
            path: 'customers/create',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'customers',
            method: common_1.RequestMethod.GET,
        })
            .forRoutes(customers_controller_1.CustomersController);
    }
};
CustomersModule = __decorate([
    (0, common_1.Module)({
        controllers: [customers_controller_1.CustomersController],
        providers: [customers_service_1.CustomersService]
    })
], CustomersModule);
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=customers.module.js.map