//Variables = a container that stores a value.
//            behaves as if it were the value it containes.
//              you have strings numbers and booleans 

//  1. declaration   let x;
//  2. assignment  x = 100;


let x;
 
x = 100;

console.log(x)

let age = 25;

console.log(age)

let price = 10.99;

console.log(price)

let gpa = 3.1;

console.log(gpa)

console.log(`you are ${age} years old`);
console.log(`the price is  $${price} `);
console.log(`your gpa is  ${gpa} `);


//to display data type 
console.log(typeof age)


//strings is a series of characters

let firstName = "Andrew";
let favoriteFood = "pizza";
let email = "somthing151@gmail.com";

console.log(typeof firstName );
console.log(`your name is ${firstName}`);
console.log(`your favorite food is ${favoriteFood}`);
console.log(`your email is ${email}`);

//booleans  either true or false used as flags
let online = false;
let forSale = true;
let isstudent = true;

console.log(typeof online)
console.log(`Andrew is online : ${online}`)

console.log(`is this car for sale : ${forSale}`)

console.log(`Enrolled : ${isstudent}`)

///////

let fullName = "Andrew bob";
let Age = 22;
let student = true;

//to change the text  content of an html element

document.getElementById("p1").textContent = `your name is ${fullName}`;
document.getElementById("p2").textContent = `you are ${Age} years old `;
document.getElementById("p3").textContent = `Enrolled = ${student}`;












