//    = assignment operator 
//   == comparison operator (compare if values are equal)
//  === strict equality operator (compare if values & datatype are equal)
//   != inequality operator 
//  !== strict inequality operator 

const PI = "3.14";

//  -----   we compare the value with == 
    /*   
    if(PI == 3.14){
            console.log("that is Pi");

        }
        else{
            console.log("that is NOT Pi");
        }
    */


// yet with === we also include datatype numb or string
//  -----   === strict equality operator  is useful when you accept user input
    
    /*   
    if(PI === 3.14){
            console.log("that is Pi");

        }
        else{
            console.log("that is NOT Pi");
        }
    */

//  -----  != inequality operator retures true if 2 values are not equal


    /*
        if(PI != 3.14){
            console.log("that is Not Pi");

        }
        else{
            console.log("that is  Pi");
        }
    */

//  -----  !== strict inequality operator 
// are the values or data type diffrent

        if(PI !== "3.14"){
            console.log("that is Not Pi");

        }
        else{
            console.log("that is  Pi");
        }