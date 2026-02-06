const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const anotherArrNum = [ 1, 2, 9 ]

// marvel_heros.push(dc_heros) // will push entire "dc_heos" array into "marvel_heros" Array ==>> not recomended to use

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] => Here inner Array will be an elementy for outer Array

// console.log(marvel_heros[3][1]); // flash => type String-- to access elements of inner array, use index

//                                            +++++++++++  CONCAT Method +++++++++++

// concat- add the two arrays and stores it in the new array

// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//                                            +++++++++++  SPREAD Metyhod +++++++++++

// spread - This basially spreads the array and which works similarly to the concat which has syntax as "... arrayName1, ...arrayName2" - we can add multiple arrys at the same point

const all_new_heros = [...marvel_heros, ...dc_heros, ...anotherArrNum]

// console.log(all_new_heros);

//                                            +++++++++++  Flat Method +++++++++++

// flat - flat converts multiple inside array into one array
// syntax- arrayname.flat(n) => n: number of depth we want or usually we can give infinity

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // multiple inner arrays inside the array

// const real_another_array = another_array.flat(Infinity) 
// console.log(real_another_array); //  [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


//                        +++++++++++  FROM and OF Method +++++++++++

// from: Creates an array from an iterable object.
// of: Returns a new array from a set of elements.

console.log(Array.isArray("Sonu")) // false => checking if "Sonu" is an Array
console.log(Array.from(name = "Sonu")) // [ 'S', 'o', 'n', 'u' ]
console.log(Array.from("Sonu")) // [ 'S', 'o', 'n', 'u' ]

console.log(Array.from({name: "Sonu"})) // [] => will give empty. // interesting


console.log(Array.of("Sonu", "John", "Sumit")) // [ 'Sonu', 'John', 'Sumit' ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

/* 
/ Lets create 2 arrays
let arr1 = ["Hi", "How", "are", "you"];
let arr2 = ["I", "am", "Fine"];
let arr3 = ["Hi", "How", "are", "you"];
arr1.push(arr2);
console.log(arr1);
// This basically pushes the complete array which roves array takes any type of the DataType
console.log(arr1[4][0]);
// we can concat the array method which add the two arrays and stores it in the new array
let arr4 = arr3.concat(arr2);
console.log(arr4);

// Spread
let arr5 = [...arr3, ...arr2];
console.log(arr5);

// This basially spreads the array and which works similarly to the concat which has syntax as ...
// we can concat multiple arrys at the same point

let arr6 = [1, 2, 3, [4, 5], 6, [7, 8]];
// flat converts multiple inside array into one array
let arr7 = arr6.flat(Infinity);
console.log(arr7);
// here we have to give the number like how many internal arrays we want to flat but we can alos give the infinity

// to check whether a give is array or not
console.log(Array.isArray(arr7));
console.log(Array.isArray("arr7")); //this is not the array now I want ot convert this inot the array
console.log(Array.from("arr7")); //This converts the give string into the array


let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1, s2, s3));
// TO convert the array from the varibles
*/