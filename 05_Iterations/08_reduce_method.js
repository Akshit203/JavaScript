
/* 
In JavaScript, when using the reduce method, providing an initial value (initialValue) is not mandatory,
but it can be very useful depending on what you want to achieve and how you want to handle edge cases, 
especially when dealing with empty arrays.

*/

// reduce Method Without Initial Value


const x = [0,1,2,3,4,]


let output = x.reduce((result, curr_val) => result + curr_val, 0)
console.log(output)

/* let y = x.reduce((result, curr_val) => {
    
    console.log(`res = ${result} and curr ${curr_val}`)
    return result + curr_val

}, 0)

console.log(y) */


/* When Should You Provide an Initial Value ?

Handling Empty Arrays: 

If there's a possibility that your array might be empty and you want a default value returned in that case,
providing an initial value becomes necessary. For example :*/

const emptyArray = [];

// Without initial value

// let result1 = emptyArray.reduce((res, curr) => res + curr); 
// Error: Cannot reduce an empty array without an initial value

// With initial value
let result2 = emptyArray.reduce((res, curr) => res + curr, 0); // Providing 0 as initial value

// console.log(result1); // Error: Cannot reduce an empty array without an initial value
console.log(result2); // Output: 0


const shopping_cart = [
    {
        item : "JavaScript",
        price : 2499
    },

    {
        item : "Python",
        price : 999  
    },

    {
        item : "Android",
        price : 5499
    },

    {   
        item : "Data Science",
        price : 10999
    }
]

const total = shopping_cart.reduce ((res, item) => res + item.price , 0)
console.log(total)