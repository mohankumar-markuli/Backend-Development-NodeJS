let name = "Mohankumar";
console.log("Namaste " + name);

console.log(global);   // global is a global object in node js

console.log("-----------------------------------------------")
console.log(this); // empty object in node js

console.log("-----------------------------------------------")
console.log(globalThis); // globalThis is a global object in node js

console.log("-----------------------------------------------")

console.log(globalThis == global); // true
console.log(globalThis == this); // false
