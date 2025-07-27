// Element selectors = Mothods used to target and manipulate HTML elements
//                     they allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsByClassName()  // HTML COLLECTION 
// 3. document.getElementsByTagName()    // HTML COLLECTION 
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

//* ---------- getElementsById ----------

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "green";
myHeading.style.textAlign = "center";

console.log(myHeading);

//* ---------- getElementsByClassName ----------

// const fruits = document.getElementsByClassName("fruits");

//* we can use a for loop to apply to all object inside the array
// for (let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// console.log(fruits);

//* same with this 
// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor = "yellow";
// })

//* ---------- getElementsByTagName ----------

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
// we can access indvidual elements by an index

// h4Elements[1].style.backgroundColor = "Gold";

// to apply to all elements we can use an enhanced for loop like previously
/*
    // for(let h4Element of h4Elements){
    //     h4Element.style.backgroundColor = "Gold";
    // }

    // for(let liElement of liElements){
    //     liElement.style.backgroundColor = "lightgreen";
    // }
*/

//if i wanted to change the bg color of each of elements i typecast them as an array
/*
    // Array.from(h4Elements).forEach(h4Element => {
    //     h4Element.style.backgroundColor = "silver"
    // });
    // Array.from(liElements).forEach(liElement => {
    //     liElement.style.backgroundColor = "lightgreen"
    // });
*/

//* ---------- querySelector ---------- add a dot before the class
/*
    // const element = document.querySelector(".fruits");
    /// the querySelector returens a single elemnent the first match
    // element.style.backgroundColor = "yellow";
*/

//* ---------- querySelectorAll ----------
// a nodelist is similar to html collection but it has built in methos
// nodelists are static  html collection are live
// they do not update automaticly in the DOM

const foods = document.querySelectorAll("li");

// foods[4].style.backgroundColor = "yellow";

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})

console.log(foods);






