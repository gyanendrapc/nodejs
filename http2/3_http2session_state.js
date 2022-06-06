//How to generate the private key and public certificate?


// Nodejs program to demonstrate  the htt2session.state method

const http2 = require('http2');
const fs = require('fs');
const { Stream } = require('stream');


// Private key and public certificate for access

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
}

// Creating and intializing server by using http2.createServer() mehtod

const server = http2.createServer(options);

server.on('stream', (stream, requestHeaders) => {
    stream.respond({
        'status': 200,
        'content-type': 'text/plain'
    });
    stream.write('hello');

    const http2session = stream.session;

    // Getting state associated with this session by using state method

    const status = http2session.state;
    stream.end("local window size : " + status.localWindowSize);


    // Stopping the server by using the close() method
    server.close(() => {
        console.log("Server localSettings");
    })
});
server.listen(8000);

// Creating and initializing client by using tls.connect() method

const client = http2.connect('http://localhost:8000');

const req = client.request({
    "method": "GET",
    "path": "/"
});


req.on('response', (responseHeader) => {
    console.log("Status : " + responseHeader['status']);
});
req.on('data', (data) => {
    console.log('Received: %s ',
        data.toString().replace(/(\n)/gm, ""));
});
req.on('end', () => {
    client.close(() => {
        console.log("client localSettings");
    })
});