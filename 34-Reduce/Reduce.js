// .reduce() = reduce the element of an array to a single value

const Prices = [5,30,10,25,15,20];

const total = Prices.reduce(sum);

console.log( `$${total.toFixed(2)}` )


function sum(accumulator,element){
    return accumulator + element ;
}

const Grades = [75,70,80,90,65,95];

const Maximum = Grades.reduce(GetMax);
const Minumum = Grades.reduce(GetMin);

console.log(Maximum)
console.log(Minumum)

function GetMax(first, last){
    return Math.max(first, last);
}
function GetMin(first, last){
    return Math.min(first, last);
}