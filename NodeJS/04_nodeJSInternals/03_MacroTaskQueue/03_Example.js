const main = () => {

    function testFunction() {
        setImmediate(() => {              
            console.log("Log from setImmediate");
        })

        setTimeout(() => {                        
            console.log('Log from timer');
        }, 1);
    }

    testFunction();
}
main();


/* 

Log from setImmediate
Log from timer - (timer is completed in 1ms)

*/