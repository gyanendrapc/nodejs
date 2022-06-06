// The below examples illustrate the use of agent.maxFreeSockets method in Node.js.
// Nodejs program to demonstrate the agent.maxFreeSockets method


// Importing http module
var http = require('http');


// Importing agentKeepAlive module
var Agent = require('agentkeepalive');

// Creating new agent
var keepAliveAgent = new Agent({});
console.log(keepAliveAgent.maxFreeSockets);;

// Options object 
const options = {
    host: 'geeksforgeeks.org',
    port: 80,
    path: '/',
    method: 'GET',
    agent: keepAliveAgent,
};


// Requesting via http server module 
const req = http.request(options, (res) => {
    // Printing statuscode 
    console.log("StatusCode: ", res.statusCode);
});

req.end();