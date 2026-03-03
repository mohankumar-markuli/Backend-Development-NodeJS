// function that takes another function as argument
// or returns a function from it is called
// higher order function

function x() {
  console.log("x");
}

function y(x) {
  x();
}

// x is a call back fumction
// y is a high order function

const radius = [3, 2, 5, 7];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diamater = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(logic(arr[i]));
  }
  return new_arr;
};

console.log(radius.map(area));
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diamater));

Array.prototype.calculate = function (logic) {
  const new_arr = [];
  for (let i = 0; i < this.length; i++) {
    new_arr.push(logic(this[i]));
  }
  return new_arr;
};

console.log(radius.calculate(area));
