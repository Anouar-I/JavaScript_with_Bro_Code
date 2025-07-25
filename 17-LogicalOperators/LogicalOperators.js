// Logical Operators = used to combine or manipulate boolean values
//                      (true or false )

/**** there are three of them  */

//                  AND = &&
//                  OR  = ||
//                  NOT = !



// -----     AND = &&     -----



// if i want to input something in certain condition 
const temp = 30  ;


/*
if(if this is true && this is also true  ){
    console.log("what ever you had");
}
     */

if(temp > 0 && temp <= 30 ){
    console.log("The weather is Good ");
}
else {
    console.log("The weather is BAD")
}


// -----      OR  = ||     -----


/* at least one condition needs to be true 

if(if this is true  OR = || if this is  true  ){
    console.log("what ever you had");
    */
    const temp2 = 32  ;

    if(temp2 <= 0 || temp2 > 30 ){
        console.log("The weather is BAD ");
    }
    else {
        console.log("The weather is GOOD")
    }


// -----      NOT = !     -----


//      Using the not logical operator we can flip a boolean
//       from true to false or false to true 

const isSunny = true;

if(!isSunny){
    console.log("It is Cloudy")
}
else{
    console.log("It is Sunny")
}
