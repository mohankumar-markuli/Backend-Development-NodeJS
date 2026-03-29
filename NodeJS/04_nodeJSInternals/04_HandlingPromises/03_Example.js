const main = () => {

    function wrappedPromise() {
        return new Promise((resolve) => {   //P1
            console.log("Inside Promise executor");

            process.nextTick(() => { //NT1
                console.log("process.nextTick inside Promise");
            });

            setTimeout(() => {  //T1
                console.log("setTimeout inside Promise");
            }, 0);

            // P2 executes once P1 resolved - main thread continues
            Promise.resolve().then(() => {  //P2
                console.log("Promise.then inside Promise"); // main thread
                Promise.resolve().then(() => {  //P3 when P2 resolved
                    console.log("Nested Promise.then");
                });

            });

            resolve("done");
        });
    }

    wrappedPromise().then((val) => console.log("Promise then:", val));  // main thread

    console.log("End of script");   // main thread
}

main();


/* 
    Inside Promise executor
    End of script
    process.nextTick inside Promise
    Promise.then inside Promise
    Promise then: done
    Nested Promise.then
    setTimeout inside Promise

*/
