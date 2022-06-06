
// Node.js program to demonstrate the 
// request.protocol method

// Importing http module
const http = require('http');


// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Okay');
});


// Now that server is running
server.listen(7000, '127.0.0.1', () => {
    // // Make a request
    // const options = {
    //     port: 7000,
    //     host: '127.0.0.1',
    //     headers: {
    //         'Connection': 'Upgrade',
    //         'Upgrade': 'websocket'
    //     }
    // };
    // // Getting client request
    // const req = http.request(options);

    // req.protocol = 'HTTP'

    // // Getting protocol
    // // by using protocol method
    // const v = req.protocol;
    // // Display the result
    // console.log("protocol :- " + v)

    // process.exit(0)
    // Getting client request
    const req = http.request({
        port: 3000,
        host: '127.0.0.1',
    });

    // Getting protocol
    // by using protocol method
    console.log("protocol :- " + req.protocol)

    process.exit(0)
})