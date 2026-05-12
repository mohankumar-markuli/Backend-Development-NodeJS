const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 128 * 1024 }); // 64 KB
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', { highWaterMark: 1 * 1024 }); // 16 KB

readableStream.on('data', (chunk) => {
  console.log(`Read ${chunk.length} bytes`);

  const canWrite = writableStream.write(chunk)
  //   console.log(canWrite);  
  if (!canWrite) {
    console.log('Writable stream is full, pausing readable stream');
    readableStream.pause();
  }
});

writableStream.on('drain', () => {
  console.log('Writable stream drained, resuming readable stream');
  readableStream.resume();
});

readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});


