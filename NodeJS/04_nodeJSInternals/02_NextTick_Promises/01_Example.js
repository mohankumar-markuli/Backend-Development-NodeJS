const main = () => {
    setTimeout(() => {  //T1
        console.log("Main Timer")
    }, 0)


    Promise.resolve().then(() => {  //P1
        console.log("Promise Callback");
    })

    console.log("Main script");

    process.nextTick(() => console.log('process.nextTick'));

}


main();


/* - console

Main script
process.nextTick
Promise Callback
Main Timer

*/