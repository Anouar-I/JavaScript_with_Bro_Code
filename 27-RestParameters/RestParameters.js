// Rest Parameters = (...rest) allow a function to work with a variable 
//                   number of arguments by bundling them into an array


//                   spread = expands an array into seprate elements
//                   rest = bundles seprate elements into an array  

function openFridge(...foods){
    console.log(...foods);
    // i can spread them using spread operator ...
}
function getFood(...foods){
    return foods; 
    // or bundle them
}




const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";


openFridge(food1,food2,food3,food4,food5);

const foods = getFood(food1,food2,food3,food4,food5);

console.log(foods);

console.log("-------------------------------------------------------------")

// -- another method --
// a function to sum a bunch of numbers together

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,3,4,5,6,7,8,9,10)

console.log(`your total is $${total} `);

console.log("-------------------------------------------------------------")

// a function to calculate an average

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const average = getAverage(75,100,85,90,50)

console.log(`the average is ${average} `);


        console.log("-------------------------------------------------------------")


// you can use rest parametes to combine strings together

function combineStrings(...strings){
    return strings.join(" ")
}



const fullName = combineStrings("Mr","Alexander","Blackheart","I");

console.log(fullName);