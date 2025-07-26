// shuffle : randomly shuffle an array
// this is not necessary but if you intersted in making a game in JS or some randomness

const cards = ["A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"];
 
        // can use the sort method to shuffle yet it's not recommended
        // cards.sort( () => Math.random() - 0.5);

// we can use the Fisher-Yates algorithm

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1 ; i > 0; i--){
         // to generate a random number between end and begining
        const random = Math.floor(Math.random() * ( i + 1 ));
        // we will swap the king with a random num

        [array[i],array[random]] = [array[random],array[i]];

    }
}

