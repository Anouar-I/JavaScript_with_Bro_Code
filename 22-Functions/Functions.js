// Function = A section of a reusable code.
//            Declare code once, use it whenever you want
//            Call the function to excute that code.


// --      Example -----
// -- Function to Sing happy birthday --

/*
function happyBirthday(Username,age){ // these are paratemrs 
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${Username}!`);
    console.log("Happy birthday to you!");
    console.log(`you are ${age} years old`);

}
// like this it don't do anything to excute the call the function by its name

happyBirthday("Andrew", 22); // think of the () like two phones talking to eachother
//this are arguments

happyBirthday("spongebob",30);
happyBirthday("patrick ",37);



// like this 

*/

// return keyword

function add(x,y){
   // let result = x + y;
   // return result;
    // or 
    return x + y ;
}
        //  let answer = add(1,3);
        // console.log(answer)
console.log(add(1,3))


//
function subtract(x,y){
    return x - y;
}
console.log(subtract(9,7))
//
function Multiply(x,y){
    return x * y;
}
console.log(Multiply(5,10))
//
function divide(x,y){
    return x / y;
}
console.log(divide(80,7))

// ---- function to see if a number is even 
function isEven(number){
                    /* if (number % 2 === 0) {
                            return true;
                        }
                        else{
                            return false;
                        }   */
    // for a shortcut use ternary operator 
    return number % 2 === 0 ? true : false ;

}
console.log(isEven(1))
console.log(8888888)
// ---- function to see if an email is valid 

function isValidEmail(Email){
        /* if (Email.includes("@")) {
                return true ;
            }
            else{
                return false ;
            } */

    return Email.includes("@") ? true : false ;
    
}
console.log(isValidEmail("andrewbob@fake.com"))
console.log(isValidEmail("jamesfake.com"))
console.log(isValidEmail("bob@fake.com"))