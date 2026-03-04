// JavaScript

// variable
// 1. let
// 2. var
// 3. const


let name = "abcd"

// DECLARATION of variable
let nameOfInstructure;

// ASSIGNMENT of variable
nameOfInstructure = "Mohankumar";
console.log(nameOfInstructure);


// Constants - we cant change value, do not support declaration

// const pi; cant declare variable
const pi = 3.14;
// pi = 3; cant change the value


// ------------DataTypes------------------------------

// 1. Premitive Data Types - String, Number, Boolean, Null, Undefined, Symbol


// ----------------String and Numbers------------------
const firstName = "Mohankumar";
const lastName =  "Markuli";

const age = 28;
// string literal and variable injection - telda operator
const commentary = `My name is ${firstName} ${lastName} and I am ${age} years old`;

console.log(commentary);

// ----------------- Boolean -------------------------

const isHeCool = false;
const isSunHot = true;

// -------------- Null and Undefined------------------
// Null - it is an intentional assignment of no value
const emptyValue = null;

// Undefined - it is a variable that has been declared but not assigned a value
let unassignedVariable;
console.log(unassignedVariable); // undefined

let myName;
console.log("myName:",myName);

myName = "Mohankumar";
console.log("myName:",myName);

myName = undefined; // we can assign undefined to a variable
console.log("myName after assigning undefined:", myName); // undefined

myName = null; // we can assign null to a variable
console.log("myName after assigning null:", myName); // null

//  both are doing the same thing, but null is more intentional and clear to indicate that the variable is empty or has no value,
//  while undefined can be a result of a variable being declared but not assigned a value or a function that does not return anything.

