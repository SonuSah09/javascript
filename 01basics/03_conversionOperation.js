let score = 39
let score2 = "33"
let score3 = "45abs"
let isEligible = true
let isEnrolled = undefined
let isPassed = null
let result;
/*
console.log(typeof score); // number
console.log(typeof(score2)); // string
console.log(typeof score3); // string
console.log(typeof isEligible); // boolean


// NOTE: to print the typeOff any variable/value, we can write in both ways:- typeOff or typeOff()

                // Conversion of dataType in Number // 

let score2InNumber = Number(score2)
console.log(score2InNumber); //33 = converted score2 - "33" from string to number

let score3InNumber = Number(score3)
console.log(score3InNumber); // NaN - this will give NaN means "not a number" but still the typeOff score3InNumber will Number only.

let eligibilityInNumber = Number(isEligible) 
console.log(eligibilityInNumber); // 1

let isEnrolledInNumber = Number(isEnrolled)
console.log(isEnrolledInNumber); // NaN 

let isPassedInNumber = Number(isPassed)
console.log(isPassedInNumber); // 0 

let resultInNumber = Number(result)
console.log(resultInNumber); // NaN

                       // Summary for number conversion // 
// string like "33" => 33
// string like "33abc" or "33#$" => NaN
// boolean like true => 1 and  false => 0
// undefined => NaN
//  Null => 0

*/


                          // Conversion of dataType in Boolean // 

let isLoggedIn1 = 1
let isLoggedIn2 = 0
let isLoggedIn3 = "Sonu"
let isLoggedIn4 = ""
let isLoggedIn5 = null
let isLoggedIn6 = undefined
let isLoggedIn7 = -55

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.log(booleanIsLoggedIn1); // true

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2); // false

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
// console.log(booleanIsLoggedIn3); // true

let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
// console.log(booleanIsLoggedIn4); // false

let booleanIsLoggedIn5 = Boolean(isLoggedIn5)
// console.log(booleanIsLoggedIn5);  // false

let booleanIsLoggedIn6 = Boolean(isLoggedIn6)
// console.log(booleanIsLoggedIn6); // false

let booleanIsLoggedIn7 = Boolean(isLoggedIn7)
// console.log(booleanIsLoggedIn7); // true

                       // Summary for boolean conversion // 

// 1 => true; 
// 0 => false
// "" => false
// "sonu" => true
// undefined and null  => false
// any number except 0 => true;

                          // Conversion of dataType in String // 

                         
let someNumber = 56
let someNumber2 = "5+5"
let isNew = true
let isNew1 = undefined
let isNew2 = null

/* 
let stringNumber = String(someNumber)
console.log(stringNumber); // 56
console.log(typeof stringNumber); // string

let stringNumber2 = String(someNumber2)
console.log(stringNumber2); // 5+5 

let stringIsNew = String(isNew)
console.log( stringIsNew); // true and typeOf stringNew will be String

let stringIsNew1 = String(isNew1)
console.log( stringIsNew1); // undefined and typeOf stringNew will be String

let stringIsNew2 = String(isNew2)
console.log( stringIsNew2); // null and typeOf stringNew will be String

*/

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**7); // 128 (2^7)
// console.log(2/3); // 0.6666
// console.log(15%2); // 1 >> remainder operation

let str1 = "Hello"
let str2 = " Javascript"

let str3 = str1 + str2
let str4 = str1 - str2
// console.log(str3); // Hello Javascript
// console.log(str4); // NaN - subtracting strings not allowed

// console.log("1" + 2); // 12 => type of output will be String
// console.log(1 + "2"); // 12 => type of output will be String
// console.log(1 + 2); //    3 =>type of output will be Number
// console.log("1" + 2 + 2); // 122 => first input is string so all the inputs will be treated as string
// console.log(1 + 2 + "2"); // 32 => first input is a number so first mathematical addition will be done for the Number type inputs until Sting comes in picture.

// NOTE: in real world, it's advised not to use the above kind of confusing/messy code. Try to use parenthesis as much as possible for better code readabiolity.

// console.log( (3 + 4) * 5 % 3);  // 2 

// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;

 console.log(gameCounter); // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion