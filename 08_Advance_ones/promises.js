/* JavaScript Promises :

A new Promise is created with the Promise constructor, which takes a function with two parameters: resolve and reject.

The .then() method is used to handle the successful resolution of the Promise
The .catch() method is used to handle the rejection of the Promise. */

/* ********************************************************************************************************** */

// Basic Promise

const promiseOne = new Promise (function(resolve, reject){

    setTimeout(function(){
        console.log("Async task complete")
        resolve()
    }, 1000)

})

promiseOne.then(function(){
    console.log("promise complete")
})


/* ********************************************************************************************************** */

// Inline Promise

new Promise (function(resolve, reject){

    setTimeout(function(){
        console.log("Aysnc task 2")
        resolve()

    }, 1000)

}).then(function(){
    console.log("task 2 resolved")
})


/* ********************************************************************************************************** */

// Promise with Data

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({username :" A1" , password : "a1234"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

/* ********************************************************************************************************** */

// Conditional Promise with Chaining

const promiseFour = new Promise (function (resolve, reject){

    setTimeout(function(){
        let error = false;

        if (!error){
            return resolve({username :" xyz" , password : "234"})
        }
        else{
            return reject("ERROR, Something went wrong")
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username) 
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

/* ********************************************************************************************************** */

// Async/Await with Error Handling

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "12345"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function newPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response); // {username: "Javascript", password: "12345"}
    } catch (error) {
        console.log(error); // 'ERROR: JS went wrong'
    }
}

newPromiseFive()

/* ********************************************************************************************************** */

//  Fetch API with Async/Await

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

/* ********************************************************************************************************** */

// Fetch API with Promises

fetch('https://api.github.com/uses/Akshit203')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))