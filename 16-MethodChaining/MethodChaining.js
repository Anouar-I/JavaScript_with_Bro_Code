//   Method Chaining = Calling one method after another 
//                     in one continuos line of code 

// ------ NO METHOD CHAINING ------

let username = window.prompt("Enter your user name")
//if i wanted to remove white space before or after o make uppercase or lowercase
       
        /*
        username = username.trim();
        let letter = username.charAt(0);
        letter = letter.toUpperCase();

        let extraChars = username.slice(1);
        extraChars = extraChars.toLowerCase();

        username = letter + extraChars ; 

        console.log(username)
        */

// it works but it is a lot to write 
// with method chaining we can combine these steps together
// and avoid creating variables we dont need like letter and extraChars



// ------  METHOD CHAINING ------
// use dot "." between and you can add + 

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)
