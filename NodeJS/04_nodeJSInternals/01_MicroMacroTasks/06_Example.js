const main = () => {

    setTimeout(() => {  //T1
        console.log("Main Timer") 
    }, 0)


    Promise.resolve().then(() => { //PC1
        console.log("Promise Callback");

        Promise.resolve().then(() => { //IP1
            console.log("Resolved inner promise");
        });

    });

    console.log("Main script");
}


main();

/* - console

Main script
Promise Callback
Resolved inner promise
Main Timer

*/