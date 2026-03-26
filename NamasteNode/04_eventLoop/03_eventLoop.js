const fs = require("fs");
const a = 100;

setImmediate(() => console.log("07 setImmidiate")); // 07

setTimeout(() => console.log("05 Timer expired above"), 0); //05

Promise.resolve("04 Promise").then(console.log); //04

fs.readFile("./03_nodeIntro/file.txt", "utf-8", (err, data) => {

    console.log("08 File reading Completed"); //08

    setTimeout(() => console.log("11 Timer expired inside file"), 0); //11
    // event loop starts from poll phase - 12

    process.nextTick(() => console.log("10 nextTick inside file")); //10

    setImmediate(() => console.log("12 setImmidiate")); //12

    console.log("09",data); //09
});

setTimeout(() => console.log("06 Timer expired below"), 0); //06

process.nextTick(() => {
    process.nextTick(() => console.log("03.2 Inner nextTick")); //03.2
    console.log("03.1 nextTick")}); //03.1

function printA() {
    console.log("01 a=", a);
}

printA(); // 01
console.log("02 Last Line of the file"); // 02