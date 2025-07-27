// DOM = DOCUMENT OBJECT MODEL 
//       Object{} that represents the page you see in the web browser
//       and provides you with and API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structers all the elements in a tree-like representaion.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page .

// we use document.getElementById every time in order to select an element by it's id

// document.getElementById("");

// console.log(document);

// we can access the title and change it 
// document.title = "this is the dom"

// to change the Bg color 

// document.body.style.backgroundColor= "hsl(0,0%,15%)";

// console.dir(document);

const username = " Anouar";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent +=  username === "" ? `Guest` : username;