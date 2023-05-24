export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `client : ${this.client} details : ${this.details} amount : ${this.amount}`;
    }
}
