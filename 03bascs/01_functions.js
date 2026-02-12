// - A function is a block of code designed to perform a specific task. It Helps in code reusability and modularity. these are Defined once, can be called multiple times.
/* 
- Syntax:- 
  function greet() {
      console.log("Hello World");
  }
 greet(); -- called here
*/
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("O");
    console.log("N");
    console.log("U");
   
}
// sayMyName() // HISONU
// console.log(sayMyName); // [Function: sayMyName]
// console.log(sayMyName()); // HISONU


function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
// addTwoNumbers(1, 11) // 12
// addTwoNumbers(3, "a") // 3a => we did not gave any condition in the function, so it's converting and adding anything which is passed in arguments. 
// addTwoNumbers("hi", "there") // hithere
// Note:- when declaring the function, whatever we pass in paranthesis is called parameters and while calling the function, whtever values arte passed is known as arguments.
// Note----->>> In JavaScript, when a function does not have a return statement, it implicitly returns undefined.

function addNewNumbers(number1, number2){

    //  let result = number1 + number2
    //  return result
    //  console.log("heloo there"); // this will not execute because once you return a function it stops here. no code after return will execute inide the function
    
    // NOTE- another wa to save more space-
    // instead of declaring a variable result and then assigning number1+number2 then return result, we can directlty return as below:
    return number1 + number2
 }

const result = addNewNumbers(3, 5) // storing function output in a new variable only possible, when we are returning the funcion 

// console.log("Result: ", result); // Result:  8

function loginUserMessage1(username ){
    
    return `${username} just logged in`
}

// console.log(loginUserMessage1("Sonu")) // Sonu just logged in
// console.log(loginUserMessage1("")) //   just logged in => as we passed empty string
// console.log(loginUserMessage1()); // undefined just logged in => because we did not pass anything in arguement. So to avoid this, we can apply ome conditions like te next function;: 


function loginUserMessage2(username){
    if(username === undefined){
        console.log("PLease enter a username");
        return // if code enters in this If condition and we use return, the function will not execute further. otherwise the message nside if statement will be displayed still code will execute further. 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage2("Sonu")) // Sonu just logged in
// console.log(loginUserMessage2()) // PLease enter a username

// NOTE:- another way to use if condition: widely used-
function loginUserMessage3(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage3()) // PLease enter a username

// To avoid the undefined situation, we can also give a default value in parameter of the function so it will always execute atleast with the default value. for example:

function loginUserMessage4(username = "Sam" ){
    
    return `${username} just logged in`
}

// console.log(loginUserMessage4("Sonu")) // Sonu just logged in
// console.log(loginUserMessage4()) //  Sam just logged in => as we did not pass any arguement, Sam is the default argument from parameter of the function

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


/*
                                +++++++++++++++  Summary  ++++++++++++++++++

---

## 📌 Key Notes on Functions in JavaScript

### 1. What is a Function?
- A **function** is a block of code designed to perform a specific task.
- Helps in **code reusability** and **modularity**.
- Defined once, can be called multiple times.

### 2. Function Declaration
- Syntax:
  ```javascript
  function greet() {
      console.log("Hello World");
  }
  ```
- Called using `greet();`.

### 3. Parameters vs Arguments
- **Parameters**: Variables listed inside the function definition.
- **Arguments**: Actual values passed when calling the function.
  ```javascript
  function add(a, b) {
      return a + b;
  }
  console.log(add(5, 10)); // 15
  ```

### 4. Return Statement
- Functions can return values using `return`.
- If no `return` is specified, the function returns `undefined`.

### 5. Default Parameters
- JavaScript allows setting default values for parameters.
  ```javascript
  function multiply(a, b = 2) {
      return a * b;
  }
  console.log(multiply(5)); // 10
  ```

### 6. Function Expressions
- Functions can be stored in variables.
  ```javascript
  const greet = function() {
      console.log("Hello!");
  };
  greet();
  ```

### 7. Arrow Functions (Intro)
- Shorter syntax for writing functions.
  ```javascript
  const sum = (a, b) => a + b;
  ```

### 8. Practical Examples
- Functions used for:
  - Calculations
  - Printing messages
  - Handling user input
  - Returning processed data

---

## 🎯 Core Takeaway
Functions are the **building blocks of JavaScript programs**. They:
- Reduce repetition
- Make code cleaner and modular
- Allow flexibility with parameters and return values

---

Would you like me to also prepare a **cheat sheet of function types in JavaScript** (declaration, expression, arrow, IIFE, etc.) so you can quickly reference them while coding?

*/