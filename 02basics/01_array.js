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
// console.log(myArr); //  [ 10, 20, 30, 40, 50, 60, 6 ] => will add element 6 in the last 

// myArr.push(7)
// console.log(myArr); // [ 10, 20, 30, 40, 50, 60, 6, 7 ] => will add element 7 in the last

// myArr.pop()
// console.log(myArr); // [ 10, 20, 30, 40, 50, 60, 6 ] => will remove the last element in the Array - here 7 is removed which was added by push(7)

// myArr.unshift(9)
// console.log(myArr); // [ 9, 10, 20, 30, 40, 50, 60, 6 ] => will add element in the start of the Array causing shifting of indexes of each element : Recommended not to use

// myArr.shift()
// console.log(myArr); // [ 10, 20, 30, 40, 50, 60, 6 ] =>  will remove the element in the start of the Array causing shifting of indexes of each element : Recommended not to use


// console.log(myArr.includes(55)); // false
// console.log(myArr.includes(30)); // true
// console.log(myArr.indexOf(30)); // 2 
// console.log(myArr.indexOf(4)); // -1 => if the element is not present in the Array and we try to find the index, it'll give -1 everytime.

// const newArr = myArr.join()

// console.log(myArr); // [ 10, 20, 30, 40, 50, 60 ] => original array
// console.log( newArr); // 10,20,30,40,50,60 => join method will bind and then convert into string
// console.log(typeof newArr); // string

// const newTodoList = myTodoList.join()
// console.log(myTodoList); // [ 'Walk', 'Study', 'Shopping' ] => type is object
// console.log(newTodoList); // Walk,Study,Shopping => type is string

// slice, splice

// console.log("A ", myArr);



// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

/* 
SUMMARY: 
1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = binds and then converts the array to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.


*/

