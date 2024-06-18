const user = {
    courseName : "JavaScript",
    price: 999,

    wlcomeMessage : function(){
        console.log(`${this.courseName}, welcome to website`)
        console.log(this)
    }
}

user.wlcomeMessage() 
/* JavaScript, welcome to website
{
  courseName: 'JavaScript',
  price: 999,
  wlcomeMessage: [Function: wlcomeMessage]
}
*/

user.courseName = "NextJs"
user.wlcomeMessage()
/* NextJs, welcome to website
{
  courseName: 'NextJs',
  price: 999,
  wlcomeMessage: [Function: wlcomeMessage]
}
*/


console.log(this) // {}

/* Global Context:

-- When you log this in the global context (outside any function), its value depends on the environment.
-- In a browser environment, this refers to the global window object. 
-- In Node.js, it refers to the global object.
-- However, in a module (like when using ES6 modules or Node.js),
   this will be undefined in strict mode or an empty object ({}) in non-strict mode 


function xyz(){
    console.log(this)
}
xyz() */


/* Arrow Functions :

-- Arrow functions do not have their own this context; they inherit this from the parent scope.
-- This is different from traditional functions, which have their own this binding.
-- Arrow functions provide a shorter syntax compared to traditional function expressions.
-- They are particularly useful for writing small functions.*/


// When using an arrow function with curly braces {}, you need to use the return keyword to return a value.
let add = (n1, n2) =>{
    return n1 + n2
}

console.log(add(10,40)); // 50

/* Implicit return :

When the function body consists of a single expression, you can omit the curly braces and the return keyword.
This is known as an implicit return */

let add2 = (n1, n2) => n1 + n2
console.log(add2(5,2))
