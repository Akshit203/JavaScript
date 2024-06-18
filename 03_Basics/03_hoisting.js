// Hoisting

/*

Hoisting is the process of placing variable and function declarations into memory
during compilation phase 

The statement "all the variables and function declarations are moved physically to the top of your code"  
is not accurate

The more precise description is that during the compilation phase, JavaScript places variable and
function declarations into memory, which allows them to be accessible in their scope before their
actual appearance in the code. 

*/

/* ************************************************************************************************ */

// var Hoisting

// The declaration var a is hoisted and initialized to undefined.

console.log(a); // undefined
var a = 10;

/* ************************************************************************************************ */

// let and const Hoisting

// console.log(y); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// console.log(z); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30


/* 
Variables declared with let and const are also hoisted to the top of their block scope,
but they are not initialized. They remain in a "temporal dead zone" (TDZ) from the start of the block
until the declaration is encountered. Accessing them before their declaration results in a ReferenceError.

The declaration let b and const c are hoisted, but they are not initialized.
Attempting to access b or c before their initialization throws a ReferenceError.

*/

// Why var Works but let and const Do Not

/* The variable declaration var x is hoisted and initialized to undefined.
Therefore, console.log(x); prints undefined instead of throwing an error.

With let or const:
The variable is in the TDZ until its declaration is encountered,
and accessing it before the declaration results in a ReferenceError.

To avoid errors with let or const, you should declare and initialize the variable before accessing it */