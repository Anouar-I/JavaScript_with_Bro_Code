// DOM Navigation = the process of navigating through the structure 
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


//* ------------ .firstElementChild ------------

    // const element = document.getElementById("desserts");
    // const firstChild = element.firstElementChild;
    // firstChild.style.backgroundColor = "yellow"

// and we can 

    // const ulElements = document.querySelectorAll("ul");

    // ulElements.forEach(ulElement =>{
    //     const firstChild = ulElement.firstElementChild;
    //     firstChild.style.backgroundColor = "green"
    // })

//* ------------ .lastElementChild ------------

    // const element = document.getElementById("fruits");
    //     const lastChild = element.lastElementChild;
    //     lastChild.style.backgroundColor = "yellow"

// and we can 

    // const ulElements = document.querySelectorAll("ul");

    // ulElements.forEach(ulElement =>{
    //     const lastChild = ulElement.lastElementChild;
    //     lastChild.style.backgroundColor = "green"
    // })

//* ------------ .nextElementChild ------------

    // const element = document.getElementById("pie");
    // const nextSibling = element.nextElementSibling;
    // nextSibling.style.backgroundColor = "green";

    // const element = document.getElementById("vegetables");
    // const nextSibling = element.nextElementSibling;
    // nextSibling.style.backgroundColor = "green";

//* ------------ .previousElementChild ------------

    // const element = document.getElementById("orange");
    //     const previousSibling = element.previousElementSibling;
    //     previousSibling.style.backgroundColor = "green";

//* ------------ .parentElement ------------

    // const element = document.getElementById("cake");
    // const parent = element.parentElement;
    // parent.style.backgroundColor = "lightgreen";

//* ------------ .children ------------

const element = document.getElementById("desserts");
const children = element.children;

// console.log(children);

Array.from(children).forEach(child =>{
    child.style.backgroundColor = "gold";
});

// and you can access the children through an index number




