// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update tp automatically reflect changes

// one way to creat a node list is by using querySelectorAll

let buttons = document.querySelectorAll(".myBtn");

//* ADD HTML/CSS PROPERTIES
// use the forEach  method and use an arrow function
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😁";

// })

//* CLICK EVENT LISTENER

// buttons.forEach(button =>{
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "green";
//     });
// });

//* MOUSEOVER + MOUSEOUT EVENT LISTENER

// buttons.forEach(button => {
//     button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor = "green";
//     });
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseout",event =>{
//         event.target.style.backgroundColor = "hsl(84, 100%, 59%)";
//     });
// })

//* ADD AN ELEMENT

// let newButton = document.createElement("button"); // STEP 1 
// newButton.textContent = "Button 5"; // STEP 2
// newButton.classList = "myBtn"; 
// document.body.appendChild(newButton);// STEP 3
// the added item will not be upadted auto we must update it to the NodeList ourselves
// buttons = document.querySelectorAll(".myBtn")

// console.log(buttons);

//* REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click",event =>{
        event.target.remove();
        // even after removing the bottons they still exist in NODE LIST
        buttons = document.querySelectorAll(".myBtn");
        console.log(buttons);
    }); 
})

