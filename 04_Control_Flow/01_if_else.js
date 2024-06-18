/*
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}

 <, >, <=, >=, ===, ==, !==, != 
*/

let x = 10

if (x > 5){
    console.log("x is greater than 5")
} 
else {
    console.log("x is less than 5")
}

// else - if statement 

let score = 95;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


const isUserLoggedIn = true
const debitCard = true

if (isUserLoggedIn && debitCard){
    console.log(`true`)
}
else{
    console.log("false")
}

/* ************************************************************************************** */

const a = true
const b = false

if(a || b) return true

else return false

