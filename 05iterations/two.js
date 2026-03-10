
/* ++++++++++++++++++++++++++++++++++++++++++ While loop ++++++++++++++++++++++++++++++++++++++++++

## Syntax: 

while (condition) {
    
}
*/

let index = 0
while (index < 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
      
}

let myArray = ['Batman', 'Superman', 'Flash', 'Aquaman', 'Wonder woman']
arrayIndex = 0
while (arrayIndex < myArray.length) {
   // console.log(`The Superhero character is ${myArray[arrayIndex]}`);
    arrayIndex = arrayIndex + 1
}

/* ++++++++++++++++++++++++++++++++++++++++++ Do While loop ++++++++++++++++++++++++++++++++++++++++++

## Syntax: 

do {
    
} while (condition);

*/
let score = 1
do {
    // console.log(`Score is ${score}`);
    score++
    
} while (score <= 10); // will print from 1 to 10

let marks = 11
do {
    console.log(`The marks obtained is ${marks}`);
    marks++
    
} while (marks <= 10); // it will pront 11, reason is firs execute do then under while it will check the condition.


/*  NOTES:

The 'for' and 'while' loops are what we call 'entry control loops' because they check the condition before entering the loop. 
On the other hand, 'do-while' loops are known as 'exit control loops' since they ensure that the loop body is executed at least once 
before checking the condition.


*/