const fs = require('fs');
// Create a writable stream to a file
const writableStream = fs.createWriteStream('../output/writeResponse.txt');

const readableStream = fs.createReadStream('../input/leviathan.txt', { encoding: 'utf8', highWaterMark: 256 });

// Handle data event
// readableStream.on('data', (chunk) => {
//     // Character count
//     console.log('$$Received chunk$$:', chunk);
// });


// Write data to the stream
for (let i = 0; i < 1000000; i++) {
    writableStream.write('Hello, World!\n');
}

writableStream.write('This is a writable stream example.\n');
// End the stream
writableStream.end(() => {
    console.log('Finished writing to file.');
});
// Handle error event
writableStream.on('error', (err) => {
    console.error('Error writing to file:', err);
});