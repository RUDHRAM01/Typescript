import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('rudhram', '11/12/2001', 1000);
// docTwo = new Payment('rahul', '11/12/2001', 1000);
// let doc: HasFormatter[] = [];
// doc.push(docOne);
// doc.push(docTwo);
// console.log(doc);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
let newList = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ty = type.value;
    const tof = toFrom.value;
    const de = details.value;
    const am = amount.valueAsNumber;
    let doc;
    if (ty == 'invoice') {
        doc = new Invoice(tof, de, am);
    }
    else {
        doc = new Payment(tof, de, am);
    }
    newList.render(doc, ty, 'end');
    console.log(tof, de, am);
});
