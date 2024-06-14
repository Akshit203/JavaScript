const name1 = "ak";
const city = "Chandigarh";

// Traditional String Concatenation : using + operator
// console.log("hello my name is "+name, "and my city is "+city ) // Traditional way


// Template Literals : Using template literals, introduced in ES6 (ECMAScript 2015), with backticks (`)

/* String interpolation in JavaScript, facilitated by template literals, allows for the embedding 
   of variables and expressions directly within strings, enhancing code readability and convenience */

console.log(`Hello my name is ${name1} and my city is ${city}`) // Modern way Syntax
console.log(`Hello my name is ${name1.toUpperCase()} and my city is ${city.toUpperCase()}`) // Modern way Syntax

// Another way to declare string :

const NewEmail = new String ("ak2003@gmail.com"); // Another way using the String constructor
const Email = "ak@gmail.com"; // using string literals

console.log(typeof NewEmail); // Object
console.log(typeof Email); // string

console.log(NewEmail === Email); // false

console.log(NewEmail[0]); // a
console.log(NewEmail[1]); // k
console.log(NewEmail[2]); // @
console.log(NewEmail[3]); // g

// String Methods
console.log(NewEmail.toUpperCase());

console.log(NewEmail.charAt(1)); // k
console.log(NewEmail.indexOf("k")); // 1
console.log(NewEmail.endsWith("m")); 

console.log(NewEmail.toUpperCase()); // Output: AK2003@GMAIL.COM

console.log(NewEmail.toLowerCase()); // Output: ak2003@gmail.com

console.log(NewEmail.charAt(1)); // Output: k

console.log(NewEmail.indexOf("k")); // Output: 1

console.log(NewEmail.lastIndexOf("a")); // Output: 13

console.log(NewEmail.includes("gmail")); // Output: true

console.log(NewEmail.startsWith("ak")); // Output: true

console.log(NewEmail.endsWith("com")); // Output: true

console.log(NewEmail.substring(0, 6)); // Output: ak2003

console.log(NewEmail.slice(0, 6)); // Output: ak2003

console.log(NewEmail.slice(-9)); // Output: gmail.com

console.log(NewEmail.replace("ak2003", "xyz")); // Output: xyz@gmail.com

const example = "ak2003@gmail.com ak2003";
console.log(example.replaceAll("ak2003", "xyz")); // Output: xyz@gmail.com john

const str = "   ak2003@gmail.com   ";
console.log(str);
console.log(str.trim()); // Output: ak2003@gmail.com
