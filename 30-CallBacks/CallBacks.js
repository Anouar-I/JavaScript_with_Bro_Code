 // Callback = a function that is passed as an argument
 //             to another function

 //             used to handle asynchronous operations :
 //             1. reading a file 
 //             2. Network requests  
 //             3. Interacting with databases
 
 //              "Hey , when you're done , call this next. " 

        //hello();
        //goodbye();

// if i want to make goodbye pass after hello 

hello(wait);

 function hello(Callback){
    console.log("Hello!");
    Callback();
 }

 function wait() {
    console.log("wait!");
 }

function leave(){
    console.log("leave!");
}

 function goodbye(){
    console.log("Goodbye!");
 }

 // ------- a function to sum 2 num together
 


sum(displayPage, 100, 9);

function sum(Callback,x,y) {
    let result = x + y ;
    Callback(result);
 }

 function display(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myh1").textContent = result
}