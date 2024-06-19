
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['one', "two", "three", "four"]

/* while loop :

The condition is checked before the loop body is executed.
If the condition is false initially, the loop body is never executed. */

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

/* do - while loop :
The loop body is executed once before the condition is checked.
The loop body is guaranteed to execute at least once. */

let score = 100

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);