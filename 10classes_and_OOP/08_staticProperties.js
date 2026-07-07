class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
// static keyword restricsts the method to be used outside the class (parent or child)
    static createId(){
        return `123`
    }
}

const user1 = new User("Sonu")
// console.log(user1.createId()) // accessing from Parent class will through error because createId() is a static method

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); // accessing from child class will through error because createId() is a static method