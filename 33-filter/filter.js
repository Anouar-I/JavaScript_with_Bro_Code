// .filter() = creates a new array by filtering 
//             out elements

let numbers = [1,2,3,4,5,6,7];
let EvenNums = numbers.filter(isEven)
let OddNums = numbers.filter(isOdd)

console.log(EvenNums);
console.log(OddNums);

function isEven(elements){
    return elements % 2 === 0;
}
function isOdd(elements){
    return elements % 2 !== 0;
}

const ages = [16,17,18,18,19,20,31];
const adults = ages.filter(isAdult);
const Underage = ages.filter(isUnderage);

console.log(adults)
console.log(Underage)

function isAdult(element){
    return element >= 18;
}
function isUnderage(element){
    return element < 18;
}

const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];

const ShortWords = words.filter(getShortWords); 
const LongtWords = words.filter(getLongWords);

console.log(ShortWords);
console.log(LongtWords);

function getShortWords(element){
    return element.length <= 6 ;
}
function getLongWords(element){
    return element.length > 6 ;
}