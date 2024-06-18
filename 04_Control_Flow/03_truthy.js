
const userEmail = "ak2003@gmail.com"

// const userEmail = [] // Email Found
// const userEmail = "" // Email Not Found


if (userEmail){
    console.log("Email Found")
}

else{
    console.log("Email Not Found")
}

/* 

In JavaScript, some values are considered "truthy" (evaluate to true in a boolean context),
and some are "falsy" (evaluate to false).

Truthy Values :

"false", [], " ", {}, 'null', function (){} 

--- "false": A non-empty string is truthy.
--- []: An empty array is truthy.
--- " ": A string with a space is truthy.
--- {}: An empty object is truthy.
--- 'null': A non-empty string is truthy.
--- function() {}: A function is truthy.

Falsey Values :

false, 0 , -0, undefined, null, BigInt, 0n, NaN, "", 

*/


const x = []

if (x.length === 0){
    console.log(`Array is Empty`)
}

const y = {} // Empty object

if(Object.keys(y).length === 0){
    console.log(`Object is Empty`)
}


/* ************************************************************************************************* 

Nullish Coalescing Operator (??) : null undefined

The nullish coalescing operator ?? returns the right-hand side operand when the left-hand side 
operand is null or undefined. Otherwise, it returns the left-hand side operand. */

let value1 = 5

value1 = 5 ?? 10

console.log(value1)

/* ************************************************************************************************* */


// Ternary Operator : A concise way to write if...else statements for simple conditions.
// condition ? true : false


const xyz = 10
xyz > 5 ? console.log("True") : console.log("false")
