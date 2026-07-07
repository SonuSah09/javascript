class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase() // to avoid stack overflow, we should not declare the same variable/parameter in gtter and setter. that's why _email is used in stead of email
    }

    set email(value){
        this._email = value // to avoid stack overflow, we should not declare the same variable/parameter in gtter and setter. that's why _email is used in stead of email
    }
// In case of stack overflow, we will get this error=> RangeError: Maximum call stack size exceeded
    get password(){
        return `${this._password}sonu@123`
    }
    
    set password(value){
        this._password = value
    }
}
const newUser = new User("sonu@gmail.com", "123")
console.log(newUser.password);
console.log(newUser.email);

