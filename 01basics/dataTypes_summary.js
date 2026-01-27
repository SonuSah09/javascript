//  Basically there are two types of DataTypes-
//  1:Primitive,
//  2:Non Premitive or Refrence DataType

//  # Premetive Datatypes are further classified in 7 types

//  String,
//  Number,
//  Boolearn,
//  null,
//  undefined,
//  Symbol,
//  BigInt
// Below are some Examples: 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // False

 const bigNumber = 3456543576654356754n



// # Reference (Non primitive) Datatypes are further classified in 3 types

// Array, 
// Objects, 
// Functions

// Below are some Examples: 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sonu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

/*
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigInt

console.log(typeof heros ); // objet
console.log(typeof myObj); // object
console.log(typeof myFunction); // function

console.log(myObj); // name: 'sonu' , age: 22

*/


// https://262.ecma-international.org/5.1/#sec-11.4.3

/*   ************** Notes - which variable is of what dataType: ******************

Return type of variables in JavaScript
=======================
 Primitive Datatypes
---------------------------------------------------
       Number =>     number
       String  =>        string
       Boolean  =>    boolean
       null  =>             object
       undefined  =>  undefined
       Symbol  =>      symbol
       BigInt  =>         bigint
========================
 Non-primitive Datatypes
---------------------------------------------
       Arrays  =>       object
       Function  =>  function
       Object  =>       object
*/

// ===================================================================================================

//                                       Types of Memory

// 1. Stack Memory : Used for all premitive datatypes
// 2. Heap Memory : Used for refrence or non-premitive datatypes

// Example for Stack Memory

let myHometown = "Begusarai" // now this will be stored in Stack memory

let myCurrentCity = myHometown

console.log(myCurrentCity); // Begusarai

myCurrentCity = "New Delhi"

console.log(myHometown); // Begusarai  
console.log(myCurrentCity); // New Delhi

// Example for Heap Memory:

let userOne = {
    Email: "sonu@yahoo.com",
    upiId: "sonu@ybl"
}
let userTwo = userOne
userTwo.Email = "changed@email.com"

console.log(userOne.Email); // changed@email.com
console.log(userTwo.Email); // changed@email.com



//====================================================================================================
