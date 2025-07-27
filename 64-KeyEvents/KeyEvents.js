// eventListener = Listen for specific events to create interactive web pages
//                 event: keydown, keyup
//                 document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");


//  document.addEventListener("keydown", event => {
//     console.log(`key down = ${event.key}`)
//  });

//  document.addEventListener("keyup", event => {
//     console.log(`key up = ${event.key}`)
//  });


 document.addEventListener("keydown", event => {
    myBox.textContent = "😯"
    myBox.style.backgroundColor ="gold";
 });

 document.addEventListener("keyup", event => {
    myBox.textContent = "😁"
    myBox.style.backgroundColor ="lightGreen";
 });

const moveAmount = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {

        event.preventDefault(); // Prevent default scrolling behavior

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    };
});