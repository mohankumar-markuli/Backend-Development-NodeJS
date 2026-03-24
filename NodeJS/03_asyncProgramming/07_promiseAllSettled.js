// AF1 returning promise
const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1");
            resolve("Asyn Function 1 resolved");
            // reject("Async Function 1 rejected");
        }, 1000);
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
        }, 3000);
    });
}

const main = () => {
    console.log("Step 1: Start the process");

    // if one promise fails then it throws an error
    const promiseResponse = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

    console.log(promiseResponse); // pending 
    // promiseResponse returns a another promise
    // it says I will do these tasks in the future

    promiseResponse
        .then((resolvedResponse) => {
            console.log(resolvedResponse)
        }).catch((err) => {
            console.log(err)
        });

}

main()