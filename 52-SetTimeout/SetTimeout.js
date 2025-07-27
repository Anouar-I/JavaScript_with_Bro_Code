// setTimeout() = function in Js that allows you to schedule 
//                the execution of a function after an amount of time (millieseconds)
//                times are approximate (varies based on the workload of the Js runtime env.)

//                setTimeout(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it triggers 

// function sayHello(){
//     window.alert("Hello")
// }


// setTimeout(function(){window.alert("Hello")}, 3000)

// setTimeout(()=> window.alert("hello"), 3000);

/* to clear it before it happens
// const timeoutId = setTimeout(()=> window.alert("hello"), 3000);

// clearTimeout(timeoutId);
*/

let timeoutID;

function startTimer() {
    timeoutID = setTimeout(() => window.alert("Hello"), 3000);
    console.log("started")
    
}

function clearTimer() {
    clearTimeout(timeoutID);
    console.log("cleared")
}

//----- or -------

// function startTimer(){
//     time = setTimeout(() => window.alert("Hello"),3000);
// }

// function clearTimer(){
//     clearTimeout(time);
// }