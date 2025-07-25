// Spread Operator = ... allows an iterable such as an 
//                   array or  string to be expanded 
//                   into seprate elements
//                   (unpacks the elements) 

// --- you add three dots ...
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum)

        console.log("           ---------");

// you can use on a string too

let username = "Andrew Bob";
let letters = [...username].join("-");
console.log(...letters);

        console.log("           ---------");

// Now an array of fruits

let fruits = ["apple","orange","banana"];
let vegetables = ["carrots","celery","potatoes"]
// i can create a shallow copy of this array 
// it means a diffrent data structure but it contains identical values
let newfruits = [...fruits];
let foods = [...fruits,...vegetables,"eggs","milk"];
// you can into the spread operator
console.log(foods);

console.log("           ---------");
