"use strict";
// javascript run time environment

// this in global space
console.log(this); // this refers to globalObject - window,global

// this inside a function - strict mode
function x() {
  //this value depend on strict and non-strict
  console.log(this); // undefined
}
x();

//this in non-strict mode - (this- substitution)
// if value of this is undifined or null then
//  this will be replaced with global object only in non strict node

function x() {
  //this value depend on strict and non-strict
  console.log(this); // window
}
x();

//  this keyword value depends on how function is called (window)

x(); // without object reference - undefined
window.x(); // withe object reference - window object

// this inside a object's method

const student = {
  name: "Mohan",
  print_name: function () {
    console.log(this);
    console.log(this.name);
  },
};

student.print_name();

// call apply bind methods (sharing methods)

const student2 = {
  name: "dev",
};

student.print_name.call(student2); // value of this is student2

// this inside arrow function

const obj = {
  a: 10,
  x: () => {
    console.log(this); //behaves like enclosing lexical context
  },
};

obj.x();

// this inside nested arrow function
// enclosing lexical context

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x();

// this inside DOM
