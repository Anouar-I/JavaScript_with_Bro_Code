//  WhileLoop = repeat some code while some condition is true 

//let username;

// if username is empty promot wil repeat forever

        /*
        while(username === ""){
            console.log("you didn't enter your name");
        }
        */
// - to fix it :
            /*
            while(username === "" || username === null){
                username = window.prompt(`Enter your name`)
            }
            */
// repeat some code till condition is no longer true 
// if you press cancel it will print null to fix it use :|| username === null

// another variation do while loop
// in it you can have the username as undefined
       
        /*

        do{
            username = window.prompt(`Enter your name`)
        }while(username === "" || username === null)
        // do the code first then check the loop 

        console.log(`Hello ${username}`);

        */


// ---- Another example  :

let LoggedIn = false;
let UserName;
let PassWord;

// while this condition is true repeat forever

while(!LoggedIn){
    UserName = window.prompt("Enter your Username");
    PassWord = window.prompt("Enter your Password");

    if(UserName === "myUsername" && PassWord === "myPassword"){
        LoggedIn = true; 
        console.log("You are logged in! ");
    }
    else{
        console.log("Invalid credentials! Please try again ");

    }

    
}
