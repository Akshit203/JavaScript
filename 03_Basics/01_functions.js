// FUNCTIONS 
/* Block of code that performs a specific task, can be invoked (call) whenever needed */

/* *********************************************************************************************************** */

// Function Definition 
function addition(){
    //......
}

// Function Call / Invoke
addition();

// Function Parameters are local variables of function, block scope, num1 num2 are local variables

function sum(num1, num2){  //'num1' and 'num2' are parameters (placeholders for the values that will be passed), 
    return num1 + num2;
}

let x = sum(10, 15); // 10, 15 are arguemnts (the actual values passed to the function)
console.log(x);

/* *********************************************************************************************************** 

function add (num1, num2){ 
    console.log(num1 + num2);
}

const res = add(15, 2);
console.log(res) // undefined

*/
function add (num1, num2){ 
    return (num1 + num2);
    console.log("ak") // unreachable code
}

const res = add(15, 2);
console.log(res)  // 17

function loginUserMessage(username){

    // if(username === undefined)
    if (!username){
        console.log("Please Enter Username")
        return
    }
    return `${username} just logged in`;
}

// loginUserMessage("Ak")

console.log(loginUserMessage("Ak"))
console.log(loginUserMessage()) // Please Enter Username undefined

/* Rest Operator

The rest operator is used to collect multiple elements into a single array or object. 
It's primarily used in function parameters to handle an indefinite number of arguments,
and in destructuring assignments to collect the remaining elements. 


function calculatePrice (num1){
    return num1
}
console.log(calculatePrice(100)) // 100

console.log(calculatePrice(100, 200, 300, 400)) 
// the function only considers the first argument (num1) and ignores the rest. */



/* The rest operator (...) allows a function to accept an indefinite number of arguments
 as an array. This is useful for functions that need to handle a variable number of parameters */

function calculatePrice (...num1){
    return num1
}
console.log(calculatePrice(100, 200, 300, 400, 500)) // [ 100, 200, 300, 400, 500 ]

function calculatePrice2 (val1, val2, ...num1){
    return num1
}
console.log(calculatePrice2(100, 200, 300, 400, 500)) // [ 300, 400, 500 ]
/* 

-- Single Parameter: The function takes one parameter and ignores any additional arguments.  
-- Rest Operator (...): The function collects all arguments into an array and can handle any number of arguments. 

*/

// Functions with Objects :

const user = {
    username : "Ak",
    password : 1234
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`)
}

handleObject(user)  // Username is Ak and password is 1234

handleObject({username: "xyz", password : 4567})

// Functions with Arrays :

const arr = [10, 20, 30, 40];

function newArray (getArray){
    console.log(getArray[1])
}

newArray(arr) // 20

newArray([10, 20, 30, 40]) // 20