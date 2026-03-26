// a= 100
// Last Line of the file
// process.nextTick
// Timer expired
// setImmidiate
// File reading CB
// My name is Mohankumar, I am practicing node JS

const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmidiate")); //06

Promise.resolve("Promise").then(console.log); //04

fs.readFile("./03_nodeIntro/file.txt", "utf-8", (err,data) => {
    console.log("File reading Completed"); //07
    console.log(data); //08
});

setTimeout(() => console.log("Timer expired"), 0); //05

process.nextTick(() => console.log("process.nextTick")); //03

function printA(){
    console.log("a=",a);
}

printA(); // 01
console.log("Last Line of the file"); // 02