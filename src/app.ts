import { HasFormatter } from "./interface/HasFormatter.js";
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


const form = document.querySelector('.new-item-form') as HTMLFormElement
//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!;
let newList = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const ty = type.value;
    const tof = toFrom.value;
    const de = details.value;
    const am = amount.valueAsNumber;
    let doc: HasFormatter
    if (ty == 'invoice') {
        doc = new Invoice(tof, de, am);
    } else {
        doc = new Payment(tof, de, am);
    }
    
    newList.render(doc, ty, 'end');
    console.log(tof, de, am);
})