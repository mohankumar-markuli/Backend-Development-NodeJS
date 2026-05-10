
function fast() {
  for (let i = 0; i < 1e6; i++) { }
}

function medium() {
  for (let i = 0; i < 1e7; i++) { }
}

function slow() {
  for (let i = 0; i < 1e8; i++) { }
}

function compositeTask() {
  fast();
  medium();
  nestedSlow();
}

function nestedSlow() {
  for (let j = 0; j < 5; j++) {
    slow(); // nested in a loop
  }
}

console.log("Starting profile...");
compositeTask();
console.log("Profile complete.");