// for

/* example to understand the basic syntax:--
const array =  [11, 22, 33, 44, 55]
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
NOTE: if we don't declare array, then array.length will through refrence error as array not defined.    
*/

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element); // will print the values from 0 till 9.
       
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number"); // as soon as i==5, this if block will execute first and print "5 is best number" then 5 will be printed. 
    }
    //console.log(element);
    
}

// console.log(element); // this will give error as we are trying to access outside the scope.

//               ++++++++++++++++++++++++++  Loops inside ther loop  ++++++++++++++++++++++++++

for (let i = 1; i <= 4; i++) {
    // console.log(`Outer loop value of i: ${i}`);
   for (let j = 1; j <= 3; j++) {
   // console.log(`Inner loop value of j:  ${j} and inner loop value of I:  ${i}`);
   // console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // will print allthe elements of array one by one until index value is less than myArray.length i.e 3
     
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break // breaks the loop here as soon as 5 is detected and loop will end
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`); 
//         continue // skips when value is 5 and next iteration eill continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }

/* 
NOTES: 

## 🔹 Conditional Statements
- **If / Else If / Else**
  ```javascript
  if (condition) {
    // code
  } else if (anotherCondition) {
    // code
  } else {
    // code
  }
  ```

- **Switch**
  ```javascript
  switch(expression) {
    case value1:
      // code
      break;
    case value2:
      // code
      break;
    default:
      // code
  }
  ```

---

## 🔹 Loops
- **For Loop**
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- **While Loop**
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- **Do-While Loop**
  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

---

## 🔹 Loop Control
- **Break** → exits loop immediately
- **Continue** → skips current iteration
  ```javascript
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // skip 3
    if (i === 5) break;    // stop at 5
    console.log(i);
  }
  ```

---

## 🔹 Practical Uses
- **Form validation** → `if-else`
- **Menu navigation** → `switch`
- **Data filtering** → loops + `continue`
- **Early exit** → `break`


*/