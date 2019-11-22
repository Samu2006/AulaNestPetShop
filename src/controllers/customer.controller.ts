import { Customer } from './../models/customer.model';
import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";

@Controller('v1/customers')
export class CustomerController {

    @Get()
    get() {
        return 'Obter os clientes';
    }

    @Get(':document')
    getById(@Param('document') document) {
        return 'Obter os clientes ' + document;
    }

    @Post()
    post(@Body() body: Customer) {
        return body;
    }

    @Put()
    put(@Param('document') document, @Body() body: Customer) {
        return {
            customer: document,
            data: body
        };
    }

    @Delete()
    delete() {
        return 'Remover um clientes';
    }
}