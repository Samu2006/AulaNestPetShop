import { Result } from './../backoffice/models/result.model';
import { Contract } from './../contracts/contracts';
import { NestInterceptor, ExecutionContext, CallHandler, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from "rxjs";

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
    constructor(public contract: Contract) { }

    intercept(context: ExecutionContext,
        next: CallHandler<any>)
        : Observable<any> | Promise<Observable<any>> {

        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate(body);

        if (!valid) {
            throw new HttpException(
                new Result(
                    'Ops, algo deu errado',
                    false,
                    null,
                    this.contract.errors),
                HttpStatus.BAD_REQUEST)
        }
        return next.handle();
    }

}