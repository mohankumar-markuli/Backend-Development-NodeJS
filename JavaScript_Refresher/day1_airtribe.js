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

// Non-primitive data types - Object, Array, Function

// ------------------ Object -------------------------

const hello = "Hello World";
const age1 = 28;
const person = {
    name: "Mohankumar",
    age: 28,
    isCool: true
};

console.log(person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Cool:", person.isCool);

//------------------- Array -------------------------

const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Banana", "Orange"];
const mixedArray = [1, "Hello", true, null, undefined, { name: "Mohankumar" }];

console.log(numbers);
console.log(fruits);
console.log(mixedArray);

//------------------- Function -------------------------

function greet(name) {
    return `Hello, ${name}!`;
}

greet("Mohankumar"); // Hello, Mohankumar!
console.log(greet("Mohankumar")); // Hello, Mohankumar!

// Arrow function
const greetArrow = (name) => {
    return `Hello, ${name}!`;
}

console.log(greetArrow("Mohankumar")); // Hello, Mohankumar!

// -------------------- Typeof Operator -------------------------

console.log(typeof firstName); // string
console.log(typeof age);
console.log(typeof isHeCool);
console.log(typeof emptyValue);
console.log(typeof unassignedVariable);
console.log(typeof person);
console.log(typeof numbers);
console.log(typeof greet);

// -----------PARSING AND EXECUTION OF JAVASCRIPT-----------------

// 1. Parsing - JavaScript engine reads the code and converts it into an Abstract Syntax Tree (AST) and checks for syntax errors.
// 2. Execution - JavaScript engine executes the code line by line and performs the operations as defined in the code.

// Example 1

var x = 10; // Declaration and assignment
console.log(x); // 10

x = 20; // Reassignment
console.log(x); // 20

// Example 2 (this concept is know as HOISTING)

console.log(a)
var a = 20;
console.log(a)

// Example 3 - functions

console.log("-------------------");
var z;
console.log(z);

function sum(num1, num2) {
    const sum_agg = num1 + num2;
    return sum_agg;
}

const result = sum(2, 3);
console.log("result",result); 
 
z = 12
console.log(z);
