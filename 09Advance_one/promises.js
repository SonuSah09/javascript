/*


// creation phase-- 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // important to connect promise to then in order to consume the promise
    }, 2000)
})
// consumption phase--
promiseOne.then(function(){
    console.log("Promise consumed");
})


// another way to create Promise (without holding into a variable)
// let's say this is promiseTwo

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "SONU", Email: "Sonu@123.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
    console.log(user.username);
    console.log(`Email id for the user is ${user.Email}`);
})

*/

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({Username: "David", Password: "David@123"})
        } else {
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user.Username);
    return user.Password // it won't give rhe output so we have to use nested .then as shown below: 
})
.then((password)=>{
console.log(password);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})

/*


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.




*/