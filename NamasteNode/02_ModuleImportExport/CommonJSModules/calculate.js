// modules are protected by default in nodejs
// variables and functions defined in a module are not accessible outside the module
//  unless we explicitly export them

console.log("This is sum.js file");

function calculateSum(a, b) {
    const sum = a + b;
    console.log("Sum is: ", sum);
}

// module.exports = calculateSum; // default export

function calculateDifference(a, b) {
    const difference = a - b;
    console.log("Difference is: ", difference);
}

function calculateProduct(a, b) {
    const product = a * b;
    console.log("Product is: ", product);
}

 // named export - old syntax

/*
module.exports = {
    calculateSum: calculateSum, // named export
    calculateDifference: calculateDifference,
    calculateProduct: calculateProduct
};
*/

// ES6 new syntax for named export  
module.exports = { calculateSum, calculateDifference, calculateProduct};

// module.exports is an object which is used to export 
// the functions and variables from a module