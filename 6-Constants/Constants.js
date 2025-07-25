// Cons = a variable that can't be changed 

// repclace let to const


const pi = 3.14159;
let radius;
let circumfrence;

    /* 
        radius = window.prompt("enter a radius of a circle "); 
        radius = Number(radius);
        circumfrence = 2 * pi * radius;
        console.log(circumfrence)
        */




document.getElementById("submit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfrence = 2 * pi * radius;
    document.getElementById("myh3").textContent = circumfrence + "cm" ;
}

