// eventListener = Listen for specific events to create interactive web pages
//                 events : click, mouseover, mouseout
//                 .addEventListener(event, callback);
//                 .addEventListener(event, ananymous function);
//                 .addEventListener(event, arrow function);

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

        // function changeColor(event){
        //     event.target.style.backgroundColor = "gold";
        //     event.target.textContent = "Hmmmm 🥳";
        // }

        // myBox.addEventListener("click", function(event){
        //     event.target.style.backgroundColor = "gold";
        //     event.target.textContent = "Congrats 🥳";
        // });
//* an element can have more than one event listener

        // myBox.addEventListener("mouseover",function(event){
        //     event.target.style.backgroundColor = "gold";
        //     event.target.textContent = "hmmm 🤔";
        // })

        // myBox.addEventListener("mouseout",event =>{
        //     event.target.style.backgroundColor = "lightgreen";
        //     event.target.textContent = "Click Me 😁";
        // })

myBtn.addEventListener("click", function(event){
    myBox.style.backgroundColor = "gold";
    myBox.textContent = "Congrats 🥳";
});

myBtn.addEventListener("mouseover",function(event){
    myBox.style.backgroundColor = "gold";
    myBox.textContent = "hmmm 🤔";
})

myBtn.addEventListener("mouseout",event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😁";
})