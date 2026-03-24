const fs = require("fs");
const https = require("https");
const crypto = require("node:crypto");

console.log("Hello JS");

const a = 10244;
const b = 20445;

// pbkdf2 - Password Based Key Derivative Function 

//code blocking / blocking main thread 
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key generated");

//Asunc function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second key generated");
});

// Async function
https.get("https://dummy-json.mock.beeceptor.com/companies", (res) => {
    console.log("Fetched Data Successfully");
});

// Async function
// the callback are pushed to stack only when call stack main thread is empty
setTimeout(() => {
    console.log("setTimeOut called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./03_nodeIntro/file.txt", "utf8", (err, data) => {
    console.log("File Data :", data);
});

const multiplication = (a, b) => {
    const result = a * b;
    return result;
}

const result = multiplication(a, b);
console.log("Multiplication result :", result);