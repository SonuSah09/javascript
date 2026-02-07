// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // To access a symbol in object, first declare a Symbol outside the  object, then inside the object use this key
console.log(mySym); // Symbol(key1)


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
// console.log(JsUser["name"]); // Sonu => best way to access the keys n an object.
// console.log(JsUser.name); // Sonu => most commonly used this way to access the keys of an object but it can't be used to access Symbol dataType.
// console.log(typeof JsUser.name); // String
// console.log(JsUser.age); // 18
// console.log(typeof JsUser.age); // number
// console.log(typeof JsUser["age"]); // number => as it's checking the type of the value present in the key "age"
// console.log(JsUser["full name"]); // Sonu Kumar Sah => only way to access "full name" 
// // console.log(JsUser."full name"); => can't use this
// console.log(JsUser["email"]) // sonu@google.com

// console.log(JsUser[mySym]) // myKey1
// console.log(JsUser.mySym); // undefined => so can't access this way as it's a symbol dataType


// JsUser.email = "sonu@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "sonu@microsoft.com"
 console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


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