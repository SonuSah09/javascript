const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

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