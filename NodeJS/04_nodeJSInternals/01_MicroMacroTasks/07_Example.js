const main = () => {

    setTimeout(() => { // T1
        console.log("Main Timer");
        Promise.resolve().then(() => { // IP
            console.log("Resolved inner promise");
        });
    }, 0)


    Promise.resolve().then(() => { // PC
        console.log("Promise Callback");
        setTimeout(() => { // T2
            console.log("Inner Timer");
        }, 0)

    })

    console.log("Main script");
}


main();

/* - console

Main script
Promise Callback
Main Timer
Resolved inner promise
Inner Timer

*/