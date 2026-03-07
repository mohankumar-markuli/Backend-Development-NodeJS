const fs = require('fs');

const filePath = "../lengthyFile.txt";

console.log(`${Date.now()} File Reading Started`);
const data = fs.readFileSync(filePath,'utf-8');

// console.log(data)

console.log(`${Date.now()} File Reading Completed`);