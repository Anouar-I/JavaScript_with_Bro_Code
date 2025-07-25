// Variable Scope = where a variable is recognized
//                  and accessible (local vs global)

// ---- can't give the same name to variables
//             let x = 1;
//             let x = 2;

// you can use the same variable name as long as they are within diffrent scopes

function2();
//  a local scope is any variabele declared within a function
// or inside curly braces { }
function function1(){
    let x = 1;
    console.log(x);
}
// function can't see inside other functions 
// think like nighboring houses
function function2(){
    let x = 2;
    console.log(x);
}

// this is a globl scope 

let y = 99;

// --- a gloabl scope is any variabele declared outside of  a function
// it is not recommended to declate gloabl variables in a large program
