//* ---------- Add & Change HTML using JavaScript ----------

// ---------- EXAMPLE 1 <H1> ----------

//? STEP 1 CREATE THE ELEMENT

const newH1 = document.createElement("h1");

//? STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent = "I like Pizza!";
newH1.id = "myH1"
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


//? STEP 3 APPEND ELEMENT TO DOM // change to prepend to make it at the top

        // document.body.append(newH1);
        // document.body.prepend(newH1);
//* let's say i want to append it to box1
        // document.getElementById("box1").append(newH1);
        // document.getElementById("box1").prepend(newH1);
//* if i wanted to put it between box1 and box2
        // const box2 = document.getElementById("box3");
        // document.body.insertBefore(newH1,box2);
//* if they don't have id we querySelectAll
        // const boxes = document.querySelectorAll(".box");
        // document.body.insertBefore(newH1,boxes[0]);

document.getElementById("box1").prepend(newH1);


//? REMVE HTML ELEMENT

document.getElementById("box1").removeChild(newH1);
// if you want to remove an element call the parent and then call removeChild(itsName).

