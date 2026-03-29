const main = () => {

    function wrappedPromise() {
        return new Promise((resolve) => {   //P1
            console.log("Inside Promise executor");

            process.nextTick(() => {    //NT1
                console.log("process.nextTick inside Promise");
            });

            setTimeout(() => {  //T1
                console.log("setTimeout inside Promise");
            }, 0);

            Promise.resolve().then(() => {  //P2
                console.log("Promise.then inside Promise");
            });

            resolve("done");
        });
    }

    wrappedPromise().then((val) => console.log("Promise then:", val));

    console.log("End of script");
}

main();


/* 
    Inside Promise executor
    End of script
    process.nextTick inside Promise
    Promise.then inside Promise
    Promise then:
    setTimeout inside Promise

*/
