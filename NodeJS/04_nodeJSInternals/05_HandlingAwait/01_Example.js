const internalCall = async () => {
    console.log("Internal log"); // main thread

    setTimeout(() => { 
        console.log('Log from inner timer'); //T2
    }, 0);

}

const main = async () => {

    setTimeout(() => { 
        console.log('Log from timer 1'); //T1
    }, 0);

    Promise.resolve().then(() => { 
        console.log("Hello there"); //P1
    })

    await internalCall();
    // wait only till promise get resolved
    // Anything below await would be treated as promise (P2)

    console.log("This is the end");  // main thread

    setTimeout(() => {
        console.log('Log from timer 2'); // T3
    }, 0);

    process.nextTick(() => {
        console.log("NT"); // NT1
    })
}

main();

/*
Console
-------------------------------------
Internal log
Hello there
(wait from promises to get reolve)
this is the end
NT1
Log from timer 1
Log from inner timer
Log from timer 2
*/