/* 
STACK MEMORY:

-- Primitive types (like strings, numbers, booleans) are stored directly in the stack.
-- When you assign a primitive value to another variable, a copy of the value is made.

HEAP MEMORY:

-- Objects (and arrays, which are also objects) are stored in the heap.
-- When you assign an object to another variable, both variables reference the same object in the heap.

*/

// Example of stack memory usage with primitive types

let first = "chandigarh";  // 'first' is a string primitive, stored in stack
let second = first;        // 'second' gets a copy of the value of 'first', also in stack

console.log(second);     // Output: chandigarh
second = "Panchkula";    // 'second' is reassigned to a new string, stored separately in stack

console.log(first);  // Output: chandigarh
console.log(second);  // Output: Panchkula

// Example of heap memory usage with objects

let userOne = {
    email: "akemail@gmail.com",
    upi: "902356@ybl",
};  

// 'userOne' is an object, stored in heap. 'userOne' variable holds a reference to this object in stack

let userTwo = userOne;    // 'userTwo' gets a reference to the same object in heap
userTwo.email = "newemail@gmail.com";  // Changing 'email' property through 'userTwo' affects the object in heap

console.log(userOne.email);  // Output: newemail@gmail.com
console.log(userTwo.email);  // Output: newemail@gmail.com


/* Primitives: Stored in stack memory. When assigned to another variable, a copy is made.

   Objects: Stored in heap memory. When assigned to another variable, only the reference is copied, 
            so both variables point to the same object.
*/
