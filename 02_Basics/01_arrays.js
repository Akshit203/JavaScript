// Arrays :

const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[0]); // 1
console.log(arr[1]); // 2

const newArray = new Array(1, 2, 3, 4);
console.log(newArray[1]);

/* ****************************************************************************************************** */
// Arrays Methods : 

newArray.push(5);
newArray.push(6);
console.log("Updated Array :", newArray); // [ 1, 2, 3, 4, 5, 6 ]

newArray.pop();
console.log("Updated Array :", newArray); // [ 1, 2, 3, 4, 5 ]

newArray.unshift(9);
console.log("Updated Array :", newArray); // [ 9, 1, 2, 3, 4, 5 ]

newArray.shift();
console.log(newArray); // [ 1, 2, 3, 4, 5 ]

console.log(newArray.includes(5)); // true
console.log(newArray.indexOf(5)); // 4

const x = newArray.join(); // converts an array into a string, with each element separated by a specified separator.
console.log(x); 1,2,3,4,5
console.log(typeof x); // string

/* ****************************************************************************************************** */

// slice vs splice :

// Using .slice() to get a portion of the array without modifying the original array

const arr1 = [10, 20, 30, 40, 50, 60, 70];
console.log(arr1.slice(0, 5)); // [10, 20, 30, 40, 50, 60, 70];
 
console.log(arr1); //  [10, 20, 30, 40, 50, 60, 70] array remains same


/* ****************************************************************************************************** */


// Using .splice() to remove elements from the array and modify the original array

console.log(arr1.splice(3,5)); 

/* -- array.splice(start, deleteCount, item1, item2, ...)
   -- start: The index at which to start changing the array.
   -- deleteCount: The number of elements to remove.
   -- item1, item2, ...: The elements to add to the array, beginning at the start index. */

console.log(arr1); 


/* ******************************************************************************************************* */
