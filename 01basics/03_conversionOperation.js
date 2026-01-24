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
console.log(booleanIsLoggedIn7); // true

                       // Summary for boolean conversion // 

// 1 => true; 
// 0 => false
// "" => false
// "sonu" => true
// undefined and null  => false
// any number except 0 => true;

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion