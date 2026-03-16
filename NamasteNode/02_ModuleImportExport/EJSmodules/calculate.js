// modules are protected by default in nodejs
// variables and functions defined in a module are not accessible outside the module
//  unless we explicitly export them

console.log("This is sum.js file");

export function calculateSum(a, b) {
    const sum = a + b;
    console.log("Sum is: ", sum);
}

export function calculateDifference(a, b) {
    const difference = a - b;
    console.log("Difference is: ", difference);
}

export function calculateProduct(a, b) {
    const product = a * b;
    console.log("Product is: ", product);
}
