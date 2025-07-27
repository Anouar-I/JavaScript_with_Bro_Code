

const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click", event => {

    // we can also toggle visibility so we reserve it's space
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myBtn.textContent = "Hide";

    }
    else{
    myImg.style.display = "none";
    myBtn.textContent = "Show";
    }
})