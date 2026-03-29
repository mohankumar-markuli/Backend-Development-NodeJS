/*
Macro Task Queue (6 Queues/Phases)

    1. Timer Phase: setTimeout and setInterval is handled (Devs have control)
    2. Pending Callback Phase: TCP Errors, DNS Errors, Low level System errors (Internal)
    3. Idle Phase: For housekeeping, maintainig the event loop phases (Internal to NodeJs)
    4. Poll Phase: Handles I/O callbacks, callbacks like FS call, DB call, Socket Call (Devs use it)
    5. Check Phase: setImmediate calls (devs use it)
    6. Close Phase: Cleanup phase, close DB connection, unlinking a file, closing socket connection (Devs use it)

*/


const fs = require('fs');
const stream = fs.createReadStream('temp.txt');

const main = async () => {

    stream.on('close', () => {     // Phase 6              
        console.log('Log from close callback (Phase 6)');
    });

    setTimeout(() => {            // Phase 1               
        console.log('Log from timer (Phase 1)');
    }, 0);

    stream.destroy(); // Triggers the close
}

main();

/*
Console
-------------------------------------
Log from timer (Phase 1)
Log from close callback (Phase 6)
*/