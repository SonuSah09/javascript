// Creating Objects in JavaScript  :  ------------Object Literal---------------------
/*
const user = {
    username: "Sonu",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`); // this keyword is used so that current context can be identified. otherwise it will give refrence error because usernmae is not definded in tyhe context of getUserDetails() function.
        //console.log(this);
    }
};

//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(user.loginCount);

*/

//                   ----------------------------------Constructor Function---------------------------------------------      //

// Constructor function gives a new copy of the object so overriding can be prevented into original object. "new" keyword is used for it.

function User(username, loginCount, isLoggedIn){
    this.username = username; // here this keyword will assign the value passed as parameter into variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this // it's implicitely returned
}

const userOne = new User("Sonu", 9, true)
const userTwo = new User("Devid", 10, false)
console.log(userOne.constructor);
// console.log(userTwo);

// Step 1- as soon as we use "new" keyword, an empty object is created which is called as instance.
// Step 2- constructor function is called due to the "new" keyword .
// Step 3- this keyword inects arguments (it packs all the arguents and passes it on)
// Step 4- We get all this args inside function

/*
//                             --------------------Encapsulation-----------------------                        //

Encapsulation means bundling data and methods together and controlling access to the data.
Benefits:
Protects data from unauthorized access.
Makes code easier to maintain.

class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);

console.log(account.getBalance()); // 1000
console.log(account.#balance); // Error due to # balance is private and can't be accessed outside


//                      --------------------Inheritance-----------------------                     //

Inheritance allows one class to acquire properties and methods from another class.
Benefits:
Code reusability.
Easier maintenance.

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const myDog = new Dog();

myDog.speak(); //Animal makes a sound --  Inherited method from class animal
myDog.bark(); // Dog barks -- own method of class Dog


//                      --------------------Polymorphism-----------------------                       //

Polymorphism means the same method can behave differently in different classes.

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const myPets = [new Dog(), new Cat()];

myPets.forEach(pet => pet.speak());


//                        --------------------Abstraction-----------------------                //

Abstraction hides implementation details and exposes only essential functionality.

class Car {
  start() {
    this.#igniteEngine();
    console.log("Car started");
  }

  #igniteEngine() {
    console.log("Engine ignition process");
  }
}

const car = new Car();
car.start();

*/

