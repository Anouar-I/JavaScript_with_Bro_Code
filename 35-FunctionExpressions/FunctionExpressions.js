// Function Expressions  = a way to define functions as a value
//                        or a variable

/*---- not to be confused with -----*/

// function declaration = define a reusable block of code that 
//                        that pereforms a specific task                     
/* like this 
            function hello(){
                console.log("hello!")
            }
*/
/*
        const hello = function(){
            console.log("Hello!");
        }

        hello();
*/
// using Js we can pass a function as a value 

//  inted of this    ---- 
/*     setTimeout(hello,3000);
    we do this 

                setTimeout(function(){
                    console.log("hello!!!");
                },3000);
*/

// we pass an entire function as an argument 

const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
    return Math.pow(element , 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3 );
});
const evenNums = numbers.filter(function(element){
    return element %2 === 0 ;
});
const OddNums = numbers.filter(function(element){
    return element % 2 !== 0 ;
});

const Total = numbers.reduce(function(first,last){
    return first + last ;
});


console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(OddNums);
console.log(Total);



