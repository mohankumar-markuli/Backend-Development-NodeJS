const main = () => {

    setTimeout(() => { // T1
        console.log("T1")

        Promise.resolve().then(() => {  // P1
            console.log("P1");

            process.nextTick(() => console.log('NT 1')); //NT1

            setImmediate(() => console.log("Log from setImmediate")); //SI
        });

        process.nextTick(() => console.log('NT 2')); //NT2
    }, 0);

    setTimeout(() => { // T2
        console.log("T2")
        process.nextTick(() => console.log('NT 3')); //NT3
    }, 0);

    Promise.resolve().then(() => {  // P2
        console.log("P2");
        process.nextTick(() => console.log('NT 4'));
    });

    console.log("Main script");
}

main();


/* 
Main script
P2
NT4
T1
NT2
P1
NT1
T2
NT3
Log from setImmediate

*/