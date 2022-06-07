// Node.js program to demonstrate the
// timeout event
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
    // by using session api
    const http2session = stream.session;

    // Halting session for 3 secs
    // by using setTimeout API
    http2session.setTimeout(3000)

    // Emitting timeout event
    http2session.on('timeout', () => {
        console.log("Surprise !!!");
    })

    // Stopping the server by
    // using the close() method
    server.close(() => {
        console.log("server destroyed");
    })
});
server.listen(8000);

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
