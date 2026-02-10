const tinderUser = new Object() // creates an empty object
const tinderUser1 = {} //  creates an empty object

// console.log(tinderUser);  // {} => empty object
// console.log(tinderUser1); // {} => empty object

// -adding other properties in tinderUser object: 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// tinderUser1.country = "India"
// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// -using nested object - i.e object inside an object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "David",
            lastname: "Josh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // David

// Merging two or more objects into a singk object: 
// 1.- newObj={obj1,obj2}  
// 2. Object.assign(target,source)
// 3. Spread operator

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 } // 
// console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } => same like array, the new obj conatains the 2 old objects inside it. So not recommended to use
// console.log(obj4.obj1[2]); // b

//      ++++++++++++   Object.assign(target,source)   ++++++++++++

const obj5 = Object.assign({}, obj1, obj2, obj3) // note- here {} this is target object to ensure the merging is done in a new object and obj1,obj2 and so on are source objectes
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj5[5]); // a

//      ++++++++++++   Spread operaor   ++++++++++++

const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// To return keys from object => Object.keys(object name); => will return  in form of Array
// To return values from object => Object.values(object name); => will return in form of Array
// To return all entries from object => Object.entries(object name) => will return in form of Array. will contain multiple Array inside the Array
// To check property of object => Object.hasOwnProperty(key/value name);

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); //  [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('country')); // false


/*
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

*/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); // hitesh

//                      Destructuring: Syntax - const {keyName} = objectName

const {courseInstructor} = course
// console.log(courseInstructor); // hitesh => suggested to use this as it makes code more clean

// Aother way is to define the shorter key name. - Syntax: const {keyName: someOthername} = objectName -- for example: 

const {courseInstructor: instructor} = course

console.log(instructor); // hitesh

// +++++++++++++ APIs and Json +++++++++++++++
//-  Json are same like objects and arrays but unlike array and object, json don't have a name

// -- Json in Object format  : 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

/* -- Json in Array format which might contain multiple objects : 

[
    {},
    {},
    {}
]
*/


/* 
SUMMARY : 

1.To declare singleton object => new Object( );
2. To merge object use spread operartor. {...Obj1, ...Obj2 } or 
Object.assign( { }, obj1,obj2 ):
3. To return keys from object => Object.keys(object name);
4.To return values from object => Object.values(object name);
5.To check property of object => Object.hasOwnProperty(key/value name);

Destructuring
1. To extract value from object => const {keyname} = object name;
2. To rename keyname for using more times => const {keyname: new name } = object name;
3. JSON is a collection of key-value pairs just like object and a JSON array is an ordered list of value.

- Object destructuring lets you extract properties from objects into variables in a single, concise statement.
- Array destructuring works similarly but is based on position.
- Renaming and default values are supported in destructuring assignments.
- JSON is the standard format for API data; it's a string representation of an object with strict syntax.
- APIs often return JSON; use fetch and .json() to retrieve and parse data.
- Destructuring is essential for handling API responses and is widely used in frameworks like React.
- Avoid common mistakes by providing defaults, staging destructuring, and being mindful of context.

*/