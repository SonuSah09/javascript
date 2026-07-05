

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(4));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);



function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    console.log(`price is increased to ${this.score}`);
    
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

console.log(createUser.prototype); // will show the two prototypes which we created

const myCoffee = new createUser("coffee", 250)
const myTea = createUser("tea", 25)


myCoffee.printMe()
myCoffee.increment()
myTea.printMe() // throw error as it's undefined because we have not used "new" keyword due to whioch new object was not created.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
