// AF returning promise
const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1 working");
            resolve("Asyn Function rejected");
            // reject("Async Function 1 rejected");
        }, 2000);
    });
}

const main = () => {
    console.log("Step 1: Start the process");
    const asyncResponse = asyncFunction1();
    asyncResponse
        .then(() => {console.log("I got response from promise")})
        .catch((err) => {console.log("I got some error", err)});
    console.log(asyncResponse);
    console.log("Step 2: ")
}

main();