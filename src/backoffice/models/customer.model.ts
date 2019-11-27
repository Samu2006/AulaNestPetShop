import { CreditCard } from './credit-card.model';
import { Address } from './address.model';
import { Pet } from "./pet.model";

export class Customer {
    constructor(public name: string,
        public documento: String,
        public email: String,
        public pets: Pet[],
        public billingAddress: Address,
        public shippingAddress: Address,
        public creditCard: CreditCard,
        public password: String,
        public active: Boolean) {

    }

}