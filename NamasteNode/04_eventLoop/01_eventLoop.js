const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmidiate"));

fs.readFile("./03_nodeIntro/file.txt", "utf-8", () => {
    console.log("File reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA(){
    console.log("a=",a);
}

printA();
console.log("Last Line of the file");

// a= 100
// Last Line of the file
// Timer expired
// setImmidiate
// File reading CB