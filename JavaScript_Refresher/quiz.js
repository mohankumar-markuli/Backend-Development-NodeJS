function makeCounter() { 
    let count = 0; 

    return function() {count++; return count; } //clouser
} 

let counter1 = makeCounter(); 

console.log(counter1)
console.log(counter1()); 
console.log(counter1)
console.log(counter1());