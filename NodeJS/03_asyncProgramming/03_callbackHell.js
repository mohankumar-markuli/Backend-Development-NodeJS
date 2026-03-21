// AF1: Saving and order to DB
const asyncFunction1 = (cb) => {
    setTimeout(() => {
        console.log("AF1");
        cb();
    }, 2000)
}

// AF2: Sending email
const asyncFunction2 = (cb) => {
    setTimeout(() => {
        console.log("AF2");
        cb();
    }, 2000)
}

// AF2: Sending SMS
const asyncFunction3 = (cb) => {
    setTimeout(() => {
        console.log("Af3");
        cb();
    }, 2000)
}

// code which I own

const main = () => {
    console.log("Start the process");
    asyncFunction1(() => {
        console.log("Saving Order Completed");
        asyncFunction2(() => {
            console.log("Sending Email Completed");
            asyncFunction3( () =>{
                console.log("Sending SMS Completed");
                console.log("All Done")
            });
        });
    });
}

main();