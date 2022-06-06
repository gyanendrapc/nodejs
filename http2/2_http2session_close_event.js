// Node.js program to demonstrate the
// close event method

const http2 = require('http2');
const fs = require('fs');

// Private key and public certificate for access
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
};

// Creating and initializing server
// by using http2.createServer() method
const server = http2.createServer(options);

server.on('stream', (stream, requestHeaders) => {

    // Getting session object
    // by using session method
    const http2session = stream.session;

    // Getting alpnProtocol of this session
    // by using alpnProtocol method
    const alpnProtocol = http2session.alpnProtocol;

    stream.end("session protocol : " + alpnProtocol);

    http2session.close();

    // Handling 'close' event
    http2session.on('close', () => {
        console.log("session is closed");
    })

    // Stopping the server
    // by using the close() method
    server.close(() => {
        console.log("server destroyed");
    })
});

server.listen(8000, () => {
    console.log("Server running on port 8000");
});

// Creating and initializing client
// by using tls.connect() method
const client = http2.connect(
    'http://localhost:8000');

const req = client.request({
    ':method': 'GET', ':path': '/'
});

req.on('data', (data) => {
    console.log('Received: %s ',
        data.toString().replace(/(\n)/gm, ""));
});

req.on('end', () => {
    client.close(() => {
        console.log("client destroyed");
    })
});
