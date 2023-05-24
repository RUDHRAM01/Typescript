import { HasFormatter } from "../interface/HasFormatter";
export class Payment implements HasFormatter {
    recipients: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.recipients = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `recipients : ${this.recipients} details : ${this.details} amount : ${this.amount}`
    }
}