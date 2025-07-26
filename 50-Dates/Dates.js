// Dates objects = Objects that contain values that represent dates and times 
//                 these date objects can be changed and formatted to suit our needs

//
// Date(year, month, day, hour, minute, second, ms)
// passing a string is also valid 

// const date = new Date(2025, 5, 5, 2, 9,5);
// const date = new Date("2025-06-5-2:09:15");

// if you pass 0 it will give you the time you computer thinks time begain
// and ms
const date = new Date();
// you can extract indivdaul value from it 

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate(); 
const hour = date.getHours(); 
const minutes = date.getMinutes(); 
const seconds = date.getSeconds(); 
const dayOfWeek = date.getDay(); 

// all begain from 0 so sunday is 0 and monday is 1 same with month JAN is 0

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

// with a date object you can set the date with a method 

date.setFullYear(2019);
date.setMonth(0);
date.setDate(1);
date.setDate(1);
date.setHours(5);
date.setMinutes(5);
date.setSeconds(5);

console.log(date)

// you can compare dates too 

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1){
    console.log("HAPPY NEW YEAR!");
}




