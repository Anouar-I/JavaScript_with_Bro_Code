// ForEach() = method used to itrate over the element of 
//             an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element , index, array are provided

let numbers = [1,2,3,4,5];
// to double each element before displaying it 

numbers.forEach(cube);
numbers.forEach(display);


function double(element, index, array){
    array[index] = element * 2 ;
}

function triple(element, index, array){
    array[index] = element * 3 ;
}

function square(element, index, array){
    array[index] = Math.pow(element,2) ;
}
function cube(element, index, array){
    array[index] = Math.pow(element,3) ;
}


function display(element) {
    console.log(element);
}


let fruits = ["apple","orange","banana","coconut"];

fruits.forEach(Cap);
fruits.forEach(display2);


function uppercase(element, index,array) {
    array[index] = element.toUpperCase();
}
function lowercase(element, index,array) {
    array[index] = element.toLowerCase();
}
function Cap(element, index,array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display2(element) {
    console.log(element);
}