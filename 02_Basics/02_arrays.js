// Arrays :

const arr = [1, 2, 3, "hello", 4, 5, "chandigarh"]; // hetrogenous elements
console.log("Array Elements" ,arr);

const hero = ["superman", "ironman", "thor"];
const cars = ["Mercedes", "Jaquar", "Audi"];

/* ********************************************************************************************************

Using .push() to add the entire cars array as a single element at the end of hero array
hero.push(cars) 

console.log(hero); 
Output: ['superman', 'ironman', 'thor', ['Mercedes', 'Jaguar', 'Audi']] 


***********************************************************************************************************

-- Using .concat() to merge hero and cars arrays (creates a new array)

hero.concat(cars);
console.log(hero); 
Output: ['superman', 'ironman', 'thor']

-- .concat() does not modify the original array, it returns a new array 


********************************************************************************************************** */


let concatArray = hero.concat(cars);
console.log(concatArray); // [ 'superman', 'ironman', 'thor', 'Mercedes', 'Jaquar', 'Audi' ]


/* *******************************************************************************************************

   Using spread operator to merge hero and cars arrays

const x = [...hero, ...cars];
console.log(x); // [ 'superman', 'ironman', 'thor', 'Mercedes', 'Jaquar', 'Audi' ]


   ****************************************************************************************************** */


// Using .flat() to flatten a deeply nested array

const newArray = [1, 2, 3, [1, 2], 4, [1, 2, 3, [4, 5]]]; // deeply nested array
console.log(newArray.flat(Infinity)); // [ 1, 2, 3, 1, 2, 4, 1, 2, 3, 4, 5 ];


// ****************************************************************************************************** */

console.log(Array.isArray("Chandigarh")); // false
console.log(Array.from("chandigarh")); // ['c', 'h', 'a', 'n', 'd', 'i', 'g', 'a', 'r', 'h']

console.log(Array.isArray(["Chandigarh", 1, 2, 3, 4])); // true 

