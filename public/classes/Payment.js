export class Payment {
    constructor(c, d, a) {
        this.recipients = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `recipients : ${this.recipients} details : ${this.details} amount : ${this.amount}`;
    }
}
