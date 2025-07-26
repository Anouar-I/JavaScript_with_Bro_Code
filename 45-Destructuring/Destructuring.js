// destructuring = extract values from arrays and objects,
//                 then assign them to variables in  a convienent way  
//                 [] = to preform array destructuring
//                 {} = to preform object destructuring
//                  5 examples

//* ---------- EXAMPLE 1 ----------
//* SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a]; 

// swapping them will make the 2 first then 1

console.log(a);
console.log(b);

//* ---------- EXAMPLE 2 ----------
//* SWAP 2 ELEMENTS IN AN ARRAY 

const colors = ["green","black","white","gold","blue"];

// whe will swap blue with green 
[colors[0],colors[4]] = [colors[4],colors[0]]

// if we console .log blue would be first and green last

console.log(colors);

//* ---------- EXAMPLE 3 ----------
//* WE CAN ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["green","black","white","gold","blue"];

const [firstColor,secondColor,thirdColor,...restColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(restColors);

//* ---------- EXAMPLE 4 ----------
//* EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName : "Spongebob",
    lastName :"SquarePants",
    age : 30 ,
    job : "Fry Cook", 
}

const person2 = {
    firstName : "Patrick",
    lastName :"Star",
    age : 34 , 
}

// you can set a default value like job in this case Unemployed
const {firstName,lastName,age,job = "Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//* ---------- EXAMPLE 5 ----------
//* DESTRUCTURE IN FUNCTION PARAMTERS

function displayPerson({firstName,lastName,age,job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);




