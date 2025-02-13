const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// The map() method is a higher-order function in JavaScript that is used for transforming arrays. 

// const newNums = myNumers.map( (num) => { return num + 10})

// map() can be chained with other methods like filter() and reduce() to process data more efficiently

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// The map() method is a higher-order function in JavaScript that is used for transforming arrays. 
// While a for loop can achieve the same results, map() is preferred due to the following reasons:

/* 
-- Shorter & Cleaner Code : map() is less code and easier to read compared to a for loop.
-- It does not modify the original array, instead, it returns a new array, maintaining immutability. */

// Example using map()

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// For loop version (longer & manual work needed) :

let numbers = [1, 2, 3, 4];
let doubled = [];

for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}
console.log(doubled);

// map() does not modify the original array; instead, it returns a new one.
// In a for loop, we have to manually create and update a new array




