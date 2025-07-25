// Numer Guessing Game

//-- first thing we gonna need is to set the min and max
//   numbers in our Numer Guessing Game

const minNum = 1 ;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1))+ minNum;

// console.log(answer);

let attempts = 0;
let guess;
let running = true ;
// we have the boolean variable running so we can exit the game

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
// if is not a number we use NaN
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
// if is not between max and min
    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid number");

    }
// if the users guess is a number and is in the range between min and max
    else {
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN");
        }
        else if(guess > answer)
            window.alert("TOO HIGH! TRY AGAIN")
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`)
            running = false; 
        }
    }
}
