// Iterating through an Object

const myObject = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five"
}

for (const key in myObject) {
    console.log(`${key} = ${myObject[key]}`);
}

// Iterating through an Array

const programming = ["js", "xml", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// Iterating through a Map

/* for...in is not suitable for Map objects. Instead, you should use the for...of loop along
 with map.keys(), map.values(), or map.entries(). */

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}