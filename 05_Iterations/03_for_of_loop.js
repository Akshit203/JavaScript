
// for of loop
// with arrays
let arr = [10, 11, 12, 13, 14, 15]

for(const i of arr){
    console.log(i)
}

// with strings 
let str = "Chandigarh"
let x = 0

for (let s of str){
    x++
    console.log(`${x} element is : ${s}`)
}

// Maps

// take only unique values

/* Maps: for...of iterates over each entry (key-value pair) of the Map. 
Using destructuring in the for...of loop (for (const [key, value] of map)) allows
you to directly access the key and value of each entry. */


const map = new Map();

map.set('IN', "India")
map.set('USA', "United states of America")

console.log(map)

for (const key of map){
    console.log(key) // [ 'IN', 'India' ] 
                     // [ 'USA', 'United states of America' ]
}

for (const [k, v] of map){
    console.log(k, v) // IN India 
                            // USA United states of America
}
