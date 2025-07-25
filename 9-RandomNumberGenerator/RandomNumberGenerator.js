// Random Number Generator

// let randomNum = Math.random(); // generates a random num between 0 and 1

/*
        let randomNum = Math.floor(Math.random()*6 + 1); // * numb = like these one to make it between 0 and  6 
                                                    // encolse in floor method to remove decimal  
                                                    // add  + 1 to include 6 

        console.log(randomNum)

*/


        /* .if you want it between a specifique number :

                const min = 95;
                const max = 100;


                let randomNum2 = Math.floor(Math.random()*(max - min)+ min) ;
                console.log(randomNum2)

        */



const mybtn = document.getElementById("mybtn");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

mybtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max)+ min;
    randomNum2 = Math.floor(Math.random() * max)+ min;
    randomNum3 = Math.floor(Math.random() * max)+ min;
    Label1.textContent = randomNum1
    Label2.textContent = randomNum2
    Label3.textContent = randomNum3
}
