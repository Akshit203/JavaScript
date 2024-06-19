// const programming = ["js", "xml", "py", "java", "cpp"]

// const values = programming.forEach (function (item){
//     // console.log(item)
//     return item // undefined
// })

// console.log(values) 


/* ************************************************************************************************************
 
The filter method in JavaScript creates a new array with all elements that pass the test implemented
by the provided function. It's a powerful method for extracting elements from an array that meet certain criteria. */
 
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

// Using forEach to Filter an Array


const x = []

nums.forEach( (num) => {
    if (num > 4) {
        x.push(num)
    }
} )

console.log(x); // [ 5, 6, 7, 8, 9, 10 ]



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

// Filtering Books by Publish Year and Genre

const userBooks2 = books.filter( (bk) => {
    return bk.publish > 1995 && bk.genre === 'History'
} )

console.log(userBooks2)


