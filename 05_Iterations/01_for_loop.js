// for loop

for (let index = 0; index <= 10; index++){
    const i = index;

    if(i == 5){
        console.log("Five")
    }
    console.log(i)
}

// Nested For loop 

for (let i = 0; i <= 10; i++){
    for (let j = 0; j <= 10; j++){

        console.log(`${i} * ${j} = ${i * j}`)
    }
} 

// break and continue 

/* 
The break statement is used to exit from a loop or switch statement before it has completed all its
iterations or cases. When break is encountered, the loop or switch statement is immediately terminated,
and the program continues with the next statement following the loop or switch. */

for (let x = 1; x <= 10; x++){
    if (x == 7){
        break
    }
    console.log(x)
}

/* 
The continue statement is used to skip the current iteration of a loop and proceed to the next iteration.
Unlike break, continue does not terminate the loop entirely but rather skips the rest of the code inside the
loop for the current iteration. */

for (let y = 1; y <= 10; y++){
    if (y == 5){
        continue
    }
    console.log(y)
}

