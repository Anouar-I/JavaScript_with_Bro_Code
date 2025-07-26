// sort() = method used to sort elements of an array in place .
//          Sorts elements as strings in lexicographical order by default.
//          lexicographic = (alphapet + numbers + symbols) as strings

let fruits = ["apple","orange","banana","coconut","pineapple"];
let numbers = [1,10,2,9,3,8,4,7,5,6];

fruits.sort();

console.log(fruits);
// in sorting we treat every element as a string 

// sorting number will give us [ 1, 10, 2, 3, 4, 5, 6, 7, 8, 9 ] 10 is the second not last
// to sort number properly we need right a custom comparison function inside sort().

numbers.sort((a, b) => a-b); // for revers do b - a

console.log(numbers);

// you can sort objects by a given property

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 45, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]
//* to sort them by age
        // people.sort((a, b) => a.age - b.age);
        // console.log(people);
//* to sort them by gpa 
        // people.sort((a, b) => b.gpa - a.gpa)
        // console.log(people);
//* to sort them by name 
        // people.sort((a, b) => a.name - b.name)
        // console.log(people);
// will not come right you need a diffrent formula to sort a string inside an object
// like this 
        people.sort((a, b) => a.name.localeCompare(b.name));
        console.log(people);
        // and for the reverse just flip the a and b

