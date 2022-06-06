// Below examples illustrate the use of agent.createConnection(options[, callback]) method in Node.js.

// Nodejs program to demonstrate the agent.createConnection() method
// Importing the http module
var http = require('http');

// creating new agent
var agent = new http.Agent({});

// Creating new connection
var createConnection = agent.createConnection;
console.log("Connection Successfully created...");


// Printing the connection
console.log("Connection : ", createConnection);


//example 2
// creati new agent 
const aliveAgent = new http.Agent({
    keepAlive: true,
    maxSockets: 0,
    maxSockets: 5,
});

// creating new agent
var agent = new http.Agent({});
// Creating new connection
var createConnection = aliveAgent.createConnection;
console.log('Connection successfully created...');
// Printing the connection
console.log(createConnection);
console.log('Connection successfully created...');

// Printing the connection
console.log('Connection: ', createConnection);