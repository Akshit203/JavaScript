
const sym = Symbol("key 1");

// object literal

const User = {
    name: "ak",
    "country code": 91,
    [sym]: "key 1 key 1",
    city: "chandigarh",
    phone: 10,
    email: "ak2003@gmail.com",
}


console.log(User.name); // Output: ak
console.log(User["name"]); // This is the preferred way when property names are dynamic or contain spaces
                           // output : ak

                           
// Accessing properties with spaces or special characters
// console.log(User.country code) // Error: Unexpected identifier
// console.log(User."country code") // Error: Unexpected string

console.log(User["country code"]); //  91

// Accessing symbol properties
// console.log(User.sym); // Undefined - 'sym' is not a property name, it's a variable holding a symbol
console.log(User[sym]); // key 1 key 1

console.log(typeof sym); // symbol

// Printing the entire User object
console.log(User); 
/* Output:
{
  name: 'ak',
  'country code': 91,
  city: 'chandigarh',
  phone: 10,
  email: 'ak2003@gmail.com',
  [Symbol(key 1)]: 'key 1 key 1'
}
*/

// Freezing the User object to prevent modifications
Object.freeze(User);

// Any attempts to modify the User object will be ignored 
User.name = "new name";
console.log(User.name); // Output: ak (unchanged due to Object.freeze)

// Trying to add a new property will also be ignored
User.age = 10;
console.log(User.age); // Output: undefined

// Attempting to delete a property will fail
delete User.city;
console.log(User.city); // Output: chandigarh
