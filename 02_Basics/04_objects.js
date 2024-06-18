// singleton Object :

const user = new Object();
console.log(user); // {}


// Non singleton object :
const user1 = {} 
console.log(user1); // {}

user1.name = "Ak"
user1.id = 2003

console.log(user1) // { name: 'Ak', id: 2003 }

const newUser = {
    Email : "ak203@gmail.com",
    id : 12345,
    fullName : {
        userFullName :{
            fistName : "abc",
            lastName : "xyz"
        }
    }
}

console.log(newUser)

console.log(newUser.fullName.userFullName.fistName) // abc

const obj1 = {1 : "A", 2 : "B"}
const obj2 = {3 : "C", 4 : "D"}

/* 
const obj3 = {obj1, obj2}
console.log(obj3) // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }
const obj3 = Object.assign(obj1, obj2)
console.log(obj3) // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
console.log(obj3 === obj1) // true
*/

const obj3 = {...obj1, ...obj2} // combining obj1 and obj2 using spread operator, this syntax is 
console.log(obj3)

const New_obj = {
    name : "xyz",
    city : "chandigarh",
    phone : 2003
}

console.log(Object.keys(New_obj)) // [ 'name', 'city', 'phone' ] 
console.log(Object.values(New_obj)) // [ 'xyz', 'chandigarh', 2003 ]
console.log(Object.entries(New_obj)) // [ [ 'name', 'xyz' ], [ 'city', 'chandigarh' ], [ 'phone', 2003 ] ]

console.log(New_obj.hasOwnProperty("name")) //true

// .stringify() converts the JavaScript object New_obj into a JSON string.
// .parse() converts the JSON string back into a JavaScript object

const x = JSON.stringify(New_obj);
console.log(x); // {"name":"xyz","city":"chandigarh","phone":2003}

const y = JSON.parse(x);
console.log(y); // { name: 'xyz', city: 'chandigarh', phone: 2003 }

// Object Destructuring : 

const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "ak"
}

/* The syntax { courseInstructor: Ins } is used to extract the courseInstructor property 
from the course object and assign its value to a new variable named Ins. */

const {courseInstructor : Ins} = course;
console.log(Ins);


