
const asyncFunction = (cb) => {
    setTimeout(() => {
        console.log("Async Function");
        cb();
        return {something:true};
    }, 2000)
}

// function returns undefiend and this will be resolved using promiss
// where thr function returns the promise

const postHandler = () =>{
    console.log("End of Process")
}

const main = () => {
    console.log("Start the process");
    console.log(asyncFunction(postHandler));
}

main();