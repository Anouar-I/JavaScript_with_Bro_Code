// String Methods = Allow you to manipulate and work with test (strings)

let userName = "AndrewBob   ";

/*  //if you want the first caracter of name use .charAt

console.log(userName.charAt(0));

*/

// indexOf() will return the index of the first ocurrence 

console.log(userName.indexOf("n"));

// length of user name
console.log(userName.length);

// use .trim to remove white space after or before
    //userName = userName.trim();

userName = userName.toUpperCase(); //and toLowercase

//Repeat(how many times )

userName = userName.repeat(5);

//to determine if a string start with a given caracter
// and there is endsWith
 
let result = userName.startsWith(" ")

//console.log(result)
        /*
        if(result){
            console.log("your username can't begin with ' '")
        }
        else{
            console.log(userName);
        }
        */

//console.log(userName);

let phoneNumber = "05-61-13-59-09";
/*
phoneNumber = phoneNumber.replaceAll("-","/");
*/
// padstart specifed length adds to start and padend adds to end
phoneNumber = phoneNumber.padStart(20,"0");

console.log(phoneNumber);







