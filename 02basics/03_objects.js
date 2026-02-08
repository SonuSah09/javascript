/*  What Are Objects?
- Objects are collections of key-value pairs.
- Keys are strings (or Symbols), and values can be any data type (string, number, array, function, etc.). */
/*  Creating Objects 
 Two ways to declare objects: 1. object literals and 2. objects as constructor - if we declare using constructor, it will be "Singleton"

 -Object Literal Syntax:**
  
  const person = {
    name: "Sonu",
    age: 25,
    isStudent: true
  };  */


 // Syntax - Object.create :- this is called declaring by constructor method and this will a singleton
 // Syntax - const newObj = {} :- this is object leteral method

const mySym = Symbol("key1") // To access a symbol in object, first declare a Symbol outside the  object, then inside the object use this key
// console.log(mySym); // Symbol(key1)


const JsUser = {
    name: "Sonu",
    "full name": "Sonu Kumar Sah",
    [mySym]: "mykey1",
    age: 18,
    location: "Patna",
    email: "sonu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 }
 /* - **Accessing Properties:**
  - Dot notation: `person.name`
  - Bracket notation: `person["age"]` */

// console.log(JsUser["name"]); // Sonu => best way to access the keys n an object.
// console.log(JsUser.name); // Sonu => most commonly used this way to access the keys of an object but it can't be used to access Symbol dataType.
// console.log(typeof JsUser.name); // String
// console.log(JsUser.age); // 18
// console.log(JsUser["age"]); // 18 => when accessing any cvalue like this, always give the key inside double quotes as it's treated as String

// console.log(typeof JsUser.age); // number
// console.log(typeof JsUser["age"]); // number => as it's checking the type of the value present in the key "age"
// console.log(JsUser["full name"]); // Sonu Kumar Sah => only way to access "full name" 
// console.log(JsUser."full name"); => can't use this
// console.log(JsUser["email"]) // sonu@google.com
// console.log(JsUser["age"], JsUser["location"], JsUser["isLoggedIn"]); // 18 Patna false


// console.log(JsUser[mySym]) // myKey1
 
// console.log(JsUser.mySym); // undefined => so can't access this way as it's a symbol dataType

//      +++++++++++++++++++++++++++++ Adding, Updating & Deleting Properties ++++++++++++++++++++++++++++

// - Add: `person.country = "India";`

// JsUser.country = "India"
// console.log(JsUser.country); // India => country got added in ther object

// - Update: `person.age = 26;`

JsUser.email = "sonu@chatgpt.com" // this will update the existing value for key email and with the new one
// console.log(JsUser.email); // sonu@chatgpt.com => email value got updated in the object

// ### 🔹 Deleting Properties
// - `delete person.isStudent;`

// delete JsUser.location
// console.log(JsUser.location); // undefined as location is now deleted from the object.


// Object.freeze(JsUser) // this will freeze the object which means no modificatios can be done in that object after applying oject.freeze
// JsUser.email = "sonu@microsoft.com" // it will not be applied due to freeze
// console.log(JsUser.email); // sonu@chatgpt.com => the old email because freeze did not allowed to modify the new email in the object

/*  Object Methods : Functions inside an Object is called as Object Methods. */ 

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this keyword is sed to efer the same object
}

console.log(JsUser.greeting()); // Hello JS user
//  undefined - because the fnction is not returning anything

console.log(JsUser.greetingTwo()); // Hello JS user, Sonu
// undefined -  because the fnction is not returning anything

// return JsUser.greetingTwo() // Hello JS user, Sonu => here undefined is not there because the function is returning .

/*                          ++++++++++++++++++  Summary  ++++++++++++++++++



### 🔹 What Are Objects?
- Objects are collections of key-value pairs.
- Keys are strings (or Symbols), and values can be any data type (string, number, array, function, etc.).

### 🔹 Creating Objects
- **Object Literal Syntax:**
  
  const person = {
    name: "Sonu",
    age: 25,
    isStudent: true
  };


- **Accessing Properties:**
  - Dot notation: `person.name`
  - Bracket notation: `person["age"]`

### 🔹 Adding & Updating Properties
- Add: `person.city = "Patna";`
- Update: `person.age = 26;`

### 🔹 Deleting Properties
- `delete person.isStudent;`

### 🔹 Nested Objects
- Objects can contain other objects:
  ```javascript
  const user = {
    name: "SoNu",
    address: {
      city: "Patna",
      pin: 800001
    }
  };
  console.log(user.address.city); // "Patna"
  ```

### 🔹 Looping Through Objects
- Use `for...in` loop:
  ```javascript
  for (let key in person) {
    console.log(key, person[key]);
  }
  ```

### 🔹 Object Methods
- Functions inside objects are called methods:
  ```javascript
  const user = {
    greet: function() {
      console.log("Hello!");
    }
  };
  user.greet();
  ```

### 🔹 `this` Keyword
- Refers to the object the method is called on.
  ```javascript
  const user = {
    name: "SoNu",
    greet: function() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
  ```

### 🔹 Object Destructuring
- Extract values from objects:
  ```javascript
  const { name, age } = person;
  ```

---


*/