// Example- 1

console.log("start");
console.log("In-Between");
console.log("end");

/* Output
start
In-Between
End
*/

// Example -2 

console.log("Start");
setTimeout(() => {
    console.log("In-Between");
},0);
console.log("End");

/* Output
start
End
In-Between
*/

// code anything related to I/O then its treated as a async execution

// Example 3


function main() {
    console.log("Start");

    setTimeout(() => {
        console.log("In-Between");
    }, 1000);

    console.log("End");
    for (let i = 0; i < 1000000000; i++) {
        Math.sqrt(i)
    }
    console.log("finished loop");
}

main()

/* Output
start
End
finished loop
In-Between 
*/