// Variables 

/*

- Name of storage location
- JavaScript variables are case sensitive, x and X are different variables.

- Types of variables in JavaScript : local variable and global variable.
- In JavaScript, we can declare a variable using the var, let, or const keywords
- Values are assigned to variables using the assignment operator (=).
- Variables can hold different types of data such as numbers, strings, arrays, objects, and functions.
 


var :

- var declarations are globally scoped or locally/function scoped.
- scope is global when a var variable is declared outside a function.
- locally/function scoped when it is declared within a function. */

var A = "Chandigarh"; // A is globally scoped because it exists outside a function 
    
    function display() {
        var X = "Hello"; // X is function scoped.
    }


/*
- we cannot access the variable X outside of a function. */

var A = "Chandigarh";
    
    function display() {
        var X = "Hello";
    }
    console.log(X); // Error: X is not defined


/*
- var variables can be updated and re-declared within its scope.
- var variables are hoisted to the top of their scope and initialized with a value of undefined.
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

- Example :

   console.log (A);
   var A = "Hello"

   it is interpreted as this:

   var A;
    console.log(A); // A is undefined
    A = "Hello"

- 

let :

- let comes as an improvement to var declarations.
- let introduces block-scoping.
- Anything within curly braces is a block
- let can be updated but not re-declared. */

let XYZ = "Hello";
let XYZ = "Hello World"; // Error: Identifier 'XYZ' has already been declared


/*
- if the same variable is defined in different scopes, there will be no error.
This is because both instances are treated as different variables since they have different scopes */

let XYZ = "Hello";
if (true) {
    let XYZ = "Hello World";
    console.log(XYZ); // "Hello World"
}
console.log(XYZ); // "Hello"


/*

- Variables declared with let are hoisted to the top of their block,
  but they are not initialized until the actual declaration is encountered during runtime.
- if we try to use a let variable before declaration, we will get a Reference Error.


const :

- Variables declared with the const maintain constant values.
- const declarations are block scoped
- Hoisted to the top but are not initialized.
- const cannot be updated or re-declared */

const A = "Chandigarh";
   A = "Panchkula"; // Error: Assignment to constant variable. 

const XYZ = "A";
const XYZ = "AK"; // Error: Identifier 'XYZ' has already been declared. 

/*
- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within its scope; 
  let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, 
  let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration. */

