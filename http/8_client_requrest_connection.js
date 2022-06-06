
// Node.js program to demonstrate the 
// request.connection method

// Importing http module
const http = require('http');


// Creating an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Okay');
});

server.listen(7000, '127.0.0.1', (err) => {
    // Make a request
    const options = {
        port: 7000,
        host: '127.0.0.1',
        headers: {
            'Connection': 'Upgrade',
            'Upgrade': 'websocket',
        }
    }
    // Getting client request
    const req = http.request(options);
    // Getting request socket
    // by using connection method
    const v = req.connection;
    // Display the result
    console.log("request socket :- " + v)
    // Getting request socket
    // by using connection method
    if (req.connection) {
        console.log("Requested for Connection")
    } else {
        console.log("Not Requested for Connection")
    }
    process.exit(0);
})