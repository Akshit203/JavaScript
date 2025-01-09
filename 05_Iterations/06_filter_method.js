// const programming = ["js", "xml", "py", "java", "cpp"]

// const values = programming.forEach (function (item){
//     // console.log(item)
//     return item // undefined
// })

// console.log(values) 


/* ************************************************************************************************************
 
The filter method in JavaScript creates a new array with all elements that pass the test implemented
by the provided function. It's a powerful method for extracting elements from an array that meet certain criteria. */

/* 
-- Returns a new array: filter() does not modify the original array; it returns a new array.
-- Only works with arrays: filter() is designed to work with arrays in JavaScript. 
-- It cannot be used directly on objects or other data types.
-- Callback function: The callback function is applied to each element of the array, and based on the return value (true or false), 
   the element is either included or excluded from the new array.
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const NewNums = nums.filter( (n)=> n > 4 )
console.log(NewNums) // [ 5, 6, 7, 8, 9, 10 ]


/* *********************************************************************************************************** 

-- In this example, the curly braces {} are used, which means the function body does not implicitly
   return a value. When using curly braces, you need to explicitly use the return statement.

-- Without the return statement, the function returns undefined by default, which is interpreted
   as false by the filter method, resulting in an empty array. */

// const NewNums2 = nums.filter( (n)=> {n > 4} )
// console.log(NewNums2) // []

const NewNums2 = nums.filter( (n)=> {return n > 4} )
console.log(NewNums2) // [ 5, 6, 7, 8, 9, 10 ]

// In most cases, curly braces are used when the function body has more than one statement, 
// but for simple expressions, we can omit the curly braces for cleaner and more concise code.


/* *********************************************************************************************************** */


// Using forEach to Filter an Array

const x = []

nums.forEach( (num) => {
    if (num > 4) {
        x.push(num)
    }
} )

console.log(x); // [ 5, 6, 7, 8, 9, 10 ]


/* *********************************************************************************************************** */


/*
   The filter() method works with arrays of any type of elements, whether it's an array of integers, strings, objects,
   or any other data type. 
   
   It is specifically designed for arrays, but it can handle various data types within those arrays. */

// Filter method with Array of objects : 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1994, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// Filtering Books by Genre "History"

const userBooks = books.filter( (bk) => bk.genre === "History")
console.log(userBooks)

/* 
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
]
*/


// Filtering Books by Publish Year and Genre

const userBooks2 = books.filter( (bk) => {
    return bk.publish > 1995 && bk.genre === 'History'
} )

console.log(userBooks2)

/*
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
]
*/

/* *********************************************************************************************************** */

