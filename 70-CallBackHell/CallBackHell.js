// CallBack Hell  = Situation in JavaScript where callbacks 
//                  are nested within other callbacks to the 
//                  degree where the code is difficult to read.

//                  Old pattern to handle asynchronous functions
//                  Use Promises + async/await to avoid callback hell

function task1(callback) {
    setTimeout(() => {
        console.log("task 1 complete");
        callback();
    }, 2000);
    
}

function task2(callback) {
    setTimeout(() => {
        console.log("task 2 complete");
        callback();
    }, 1000);
    
}

function task3(callback) {
    setTimeout(() => {
        console.log("task 3 complete");
        callback();
    }, 3000);
    
}

function task4(callback) {
    setTimeout(() => {
        console.log("task 4 complete");
        callback();
    }, 1500);
    
}

// task1();
// task2();
// task3();
// task4();

// the tasks will not finish in order

// now in these nested callback it will be done in order
// and this is the callbackhell 
//this callbackhell isn't much but sometimes there will a lot more 
// it makes the code unreadable 

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks complete");
            });
        });
    });
});

