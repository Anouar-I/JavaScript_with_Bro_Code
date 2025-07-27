// ClassList = Element property in JavaScript used to interact
//             with and element's list of classes (css classes)
//             Allowd you to make reusable classes for many elements
//             Across your webpage.

// add()
// remove()
// toggle(remove if present ,add if not)
// replace(oldClass,nClass)
// contain()


const myButton = document.getElementById("myButton");

//* ---------- add & remove 


// myButton.classList.add("hover");
// // myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover",event =>{
//     event.target.classList.add("hover");
// })

// myButton.addEventListener("mouseout",event =>{
//     event.target.classList.remove("hover");
// })

//* ---------- toggle

// myButton.addEventListener("mouseover",event =>{
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout",event =>{
//     event.target.classList.toggle("hover");
// })

//* ---------- replace

// myButton.classList.add("enabled");

// myButton.addEventListener("click",event =>{
//     event.target.classList.replace("enabled","disabled");
// })

//* ---------- contain

// myButton.classList.add("enabled");

// myButton.addEventListener("click",event =>{

//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "☃️";
//     } else {
//          event.target.classList.replace("enabled","disabled");
//     }

// })

// we can reuse the css classes among many elements

// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");

// myH1.classList.add("enabled");

// myH1.addEventListener("click",event =>{

//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "☃️";
//     } else {
//          event.target.classList.replace("enabled","disabled");
//     }

// }) 

//*----------------------

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

// buttons.forEach(button => {
//     button.classList.remove("enabled");
// });

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "🥳"
        } else {
             event.target.classList.replace("enabled","disabled");
        }
    })
});


