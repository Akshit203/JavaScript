

let a = 100

if (true){

    let a = 10;
    var b = 20
    const c = 30

    console.log("Inner ",a) //10

}
console.log("Outer",a) // 100
console.log(b) // 20 , 'var' has global scope within this context.
// console.log(c) // Error: 'c' is not defined, 'const' has block scope

/* let and const are block-scoped, meaning they are only accessible within the block they are defined in.

   var is function-scoped (or global-scoped if not in a function),
   so it's accessible outside the block it is defined in.
   
   Attempting to access a block-scoped variable (like c) outside its block results in a ReferenceError. */

   // Nested Functions 

function one(){

    const username ="Ak";

    function two(){
        const website = "Google";
        console.log(username);
    }

    two()
}

one()

// Nested Function Scope

if(true){
    const username = "Ak";

    if(username === "Ak"){
        const website = "Youtube"
        console.log(username + website);
    }

    // console.log(website) // not in scope
}

// console.log(username); // not in scope