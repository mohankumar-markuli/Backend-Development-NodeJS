const main = () => {

    setTimeout(() => { // T1
        console.log("Main Timer")
    }, 0)

    // Promises are handled via mIcroQueue
    // microQueue has a precedence over macroQueue

    Promise.resolve().then(() => { // P1
        console.log("Promise Callback");
    })

    console.log("Main script");
}


main();

/* - console

Main script
Promise Callback
    (promise is micro task has a precedence over macroQueue)
Main timer
    (timer is a macroQueue)
*/