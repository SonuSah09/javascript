
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
addTwoNumbers(1, 11)

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


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