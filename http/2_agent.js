
// Node.js program to demonstrate the
// new agent({}) method

// Importing http module
var http = require('http');
var agent = new http.Agent({});


// Creating new agent
const aliveAgent = new http.Agent({
    keepAlive: true,
    maxSockets: 0,
    maxTotalSockets: 5,
});

// Creating new agent
var agent = new http.Agent({});

// Creating new connection
var createConnection = aliveAgent.createConnection;

// Creating new connection
var createConnection = agent.createConnection;
console.log("Connection created successfully!");

// Printing the connection
console.log(createConnection);
console.log("Connection successfully created....");

// printing the connection
console.log("Connection: ", createConnection);

