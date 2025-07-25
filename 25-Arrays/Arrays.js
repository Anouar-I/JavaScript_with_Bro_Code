// Array = a variable like structure that can 
//         hold more than 1 value 

// we can turn a variable into an array 
// enclosing all values with a set of stright brackets  

let fruits = ["apple","orange","banana"];


// we can change one these elements by accesing it at a certin elment

        fruits[3]="conconut";
        // or we can push an element to the end
        fruits.push("WaterMelon");
        // pop will remove the last element 
        fruits.pop()
        // unshift method will add an element to the beginning 
        fruits.unshift("mango")
        // shift will remove an element from the beginning
        fruits.shift()

        console.log(fruits);
        // to select a single element we choose num in [..] starts from 0 
        console.log(fruits[0]);
        console.log(fruits[1]);
        console.log(fruits[2]);

        console.log(fruits[3]);
        console.log(fruits[4]);

console.log("                  breaaaaaaaaaaaaaaaaaaaak")

// to get a length of an array the is length property
let numOfFruits = fruits.length;
console.log(numOfFruits)
// we can find an index of an element if there is a match 
let index = fruits.indexOf("orange");
console.log(index);

//  if we search for an element and it returns -1
//  we can use it in an if statement 
// if the method returns negative 1 then the element wasn't found 
// and you can let the use know
    if(index == -1){
        console.log("the element wasn't found!")
    }


    console.log("                  breaaaaaaaaaaaaaaaaaaaak")

// -- if you want to loop through the elements
// -- use a for loop

    for(let i = 0 ; i < fruits.length; i++){
        console.log(fruits[i]);
    }


console.log("                  breaaaaaaaaaaaaaaaaaaaak")

// if you want it in revers  
        /** 
              for(let i = fruits.length - 1  ; i >=0  ; i--){
                    console.log(fruits[i]);
                }
                */
               
// there is also an enhanced version 
    /*        for(let fruit of fruits){
                    console.log(fruit)
                  }
    */
           
// -- we can sort them 
// put them right after where you declared your variable 

fruits.sort().reverse()


