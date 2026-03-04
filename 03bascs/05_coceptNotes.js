/*  

### 1. How JavaScript Executes Code
- JavaScript runs inside an **engine** (like V8 in Chrome).
- Code execution happens in two phases:
  - **Memory Creation Phase**: Variables and functions are allocated in memory.
  - **Execution Phase**: Code runs line by line, values are assigned, and functions are invoked.

### 2. Execution Context
- Every time code runs, an **execution context** is created.
- Types of execution contexts:
  - **Global Execution Context (GEC)**: Created when the script starts; contains global objects and `this`.
  - **Function Execution Context (FEC)**: Created whenever a function is invoked; has its own scope and variables.
- Each context has two parts:
  - **Memory Component** (variable environment).
  - **Code Component** (thread of execution).

### 3. Call Stack
- The **call stack** manages execution contexts.
- It works on a **LIFO (Last In, First Out)** principle.
- Steps:
  - GEC is pushed first.
  - Each function call pushes a new FEC onto the stack.
  - When a function finishes, its context is popped off.
  - Finally, when all code finishes, GEC is removed.

---

## 📝 Practical Notes
- Functions don’t overwrite each other’s memory; each has its own execution context.
- Nested function calls demonstrate how multiple contexts stack up.
- Understanding the call stack helps debug errors like **stack overflow** (too many nested calls).

---------------------++++++++++++++++++++++++++++++++++______________________________+++++++++++++++++++++++----------------------------

1.JS creates Global excution context 
2.Next it creates memory phase
3.Memory phase - In this phase,the variables are set to undefined 
  until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the execution phase
5.Execution phase - In this phase,the variables are initialsed to given values and 
  when the function s are called,it creates a memory phase and execution phase for the function 
  just like the main one.

---------------------++++++++++++++++++++++++++++++++++______________________________+++++++++++++++++++++++----------------------------



 🔵The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
📝The return value of the 'Function Execution' context is passed to the Global Execution Context 
*/