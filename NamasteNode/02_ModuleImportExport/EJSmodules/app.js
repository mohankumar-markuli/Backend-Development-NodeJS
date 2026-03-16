
// Importing the calculate.js file
import { calculateSum, 
    calculateDifference, 
    calculateProduct } 
    from "./calculate.js"; 


var name = "Mohankumar";
var a = 10; // global variable
var b = 20;

calculateSum(a,b); // Calling the calculateSum function from sum.js
calculateDifference(a,b); // Calling the calculateDifference function from sum.js
calculateProduct(a,b); // Calling the calculateProduct function from sum.js

console.log("Namaste " + name);
