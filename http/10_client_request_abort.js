
// Node.js program to demonstrate the  
// request.aborted APi

// Importing http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
});
// Now that server is running
server.listen(3000, '127.0.0.1', () => {

    // console.log("Server is Started")
    // // Make a request
    // const options = {
    //     port: 3000,
    //     host: '127.0.0.1',
    //     headers: {
    //         'Connection': 'Upgrade',
    //         'Upgrade': 'websocket'
    //     }
    // };

    // // Getting client request
    // const req = http.request(options);

    // // Aborting the request
    // // by using abort() api
    // req.abort()

    // // checking if the client request
    // // has been aborted or not
    // // by using aborted api
    // if (req.aborted)
    //     console.log("client request has been aborted")
    // else
    //     console.log("client request has not been aborted")

    // Getting client request
    const req = http.request({
        port: 3000,
        host: '127.0.0.1',
    });

    // Checking if the client request
    // has been aborted or not
    // by using aborted api
    // req.abort()
    if (req.aborted)
        console.log("client request has been aborted")
    else
        console.log("client request has not been aborted")

    process.exit(0)
});