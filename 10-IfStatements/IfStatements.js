// IF STATEMENTS = if a condition is true , excute some code
//                 if not , do something else

let age = 8;

if(age >=18 ){
    console.log("you are old enough")
    
}
else{
    console.log("you are not old enough")
    
}

let time = 9 ;
if (time < 12) {
    console.log("Good morning!")    
}
else{
    console.log("Good afternoon!")
}

// condion work verywell with boolean variable

let isStudent = false;
if(isStudent){
    console.log("you are a student")
}
else{
    console.log("you are not a student")
}

// nested if statment  
// you canus another if statment in an if statment
let age2 = 22;
let hasLicense = false;

if (age2 >= 16) {
    console.log("you are old enough to drive!");

    if(hasLicense){
        console.log("you have your license!")
    }
    else{
        console.log("you do not have your license yet!")
    }
}
else{
    console.log("You must be 16+ to have a License");
}



//



  /*      let age3 = 22;

            if (age3 >= 100){
                console.log("you are TOO OLD to enter !");
            }
            if (age3 == 0){
                console.log("you can't enter , You were just born !");
            }
            
// to check if 2 values are equale ==

            else if (age3 >= 18) {
                console.log("you are old enough to enter !");
            }
            // else if 
            else if (age3 <= 0) {
                console.log("Your age can't be below 0!");
            }
            
            else{
                console.log("you must be 18+ to enter!");
            }
*/


const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")



let age3;

mySubmit.onclick = function(){

        age3 = myText.value;
        age3 = Number(age3)

   




    if (age3 >= 100){
            resultElement.textContent = "You are TOO OLD to enter";
        }
            
    else if (age3 == 0){
        resultElement.textContent = "you can't enter , You were just born !"
    }
 
    // to check if 2 values are equale ==

    else if (age3 >= 18) {
        resultElement.textContent = "you are old enough to enter!"
    }
    // else if 
    else if (age3 <= 0) {
        resultElement.textContent = "Your age can't be below 0!"
    }
    
    else{
        resultElement.textContent = "you must be 18+ to enter!"
    }
}
