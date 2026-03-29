const main = () => {

    Promise.resolve().then(() => { // P1
        console.log("Promise Callback");
    })

    console.log("Main script");

}

main();

/* - console

Main script
    (timer waits for main thread to finish its task)
Promise Callback

*/