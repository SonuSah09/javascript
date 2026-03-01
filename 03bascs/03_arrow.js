/*                                   ++++++++++++++++++ THIS Keyword  ++++++++++++++++++       

Notes: This context works only in Objects. In function it will not work 
*/

const user = {
    username: "Jofra",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // NOTE: this => this keyword is used to refer current context.
        console.log(this); // Note: this will print the current context of the object (i.e- {username: "Jofra", price: 999, welcomeMessage: [Function: welcomeMessage]}) whenever we call this method. 
    }

}

// user.welcomeMessage() // Jofra, welcome to website => also will print the object 'user' with current context as inside the method, we are printing 'this' 

// user.username = "Sam" // now this will change the current context, means this will change the value of username in the 'user' object

// user.welcomeMessage() // Sam, welcome to website => also will print the object 'user' with current context as inside the method, we are printing 'this'

// console.log(this); // {} => Note: as we are running in node environment, it will give empty object because currently there is no context inside the global. But in browsers, it will not give an empty object as there is window object present inside the global in a browser engine. 


/*
function chai(){
    let username = "Chris"
    console.log(this); // Now this will print multiple context which is present for this function in node environment
    console.log(this.username); // if we call function chai() now then this will be undefined because This keyword is used to access context inside the object not functions.
    
}

chai()


const moreChai = function () {
    let username = "Alex"
    console.log(this.username);
}

moreChai() // undefined and the reason is same as we saw in 'chai' function
*/ 

const anotherChai =  () => {
    let username = "Robb"
    console.log(this);
    console.log(this.username); // undefined
    
}


anotherChai() // {} => will return the empty object


/*                                   ++++++++++++++++++   Arrow Function   ++++++++++++++++++                                          

Basic Syntex of Arrow function: () => {}
Also we can use like: const anyVariable = (val1, val2) => { return val1+val2}    
*/

// explicit return: need to write return keyword to return the function. Example:- 
const addNums = (num1, num2) => {
    return num1 + num2
}
console.log(addNums(3, 4)) // 7

// Also can be written like below 2 ways:

// first way to write- Implisit Return: no need to write return keyword to return the function. Also no curl braces needed. example:-
const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(6, 4)) // 10

// seond way to write- 
const addAgain = (num1, num2) => ( num1 + num2 ) // this way is used widely in react. no need to write return keyword if using this way
console.log(addAgain(21,18)); // 39

// Returning an object: 
const addMore = (num1, num2) => ({username: "Joel"}) // ==>> must use paranthesis like-  ({Any oject}) to return an object.
console.log(addMore(8, 2)) // { username: 'Joel' }


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

