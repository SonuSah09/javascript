//               +++++++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++++++

const score = 400
console.log(score); // 400 => type will be Number

const balance = new Number(100)
console.log(balance); // [Number: 100]
console.log(balance.toString()); // 100 => string
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00 => type will be string

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // 123.9 => will roundOff/precise the number upto given  limit

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//                  +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4 => abs is used to give the absolute value. i.e positive values
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.2)); // 5 => gives roundoff  to  above values
console.log(Math.floor(4.9)); //  4 => gives the round off of lowest value
console.log(Math.min(4, 3, 6, 8)); // 3 => gives the minimum value of array
console.log(Math.max(4, 3, 6, 8)); // 8 => gives the maximum value of array

console.log(Math.random()); // will give any random decimal number between 0 to 1
console.log((Math.random()*10) + 1); // will give any random number between 1 to 10. note: adding +1 assures to remove 0
console.log(Math.floor(Math.random()*10) + 1); // adding floor assures to round off ther value to the lowest number.

const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min) // now the random number willbe within the range of 10 to 20