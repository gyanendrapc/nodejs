// importing http
const http = require('http');
// importing agentkeepalive module
const Agent = require('agentkeepalive');
// Creating new agent
const keepAliveAgent = new Agent({});

// Creating object
const options = {
    host: 'geeksforgeeks.org',
    port: 80,
    path: '/',
    method: 'GET',
    agent: keepAliveAgent,
};

// Requesting via http server module
const req = http.request(options, (res) => {
    // Console.log(require('util).inspect(res, depth=0));
    // Printing statuscode
    console.log("Status code: ", res.statusCode);
    // Printing headers
    console.log("Headers : ", res.headers);
});

// Prining agent options
console.log("Agent Options: ", req.agent.options);
// console.log(req.agent.socket);
req.end();
