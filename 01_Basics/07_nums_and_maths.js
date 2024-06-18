// NUMBERS 

const score = 5000;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

// The toPrecision() method is useful for formatting numbers to a specific number of significant digits. 
const num = 5548.99827;
console.log(num.toPrecision(3))

const hundreds = 1000000;
console.log(hundreds.toLocaleString()) // 10,00,000


/* *************************************************************************************************** */

// MATHS 

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // Absolute value.


console.log(Math.round(4.6)); // 5, // Rounds to the nearest integer.

console.log(Math.floor(2.6)); // 2 // Rounds down to the nearest integer.

console.log(Math.ceil(7.9)); // 8 // Rounds up to the nearest integer.

console.log(Math.min(4,5,9,2,6)); // 2  //  Finds the minimum value.
console.log(Math.max(4,5,9,2,6)); // 9  //  Finds the Maximum value.

console.log(Math.random()); // 0 - 1 // Generates a random number between 0 and 1.
console.log(Math.floor(Math.random() * 10) + 1); 

const min = 10;
const max = 20;



console.log(Math.ceil(Math.random() * (max - min + 1)) + min);




