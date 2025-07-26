// how to work with an array of objects 

const fruits = [{name: "apple", color:"red", calories:95},
                {name: "orange", color:"orange", calories:45},
                {name: "bannana", color:"yellow", calories:105},
                {name: "coconut", color:"white", calories:159},
                {name: "pineapple", color:"yellow", calories:37},];

                // how you access a property withen an object within an array
                // console.log(fruits[4].calories);

// to add a new object add push method 

fruits.push({name :"grapes", color:"purple", calories: 62});

// you can use pop method to remove an element 
    //? fruits.pop();
// or splice to remove at certin indices
    //? fruits.splice(1,2)

console.log(fruits);

//* ------ forEach ------ to loop through the elements of your array

fruits.forEach(fruit => console.log(fruit.name));

//* ------ map() ------ run each element through a function and return a new array

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

//* ------ filter() ------ will return a new array after using each element and checking a condition

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

//* ------ reduce() ------ will return a single value like this .reduce({accumulator, element})

const maxFruit = fruits.reduce((max , fruit) => 
                                fruit.calories > max.calories ?
                                fruit: max);

const minFruit = fruits.reduce((min , fruit) => 
                                fruit.calories < min.calories ?
                                fruit: min);

console.log(maxFruit);
console.log(minFruit);