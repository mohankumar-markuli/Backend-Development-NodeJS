// import the path module and the fs module
const path = require('path');
const fs = require("fs");

// import the add_numbers function from the add-numbers.js file
const addNumbers = require('./add-numbers');

addNumbers(5, 10);
console.log(path.extname("index.html"));

const filePath = path.join("data","example.txt");
console.log(filePath);
// read the contents of the file using fs.readFile
fs.readFile(filePath, "utf-8", (err,data) =>{
  if (err) {
    console.error("Error reading file:", err);
  }
  console.log(data);
})


// write to a file using fs.writeFile

const newFilePath = path.join("data","newfile.txt");
const content = "This is some new content for the file.";

// write the content to the new file
fs.writeFile(newFilePath, content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  }
  console.log("File written successfully.");
})

// read the contents of the new file to verify it was written correctly
fs.readFile(newFilePath, "utf-8", (err,data) =>{
  if (err) {
    console.error("Error reading file:", err);
  }
  console.log(data);
})