// Importing the calculate.js file
const {calculateSum} = require("./calculateSum.js"); 

// Importing the calculate.js file
const {calculateDifference} = require("./calculateDifference.js"); 

// Importing the calculate.js file
const {calculateProduct} = require("./calculateProduct.js"); 

// exporting all the functions from calculate.js file in app.js file and importing them in app2.js file

module.exports = { calculateSum, calculateDifference, calculateProduct};