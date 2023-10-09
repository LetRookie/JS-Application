import { product, sum, data } from './module.js';
import { sum as trioSum } from './secondModule.js';
 
import Person from './Person.js';// default export is automaticaly renamed we can call Student for ex. instead of Person
// that's why default export is not desireable, it can cause reference lost between data

//import * as api from './module.js';

console.log(sum(3, 5));
console.log(product(3, 5));
console.log(trioSum(1, 2, 3));
console.log(data);

const newPerson = new Person('Gaby', 25)
console.log(`Hello my name is ${newPerson.name} and I am ${newPerson.age} years old!`);