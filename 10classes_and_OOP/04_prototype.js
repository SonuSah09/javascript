/*

let myName = "Sonu     "
let mychannel = "thisIsMyShow     "

console.log(myName.length);
console.log(myName.trueLength); // currently undefined

*/

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Note: we can create a method directly in the Global Object so that every object will have access to that method. example is shown below: 
Object.prototype.sonu = function(){
    console.log(`Sonu is present in all objects`);
}

// Note: Now if we create a method only for particular object like Array, then onl Array objects will have the access top the new method not the other objectas like below:
Array.prototype.heySonu = function(){
    console.log(`Sonu says hello`);
}

heroPower.sonu() // will have access to method sonu
myHeros.sonu() // will have access to method sonu
myHeros.heySonu() // will have access to method heySonu
heroPower.heySonu() // will not have access to method heySonu

// inheritance

/*
const User = {
    name: "david",
    email: "david@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "John     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"John".trueLength()
"iceTea".trueLength()

*/