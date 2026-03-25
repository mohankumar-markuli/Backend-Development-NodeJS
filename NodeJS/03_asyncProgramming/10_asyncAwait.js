// AF1 returning promise
const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1");
            resolve("Asyn Function 1 resolved");
            // reject("Async Function 1 rejected");
        }, 3000);
    });
}

// AF2 returning promise
const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 2");
            resolve("Asyn Function 2 resolved");
            // reject("Async Function 2 rejected");
        }, 2000);
    });
}

// AF3 returning promise
const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 3");
            resolve("Asyn Function 3 resolved");
            // reject("Async Function 3 rejected");
        }, 1000);
    });
}

// sync function
function sumofTwo(a,b){
    return a+b;
}

const main = async () =>{
    console.log("Started main function");

    const resp1 = await asyncFunction1();
    console.log(resp1);

    const sumTwo = await sumofTwo(2,10);
    console.log(sumTwo);

    const resp2 = await asyncFunction2();
    console.log(resp2);

    const resp3 = await asyncFunction3();
    console.log(resp3);
}

main();
