import { CreateCustomerContract } from './../contracts/customer.contracts';
import { ValidatorInterceptor } from './../../interceptors/validator.interceptor';
import { Result } from './../models/result.model';
import { Customer } from '../models/customer.model';
import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from "@nestjs/common";

@Controller('v1/customers')
export class CustomerController {

    @Get()
    get() {
        return new Result(null, true, [], null);
    }

    @Get(':document')
    getById(@Param('document') document: string) {
        return new Result(null, true, [], null);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    post(@Body() body: Customer) {
        return new Result("Cliente Adicionado com sucesso!", true, body, null);
    }

    @Put(':document')
    put(@Param('document') document: string, @Body() body: Customer) {
        return new Result("Cliente alterado com sucesso!", true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document: string) {
        return new Result('Cliente removido com sucesso!', true, [], null);
    }
}