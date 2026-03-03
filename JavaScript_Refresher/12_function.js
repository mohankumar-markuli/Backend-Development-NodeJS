// function statement or function declaration
a();
function a() {
  console.log("a called");
}

// function expression
b(); //error in hositing phase
var b = function () {
  console.log("b called");
};
b();

// named function expression
var b = function xyz() {
  console.log("b called");
};
b();

// parameter and arguments
var b = function xyz(param1, param2) {
  console.log("b called");
};

b(arg1, arg2);

//  first class functions or first class citizen
// the ability to use the function to use as value
var b = function (param1) {
  console.log("b called");
};
function xyz() {}
b(xyz); // passing function to a function

// Arrow function

//  Anonymous function
// function (){

// }
