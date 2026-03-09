const userEmail = "sonu@gmail.com"

if (userEmail) {
    console.log("Got user email: " + userEmail); // this will be executed because if condition is true
} else {
    console.log("Don't have user email");
}
const userEmail1 = ""

if (userEmail1) {
    console.log("Got user email"); 
} else {
    console.log("Don't have user email"); // this will be executed because if condition is false hense else executed. reason being is empty string treated as falsy
}
const userEmail2 = []

if (userEmail2) {
    console.log(`Got empty user email Array:  ${userEmail2}`); // this will be executed because if condition is true. reason being is empty Array treated as truthy
} else {
    console.log("Don't have user email");
}

//             ++++++++++++++++++++++++++++++++   NOTES +++++++++++++++++++++++++++++++++++++

// falsy values- below are All the values treated as falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values-  below are some surprising truthy values: 

// "0", 'false', " ", [], {}, function(){}

 if (userEmail2.length === 0) {
     console.log("Array is empty");
 }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1); // 5 ==>> usually picks the first value.

let val2;
val2 = null ?? 10
console.log(val2); // 10 ==>> checks if any value is null or undefined, then will pick the other value.

let val3;
val3 = undefined ?? 15
console.log(val3); // 15 ==>>  checks if any value is null or undefined, then will pick the other value.


let val4;
val4 = null ?? 20 ?? 15
console.log(val4); // 20


let val5;
val5 = null ?? undefined 
console.log(val5); // undefined ==>> first checks the first value if null/undefined then got to  next value and execute it. in this case first was null so second was executes anyway

let val6;
val6 = undefined ?? null 
console.log(val6); // null // first checks the first value if null/undefined then got to  next value and execute it. in this case first was null so second was executes anyway

let val7;
val7 = null ?? undefined ?? 18 ?? 13 
console.log(val7); // 18


// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// Important: Terniary Operator

// condition ? true : false ==>> if condition is true will execute first, otherwise second: 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") // more than 80 

let isLoggedInUser = true
isLoggedInUser ? console.log("user is logged in") : console.log("user is a guest") // user is logged in



/* 

       +++++++++++++++++++++++++++++++++++++++++++++++++++++++ SUMMARY +++++++++++++++++++++++++++++++++++++++++++++++++++++++



Key Notes- Control Flow in JavaScript

### 1. Conditional Statements
- **`if` statement**: Executes code only if a condition is true.
 
  if (age > 18) {
    console.log("You are an adult");
  }
 
- **`if...else`**: Provides an alternative block if the condition is false.
- **`else if` ladder**: Used for multiple conditions.
- **Nested `if`**: Placing one `if` inside another for complex logic.

### 2. Switch Statement
- Useful when checking a variable against multiple possible values.
 
  switch (day) {
    case "Monday":
      console.log("Start of the week");
      break;
    case "Friday":
      console.log("Weekend is near!");
      break;
    default:
      console.log("Regular day");
  }
 
- **`break`** prevents fall-through to other cases.
- **`default`** handles unmatched cases.

### 3. Loops
- **`for` loop**: Best for known iteration counts.
 
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
 
- **`while` loop**: Runs until condition becomes false.
- **`do...while` loop**: Executes at least once, even if condition is false.
- **Infinite loops**: Must be avoided by ensuring conditions eventually fail.

### 4. Loop Control Keywords
- **`break`**: Exits the loop immediately.
- **`continue`**: Skips the current iteration and moves to the next.

### 5. Practical Use Cases
- Decision-making in apps (e.g., login validation).
- Iterating over arrays or objects.
- Handling user input dynamically.
- Building menus or navigation logic.

---

## 📌 Summary Table

| Concept            | Purpose                          | Example Keyword |
|--------------------|----------------------------------|-----------------|
| `if` / `else`      | Decision-making                  | `if (x > 10)`   |
| `switch`           | Multiple condition checks        | `switch(value)` |
| `for` loop         | Fixed number of iterations       | `for (i=0; i<n)`|
| `while` loop       | Repeat until condition fails     | `while(x < 5)`  |
| `do...while` loop  | Run at least once                | `do { } while()`|
| `break`            | Exit loop early                  | `break;`        |
| `continue`         | Skip iteration                   | `continue;`     |

---

## 🚀 Takeaway
- **Control flow is the backbone of programming logic.**  
- Mastering these constructs allows you to build dynamic, interactive applications.  
- The video emphasizes writing clean, readable code with proper use of conditions and loops.

*/