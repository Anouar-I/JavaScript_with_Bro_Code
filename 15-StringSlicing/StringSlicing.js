// StringSlicing = creating a substring 
//                  from a portion of another string

//              string.slice(start,end)

const fullName = "Andrew Bob";

// last index is exclusive it is not included 
            // let firstName = fullName.slice(0,6 );
            // let LastName = fullName.slice(7,10 );
// you can remove ending index and it works the same 

            //   let firstChar = fullName.slice(0,1);
            //    let lastChar  = fullName.slice(-1);
//you can use negative (-) to start from end 
          
         //   console.log(firstChar);
         //   console.log(lastChar);

//to make it more dynamique we combine string slicing with indexOf method 
// we search fo space ( )

let firstName = fullName.slice(0,fullName.indexOf(" ") );
let LastName = fullName.slice(fullName.indexOf(" ")+1);


console.log(firstName);
console.log(LastName);

// Excercice 

const Email = "AndrewBob@gmail.com";
let userName = Email.slice(0,Email.indexOf("@"))
let extension = Email.slice(Email.indexOf("@")+1)
console.log(userName);
console.log(extension)
