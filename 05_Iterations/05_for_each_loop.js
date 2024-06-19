// What is a Callback Function ?

// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// Many array methods, like map, filter, and forEach, take callback functions as arguments.

// Callbacks are essential for asynchronous programming in JavaScript, such as when making
// HTTP requests or reading files.

// Using forEach with Arrays :

const programming = ["js", "xml", "py", "java", "cpp"]

programming.forEach( function (item) {
    console.log(item)
})

// using arrow function

programming.forEach( (item1) => {
    console.log(item1)
})

// using named function 

function printItem(item){
    console.log(item)
}

programming.forEach(printItem) // only give refernec

// Using forEach with an Array of Objects :

const myCoding = [
    {
        language: "javascript",
        FileName: "js"
    },
    {
        language: "java",
        FileName: "java"
    },
    {
        language: "python",
        FileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.language);
})