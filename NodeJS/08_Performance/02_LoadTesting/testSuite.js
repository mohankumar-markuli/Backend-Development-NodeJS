const autocannon = require('autocannon');

const instance = autocannon({
    url: 'http://localhost:3000/api/v1/health',
    connections: 6000,
    pipelining: 10,
    duration: 10
}, console.log);

// Track progress
autocannon.track(instance, { renderProgressBar: true });