const main = () => {

    function wrappedPromise() {
        return new Promise((resolve) => {
            console.log("Inside Promise executor"); // main thread
            resolve("done"); // P1
        });
    }

    wrappedPromise().then((val) => {
        console.log("Promise then:", val)
    });


    console.log("End of script"); // main thread
}

main();


/* 
Inside Promise executor
    (any thing inside promise except reloved or rejected belongs to main thread)
End of script
Promise then: Done
*/
