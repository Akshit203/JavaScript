
let newDate = new Date();
console.log(newDate); // 2024-06-14T14:32:00.162Z

console.log(typeof newDate); // Object

console.log(newDate.toDateString()); // Fri Jun 14 2024
console.log(newDate.getMonth()); // 5, because in js months starts from 0 
console.log(newDate.toLocaleDateString()); 14/6/2024
console.log(newDate.getFullYear()); // 2024

console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes()); 



let newDate2 = new Date("10/03/2003");
console.log(newDate2.getFullYear()); // 2003

