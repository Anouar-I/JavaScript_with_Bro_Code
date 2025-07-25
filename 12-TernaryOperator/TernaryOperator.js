// ternary Operator = a shortcut to if {} and else {} statments
//                    helps to assign a variable on a condition 
//                     condition ? codeifTrue : codeifFalse;

        /*
        let age = 22;
        let message = age >= 18 ? "You're an adult" : "You're a minor";

        console.log(message);
        */

        /*
        let time = 24;
        let greeting = time < 12 ? "good morning!" : "good afternoon!"
        console.log(greeting);
        */

        /*let isStudent = false;
        let message2 = isStudent  ? "You are a student " : "You are not a student"
        console.log(message2);
        */

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100) }`);

