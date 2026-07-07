class User {
    constructor (username){
        this.username=username
    }
    logUsername(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor (username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse (){
        console.log(`${this.username} added a new course`);
    }
}

const myUser = new Teacher("Sonu", "Sonu@gmail.com", "123")
myUser.addCourse()
myUser.logUsername() // here myUser will have access to logUsername() method because it's an instance of Teacher and Teacher has inherited  properties from User. 

const myUser2 = new User("David")
myUser2.logUsername()
// myUser2.addCourse() // Here it will through error as addCourse() method is not accessible from User and myUser2 is an instance of User and don't have properties present in teacher.

console.log(myUser instanceof Teacher); // true
console.log(myUser instanceof User); // true
console.log(myUser2 instanceof Teacher); // false ==>> since it's created User so it will not be an iinstance of a child class Teacher
console.log(myUser2 instanceof User);  // true

