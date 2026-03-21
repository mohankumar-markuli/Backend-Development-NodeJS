// code with I don't own
const asyncFunction = (cb) => {
    setTimeout(() => {
        console.log("In-Between");
        cb();
    }, 1000)
}


const postProcessing = () => {
    console.log("End");
}

// code which I own
const main = () => {
    console.log("Start the process");
    asyncFunction(postProcessing);
}

main();