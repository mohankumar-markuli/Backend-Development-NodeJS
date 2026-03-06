// JavaScript - Day2

//-----------Function declaration------------------

function sum1(a,b){      //function defination
    const c = a+b;  // local variable - only accessible within the function
    return c;
}
console.log(sum(2,3)); // 5

// ----------object declaration------------------
const userObject = {
    name: "Mohankumar",
    age: 25,
    height: 175,
    hobbies: ["coding", "traveling", "cooking"]
}
// -----------variable declaration------------------
const name = userObject.name;
console.log(name); // Mohankumar

// -----------function expression------------------

const sum2 = function(a,b){
    return a+b;
}
console.log(sum2(5,10)); // 15

// -----------arrow function------------------

const sum3 = (a,b) => a+b; // implicit return
console.log(sum3(10,20)); // 30


// ---------call site------------------

const sum4 = sum1

sum4() //this is a call site, callsite basically means () after function
sum4(2,4) //this is a call site, callsite basically means () after function

function sum(a,b){
    const c = a+b
    return c
}

console.log(sum(1,2)) //undefined as function is not retuning anything
console.log(sum2())
console.log(sum3())

// ----------function with default parameters------------------

function sum5(a=0,b=0){ // default parameters
    return a+b;
}
console.log(sum5()); // 0

//-----------------------CLOSERE-------------------------

let a = 99
let b = 100

function sumFunction(a,b,c){ 
    return a+b+c
}

console.log(sumFunction(2)) // 2+undefined+undefined = NaN
console.log(sumFunction(2,3)) // 2+3+undefined = NaN
console.log(sumFunction(2,3,4)) // 2+3+4 = 9

// example of closure

let count = 0;
function counter(){
    count++;
    return count
}

// functin reference
const counter1 = counter; // counter1 is a reference to the counter function
const counter2 = counter; // counter2 is a reference to the counter function
const counter3 = counter; // counter3 is a reference to the counter function

console.log(counter1, counter2, counter3); // [Function: counter] [Function: counter] [Function: counter]

// function call site
const count1 = counter(); 
const count2 = counter(); 
const count3 = counter();

console.log(count1, count2, count3); // 1 2 3

// example 2 of clousere

function outerFunction(){
    let count = 0; // this variable is private to the outerFunction
    function innerFunction(){ // this is a closure, it has access to the count variable of the outerFunction
        count++;
        return count;
    }
    return innerFunction; // returning the innerFunction, which is a closure
}

const counterA = outerFunction(); // counterA is a reference to the innerFunction, which is a closure
const counterB = outerFunction(); // counterB is a reference to the innerFunction, which is a closure

console.log(counterA(), counterB()); // 1 1

let aValue = 10;
function fun_name(){
    console.log(aValue);
}

fun_name(); // 10

// close Example 3

    function outerFun(){
        let b = 9;
        function innerFun(){
            let c = 10;
            return a+b+c;
        }
        a = 100;
        console.log(innerFun)
        return innerFun;
    }

    const innerFunRef = outerFun(); // innerFunRef is a reference to the innerFun, which is a closure
    console.log(innerFunRef()); // 100 + 9 + 10 = 119

    console.log(outerFun()); 


//-----------------Arrays-------------------------

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
doubleNumbers = []

for(let i=0; i<numbers.length; i++){
    doubleNumbers.push(numbers[i] + numbers[i]);
}

console.log("Using for loop",doubleNumbers); // [2, 4, 6, 8, 10]
//or we can use map method to achieve the same result

const doubleNumbersMap = numbers.map((num) => num + num);
console.log("Using Map function",doubleNumbersMap); // [2, 4, 6, 8, 10]

//Example 2

const arr = [1, 2, 3, 4, 5];

const evenNumbers = arr.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


const indexof4 = arr.findIndex((num) => num === 4);
console.log(indexof4); // 3

// arr.without(2); // [1, 3, 4, 5]
// arr.without(1,3); // [2, 4, 5]
// arr.shift(); // [2, 3, 4, 5]
// arr.shift(); // [3, 4, 5]
// arr.unshift(1); // [1, 3, 4, 5]
// arr.unshift(0); // [0, 1, 3, 4, 5]    
// arr.pop(); // [0, 1, 3, 4]

// arr.push(6); // [0, 1, 3, 4, 6]

// arr.toLocaleString(); // "0,1,3,4,6"
// arr.join("-"); // "0-1-3-4-6"
// arr.reverse(); // [6, 4, 3, 1, 0]
// arr.sort(); // [0, 1, 3, 4, 6]
// arr.slice(1,4); // [1, 3, 4]    

const arr1 = [0,2,4,5,6,7,8,9];
function shift(arr1,times){
    return arr1.slice(times,arr1.length).concat(arr1.slice(0,times))
}

console.log(shift(arr1,3))


// -------------------This keyword-------------------------

// thr context the function is called, not where it is defined

// 1. global context - default binding
function foo(){
    // context -> this -> global object 
    console.log(this);
}

foo(); // global object (window in browser, global in nodejs)

// 2. object context - implicit binding

const obj = {
    name: "Mohankumar",
    foo: function(){
        // context -> this -> obj
        console.log(this);
    }
}
obj.foo(); // obj

const fooCopy = obj.foo; // fooCopy is a reference to the foo function
fooCopy(); // global object (window in browser, global in nodejs)

// 3. explicit binding

function fooExplicit(){
    // context -> this -> global object
    console.log(this);
}
fooExplicit.call(obj); // obj
fooExplicit.apply(obj); // obj
const boundFoo = fooExplicit.bind(obj); 

boundFoo(); // obj

// -------------------event loop and asynchronous programming-------------------------

console.log("Start");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);
console.log("End");