// synchronous = executes line by line consecutively in a sequential manner
//                code that waits for an operation to complete.

// asynchronus = Allows multiple operations to be preformed concurrently without waiting 
//               Doesn't block the execution flow and allows the program to continue 
//               (I/O operation, network requests, fetching data)
//               handeled with : Callbacks, Promises, Async/Await

// setTimeout() is one of many asynchronus functions

function func1(callback) {
    setTimeout(() => {console.log("Task 1");callback()}, 3000);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);



