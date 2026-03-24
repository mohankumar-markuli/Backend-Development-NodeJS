const fs = require("fs");
const https = require("https");

console.log("Hello JS");

const a = 10244;
const b = 20445;

https.get("https://dummy-json.mock.beeceptor.com/companies", (res) => {
    console.log("Fetched Data Successfully");
});

setTimeout(() => {
    console.log("setTimeOut called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data :", data);
});

const multiplication = (a, b) => {
    const result = a * b;
    return result;
}

const result = multiplication(a, b);
console.log("Multiplication result :",result);