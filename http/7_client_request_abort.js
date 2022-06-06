
// Node.js program to demonstrate the 
// request.abort() APi

// Importing http module
const http = require('http');

// Creating http server 
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.sendDate('okay');
});

// Now that server is running
server.listen(7000, '127.0.0.1', () => {
    console.log("Server is started");

    // Making a request
    const options = {
        port: 3000,
        host: '127.0.0.1',
        headers: {
            'Connection': 'Upgrade',
            'Upgrade': 'websocket'
        }
    };
    // Getting client request
    const req = http.request(options);

    // Aborting the request
    // by using abort() method
    req.abort();

    // Emit the message
    req.on('abort', () => {
        console.log("Client request is aborted...");
        process.exit(0);
    })
})