const fs = require('fs');

const main = () => {

    fs.writeFile('temp.txt', 'Hello', (err) => {   //WF
        if (err) throw err;
        console.log("Read the file");

        setImmediate(() => {    // SI
            console.log("Log from setImmediate");
        })

        setTimeout(() => {     // T1
            console.log('Log from timer');
        }, 0);

    });
}
main();


/* 
Read the file
Log from setImmediate
Log from timer

*/