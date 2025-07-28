// ROCK PAPER SCISSORS

// we set everthing we need 

const choices= ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


// we need a function playGame() that accepts one argument the players choice

function playGame(playerChoice){
  

    // to make the computer choose randomly 
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // to check if the computer choice is equal to player choice
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
        }
       
    }
    // Now we update our Div Elements 
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    // we added this to remove the color after every reset

    resultDisplay.classList.remove("greenText","redText");

    // to make WIN/LOSE color green/red
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore ++; 
            playerScoreDisplay.textContent = playerScore ;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore ++; 
            computerScoreDisplay.textContent = computerScore;
            break;
    }
};
 


