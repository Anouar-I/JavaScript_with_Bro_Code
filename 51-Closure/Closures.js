// Closure = A function defined inside of another function,
//           the inner function has access to the variables 
//           and scope of the outer function.
//           Allow for private variables and state maintenance 
//           Used frequently in JS frameWorks: React,Vue,Angular

/*
// function outer(){

//     let message = "hello";
//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// meesage ="Goodbye";

// outer();
*/

function createCounter() {
    let count = 0;
    function increment() {
        count++,
            console.log(`Count increased to ${count}`)
    }
    function getCount() {
        return count;
    }

    return { increment, getCount };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`the current count is ${counter.getCount()}`);


//* ----- we gonna create a closure for a game 

// we have a score

/**
 * let score = 0;

function increaseScore(points){
score += points;
console.log(`+${points}pts`)
}
function decreaseScore(points){
score -= points;
console.log(`-${points}pts`)
}
function getScore(){
return score;
}

increaseScore(5);
increaseScore(6);
decreaseScore(3);

console.log(`the final score is ${score} pts`)
 */

function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`)
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`)
    }
    function getScore() {
        return score;
    }

    return { increaseScore, decreaseScore, getScore }

}

const game = createGame();

// so now you have to call game


game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`the final score is ${game.getScore()} pts`);





