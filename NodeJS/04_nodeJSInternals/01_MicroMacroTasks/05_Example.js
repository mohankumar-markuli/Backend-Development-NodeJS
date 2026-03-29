const main = () => {

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(`Main Timer ${i}`)
        }, 0)


        Promise.resolve().then(() => {
            console.log(`Promise Callback ${i}`);
        });
    }

    console.log("Main script");
}


main();

/* - console

Main script
Promise Callback 0
Promise Callback 1
Promise Callback 2
Promise Callback 3
Promise Callback 4
Promise Callback 5
Promise Callback 6
Promise Callback 7
Promise Callback 8
Promise Callback 9
Main Timer 0
Main Timer 1
Main Timer 2
Main Timer 3
Main Timer 4
Main Timer 5
Main Timer 6
Main Timer 7
Main Timer 8
Main Timer 9

*/