// Error = An object that is created to represent a prblem that occurs
//         They Occur often with user input or establishing a connection

// errors can be generated for all sorts of issues
// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS

//* we can handle them using 

// try {} = Encloses code that might potentially cause an error 
// catch {} = Catch and handle any thrown Errors from try {}
// finally {} = (optional) Always exceutes. Used mostly for clean up
//              ex. close files, close connections, release resources


try {
    console.log(x);
}
catch (error) {
    console.error(error);
}
// now our programe is not interrupted  
// using console.error insted of log 
finally {
    //  Close files,
    //  close connections
    //  release resources
    console.log("this always executes")
}

console.log("you have reached the end!");

try {
    const dividend = Number(window.prompt("Enter a dividend:"));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if(divisor == 0){
        throw new Error("you can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor

    console.log(result);
}
catch (error) {
    console.log(error);
}

console.log("you have reached the end!");


//* trying to divide 1 on 0 comes out as Infinity
/*
 const dividend = window.prompt("Enter a dividend:");
    const divisor = window.prompt("Enter a divisor:");

    const result = dividend / divisor

    console.log(result);
    */