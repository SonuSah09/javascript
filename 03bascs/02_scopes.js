//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


/*            ++++++++++++++++++  Short Summary  ++++++++++++++++++  


//Story of scopes begin with three keywords => let var const
var a = 1;
let b = 2;
const c = 3;
console.log(a);
console.log(b);
console.log(c);

// Curly braces {} => Scope

//Problems
if(true){
    let d = 10;
    const e = 20;
    var f = 30; //It can be redelcared plus re-initialized
}
console.log(d); //This will throw error as we are trying to access d outside block of if conditional
console.log(e); //This will also throw error are we are trying to access e outside block of if conditional
console.log(f); //This will print 30 => And that is a problem, it shouldn't be accessed the block

//Note! => code written in global scope can be accessed in the block scope but the vice-versa is not true

//Note! => Global Scope in console and node js environment (production code) is different
*/

/* 
 

---

## 📌 Key Notes on Scopes in JavaScript

### 1. What is Scope?
- **Scope** defines where variables and functions are accessible in your code.
- It prevents naming conflicts and controls variable visibility.

---

### 2. Global Scope
- Variables declared outside any function/block are in the **global scope**.
- Accessible from anywhere in the program.
- Example:
  ```js
  let name = "Sonu"; // global

  function greet() {
    console.log(name); // accessible
  }
  greet();
  ```
- ⚠️ Risk: Global variables can be accidentally overwritten.

---

### 3. Local Scope
- Variables declared inside a function/block are **local** to that function/block.
- They cannot be accessed outside.
- Example:
  ```js
  function test() {
    let message = "Hello"; // local
    console.log(message);
  }
  test();
  console.log(message); // ❌ Error
  ```

---

### 4. Block Scope (`let` and `const`)
- Variables declared with `let` or `const` inside `{}` are **block-scoped**.
- Example:
  ```js
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); // works
  }
  console.log(x, y); // ❌ Error
  ```

---

### 5. Function Scope (`var`)
- `var` is **function-scoped**, not block-scoped.
- Example:
  ```js
  if (true) {
    var z = 30;
  }
  console.log(z); // ✅ Accessible
  ```

---

### 6. Scope Chain
- JavaScript looks for variables in the **current scope first**, then moves outward (parent scopes).
- Example:
  ```js
  let a = "global";

  function outer() {
    let b = "outer";
    function inner() {
      let c = "inner";
      console.log(a, b, c); // finds all via scope chain
    }
    inner();
  }
  outer();
  ```

---

### 7. Best Practices
- Minimize global variables.
- Use `let` and `const` for predictable block scoping.
- Keep functions small to avoid scope confusion.

---

✅ **Takeaway:**  
Understanding **global, local, block, and function scopes** is crucial for writing clean, bug-free JavaScript. Scope ensures variables are used in the right place and prevents accidental overwriting.

---

Would you like me to also prepare a **visual diagram of the scope chain** so you can quickly recall how JavaScript searches for variables step by step?

*/ 

