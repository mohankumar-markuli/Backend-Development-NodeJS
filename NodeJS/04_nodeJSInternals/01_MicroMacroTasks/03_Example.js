const main = () => {

    setTimeout(() => { //T1
        console.log("Main Timer")
    }, 1000)


    setTimeout(() => { //T2
        console.log("Main Timer 2")
    }, 0)


    setTimeout(() => { //T3
        console.log("Main Timer 3")
    }, 0)

    Promise.resolve().then(() => { // P1
        console.log("Promise Callback");
    })
}

main();

/* - console

Promise Callback
    (promise is micro task has highest priority)
Main timer 2
main timer 3
Main timer
    (main timer takes 1000ms to completed)

*/