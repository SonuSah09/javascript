// let myName = "Sonu     "
// let mychannel = "thisIsMyShow     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sonu = function(){
    console.log(`Sonu is present in all objects`);
}

Array.prototype.heySonu = function(){
    console.log(`Sonu says hello`);
}

// heroPower.sonu()
// myHeros.sonu()
// myHeros.heySonu()
// heroPower.heySonu()

// inheritance

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