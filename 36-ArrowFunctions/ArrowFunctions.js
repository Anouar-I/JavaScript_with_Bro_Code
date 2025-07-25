// Arrow Functions = a concise way to write function expressions
//                   good for simple functions that you use only once 
//                   (parameters) => some code


/*
                function hello(){
                    console.log("hello");
                }
                // to use this function you have to call it's name

                hello();

                // to use it in an arrow function 

                const hello2 = () => console.log("hellooo!");
                hello2();
*/

const hello = (name,age) => {console.log(`hello! ${name}`)
                             console.log(`you are ${age} years old`)}
hello("Andrew",22);

/*

setTimeout(function(){
    console.log("Hello World")
},3000);

*/

//        setTimeout( () => console.log("Hello World"),3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));
console.log(squares);
const cubes = numbers.map((element) => Math.pow(element,3));
console.log(cubes);
const EvenNums = numbers.filter((element) =>  element %2 === 0  );
console.log(EvenNums);
const OddNums = numbers.filter((element) =>  element %2 !== 0  );
console.log(OddNums)

const Total = numbers.reduce((first,last) => first + last )
console.log(Total);
