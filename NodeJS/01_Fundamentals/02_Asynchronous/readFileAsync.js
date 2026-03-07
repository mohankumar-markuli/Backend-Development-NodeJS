const fs = require('fs');

const filePath = "../lengthyFile.txt";

console.log(`${Date.now()} File Reading Started`);

// 
const data = fs.readFile(filePath,'utf-8', (err,data)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(`${Date.now()} Read file Aysnchronously`);
    console.log(data) 
});

console.log(data)   // undefined
console.log(`${Date.now()} File Reading Completed`);

for (let i=0;i<10;i++){
    console.log(i);
}