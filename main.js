const add=require('./add')
const subtract=require('./subtract')
const multiply=require('./multiply')
const divide = require('./divide')


let A = add(5, 10);
let B = subtract(50, 23);
let C = multiply(5, 10);
let D = divide(40, 5);

console.log(A,B,C,D)