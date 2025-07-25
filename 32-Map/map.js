// .map() = accepts a callback and applies that function
//          to each element of an array , then return a new array

// like for each

const numbers =  [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);
console.log(squares);
console.log(cubes);


function square(element) {
    return Math.pow(element , 2);
}
function cube(element) {
    return Math.pow(element , 3);
}

const students = ["Anouar","Idris","Karim","Fares"]
const studentsUpper = students.map(upperCase)
const studentsLower = students.map(lowerCase)


console.log(students);
console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}

// we create an array of dates

const dates = ["2025-1-7","2025-5-7","2025-04-21"];
console.log(dates)
const formattedDates = dates.map(formatDates);
console.log(formattedDates)

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`

}


