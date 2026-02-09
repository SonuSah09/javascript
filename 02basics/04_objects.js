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



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

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
*/