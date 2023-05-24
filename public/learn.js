"use strict";
// // interface
// interface IsPerson {
//     name: string,
//     age: number
//     speak(n: string): void;
//     spend(a: number): number;
// }
// const OneInterface: IsPerson = {
//     name: "name",
//     age: 21,
//     speak(n: string) {
//         console.log(n)
//     },
//     spend(a: number) {
//         return a;
//     }
// };
// const fun1 = (person: IsPerson) => {
//     console.log(person);
// }
// fun1(OneInterface)
// import { Invoice } from "./classes/Invoice";
// // explicit type
// let char: string
// let num: number
// let isBoolean: boolean
// //array
// let arr1: string[] = [];
// arr1.push("hello")
// // multi type array
// let arr2: (string | number)[] = [];
// arr2.push("hello");
// arr2.push(2)
// // object
// let obj: object
// obj = {
//     name: "name",
//     age: 21,
//     year: "3rd"
// }
// // dynamic type
// let variable: any = 25
// // function
// let fun: Function;
// fun = () => {
//     console.log("hello user")
// }
// let add = (a: number, b: number, c?:number | string) => {
//     console.log(a+ b)
// }
// add(5,6)
// // return value
// let sum = (a: number, b: number): number => {
//     return (a + b);
// }
// console.log(sum(2, 3))
// // create type
// type stringOrNum = string | number
// let exam = (userId: stringOrNum, name: string) => {
//     console.log("hello")
// }
// // dom and type casting
// // const anchor = document.querySelector('a')!;
// // console.log(anchor.href)
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)
// const type = document.querySelector('#type') as HTMLSelectElement
// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault()
//     console.log(type.value)
// })
// // classes
// const obj1 = new Invoice('client', "11/12/2001", 21);
// // access modifier
// class Access {
//     //by default is public
//     readonly client: string;
//     private details: string;
//     public amount: number
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a
//     }
// }
// class Access1 {
//     //by default is public
//     // readonly client: string;
//     // private details: string;
//     // public amount: number
//     constructor(readonly client: string, private details: string, public amount: number){}
// }
//generics
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let k = addId({ name: 'rudhram', age: 21 });
console.log(k);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["one"] = 0] = "one";
    ResourceType[ResourceType["two"] = 1] = "two";
    ResourceType[ResourceType["three"] = 2] = "three";
    ResourceType[ResourceType["four"] = 3] = "four";
})(ResourceType || (ResourceType = {}));
let gen1 = {
    uid: 32342,
    resourceType: ResourceType.two,
    data: "fds"
};
// tuple and array
let arr = [1, "hello", true];
let tup = ["hello", 23, true];
