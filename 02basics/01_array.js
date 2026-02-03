// Arrays:-
         // The Array object, enables storing a collection of multiple items under a single variable name
         // Arrays will be written in square brackets [] and the values present inside the array are "Elements" 
         // The elements of a Array can be of different data types like number, strings or boolean.
         // In Javascript, Array's are resizable
         // Array elements cannot be accessed using arbitrary strings but must be accessed using their indexes which starts with 0.

const myArr = [10, 20, 30, 40, 50, 60]
const myTodoList = ["Walk", "Study", "Shopping"]

const myArr2 = new Array(10, 11, 13, 14) 

// console.log(myArr); // [ 10, 20, 30, 40, 50, 60 ] => will print complete Array
// console.log(myArr[3]); // 40 => Will print value present at index 3 of the Array
// console.log(myTodoList); // [ 'Walk', 'Study', 'Shopping' ]



//    ++++++++  Array methods  ++++++++++

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);