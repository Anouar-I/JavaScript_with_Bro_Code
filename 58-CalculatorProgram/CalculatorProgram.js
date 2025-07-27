// CALCULATOR PROGRAM

const display = document.getElementById("display");

// we have three functions to create
    // APPEND TO DISPLAY
    // CALCULATE
    // CLEAR DISPLAY

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}