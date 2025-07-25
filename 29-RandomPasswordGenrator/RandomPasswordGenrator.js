// Random Password Genrator

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChar = "!@#$^%()_+-=";

    let allowedChars = "";
    let Password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ?  uppercaseChars : "";
    allowedChars += includeNumbers ?  numberChars  : "";
    allowedChars += includeSymbols ? symbolChar   : "";

   if(length <=0){
    return `(password length must be at least 1)`;
   }
   if(allowedChars.length ===0){
    return `(At least 1 set of characters needs to be selected)`;
   }

   for(let i = 0 ; i < length; i++ ){
    const RandomIndex = Math.floor(Math.random()*allowedChars.length)
    Password += allowedChars[RandomIndex];
   }

    
    return Password;
}


const PasswordLength = 25;
const includeLowercase = true ;
const includeUppercase = true ;
const includeNumbers = true ;
const includeSymbols = true ;

const Password = generatePassword(PasswordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols,
                                 );

console.log(`Genrated Password: ${Password} `)                                 

    
