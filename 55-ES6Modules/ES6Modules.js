// ES6 Module = Is an external file that contains reusable code.
//              that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions ... and more
//              introduced as part of ECMASript 2015 update


// we import it the mathutils with a destructuring
// and then we can use any function we defiend in it .
import { PI, getCircumference, getArea, getVolume } from "./mathUtils.js";

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)} Cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)} m^2`); 

const volume = getVolume(10);
console.log(`${volume.toFixed(2)} m^3`)