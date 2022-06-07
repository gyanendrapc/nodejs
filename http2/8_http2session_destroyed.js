// Node.js program to demonstrate the
// http2session.destroyed method

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
    stream.respond({
        'status': 200,
        'content-type': 'text/plain'
    });

    stream.write('hello ');

    const http2session = stream.session;

    stream.end("session protocol : "
        + http2session.alpnProtocol);

    // Callback for close event
    http2session.on('close', () => {

        const status = http2session.destroyed;
        console.log(status);

        if (status)
            console.log("session is destroyed");
        else
            console.log("session is not destroyed");
    })

    // Stopping the server
    // by using the close() method
    server.close(() => {
        console.log("server destroyed");
        http2session.destroy();
    })
});

server.listen(8000);

// Creating and initializing client
// by using tls.connect() method
const client = http2.connect(
    'http://localhost:8000');

const req = client.request(
    { 'method': 'GET', 'path': '/' });

req.on('response', (responseHeaders) => {
    console.log("status : "
        + responseHeaders["status"]);
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
