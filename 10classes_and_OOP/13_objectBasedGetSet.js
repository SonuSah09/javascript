const User = {
    _email: "john@abc.com",
    _password: "john@123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email  = email
    }
}

const userAlpha = Object.create(User) // here we used factoy function to give refrence to the new Object from the existing User object.
console.log(userAlpha.email);
