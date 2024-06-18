// Immediately Invoked Function Expression (IIFE)

(function dataBase1(){
    console.log(`DataBase 1 connected`)
}) 

(); /* Output : DataBase connected
The first IIFE is followed by a semicolon, so the JavaScript engine correctly understands
that the first statement has ended before starting the second IIFE.

(function dataBase2(){
    console.log(`DataBase 2 connected`)
}) 

() 

/* Without a semicolon, the JavaScript engine might misinterpret the second IIFE.
The lack of a semicolon could lead the engine to interpret the second (as part of the first statement 
rather than the start of a new function expression. */