// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true


// console.log("2" > 1); // true
// console.log("02" > 1); // true


console.log(null > 0);  // false 
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// NOTE: it is advised not to compare with Null and undefined as shown above.

// "===" this strictily checks the comparision means will compare the value as well as the data type 

console.log("2" === 2); // false as one is string and one is number

