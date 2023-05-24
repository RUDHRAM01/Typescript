import { HasFormatter } from "../interface/HasFormatter";
export class Invoice implements HasFormatter {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `client : ${this.client} details : ${this.details} amount : ${this.amount}`
    }
}