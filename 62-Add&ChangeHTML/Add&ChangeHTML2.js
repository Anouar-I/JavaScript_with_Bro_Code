//* ---------- Add & Change HTML using JavaScript ----------

// ---------- EXAMPLE 2 <li> ----------

//? STEP 1 CREATE THE ELEMENT

const newListItem = document.createElement("li");

//? STEP 2 ADD ATTRIBUTES/PROPERTIES

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//? STEP 3 APPEND ELEMENT TO DOM // change to prepend to make it at the top

        // document.body.append(newListItem);
        // document.body.prepend(newListItem);
//* let's say i want to append it to fruits
        document.getElementById("fruits").append(newListItem);
        // document.getElementById("fruits").prepend(newListItem);
//* if i wanted to put it between apple and orange
        // const orange = document.getElementById("orange");
        // document.getElementById("fruits").insertBefore(newListItem,orange);
//* if they don't have id we querySelectAll
        // const listItems = document.querySelectorAll("#fruits li");
        // document.getElementById("fruits").insertBefore(newListItem,listItems[1]);

//? REMVE HTML ELEMENT

document.getElementById("fruits").removeChild(newListItem);


