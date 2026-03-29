const main = () => {
    setTimeout(() => { // T1
        console.log("Main Timer")
    }, 0)

    // NT1
    process.nextTick(() => console.log('process.nextTick 1'));

    // P1
    Promise.resolve().then(() => {
        console.log("Promise Callback 1");

    })

    // NT2
    process.nextTick(() => console.log('process.nextTick 2'));

    // P2
    Promise.resolve().then(() => {
        console.log("Promise Callback 2");

    })

    console.log("Main script");

}


main();


/* - console

Main script
process.nextTick 1
process.nextTick 2
Promise Callback 1
Promise Callback 2
Main Timer

*/