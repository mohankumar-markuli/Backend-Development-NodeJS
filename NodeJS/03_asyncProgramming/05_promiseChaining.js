// AF1 returning promise
const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1 working");
            resolve("Asyn Function 1 resolved");
            // reject("Async Function 1 rejected");
        }, 4000);
    });
}

// AF2 returning promise
const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 2 working");
            // resolve("Asyn Function 2 resolved");
            reject("Async Function 2 rejected");
        }, 2000);
    });
}

// AF3 returning promise
const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 3 working");
            resolve("Asyn Function 3 resolved");
            // reject("Async Function 3 rejected");
        }, 1000);
    });
}

const main = () => {
    console.log("Step 1: Start the process");
    asyncFunction1()
        .then(asyncFunction2)
        .then(asyncFunction3)
        .catch((err) => { console.log("I got some error", err) });
    console.log("Step 2: ")
}

main();