import { Flunt } from './../../utils/flunt';
import { Customer } from './../models/customer.model';
import { Contract } from '../../contracts/contracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCustomerContract implements Contract {

    errors: any[];

    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome invalido, tamanho minino é de 5 caracteres');
        flunt.isEmail(model.email, 'E-mail inválido');
        flunt.isFixedLen(model.documento, 11, 'CPF invalido');
        flunt.hasMinLen(model.password, 6, 'Senha invalido');

        this.errors = flunt.errors;

        return this.errors.length === 0;
    }
}