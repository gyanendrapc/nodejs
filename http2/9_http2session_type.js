// Node.js program to demonstrate the
// http2session.type method

const http2 = require('http2');
const fs = require('fs');

// Private key and public certificate
// for access
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
};

// Creating and initializing server
// by using http2.createServer() method
const server = http2.createServer(options);

server.on('stream', (stream, requestHeaders) => {
    stream.respond({
        ':status': 200,
        'content-type': 'text/plain'
    });
    stream.write('hello ');

    const http2session = stream.session;

    // Getting type of the particular session
    // by using type method
    const status = http2session.type;
    console.log("and here is the type of the http2 session : ", status);
    if (status)
        stream.end("This session is of "
            + "NGHTTP2_SESSION_CLIENT type");
    else
        stream.end("This session is of "
            + "NGHTTP2_SESSION_SERVER type");

    // Stopping the server by
    // using the close() method
    server.close(() => {
        console.log("server localSettings");
    })
});

server.listen(8000);

// Creating and initializing client
// by using tls.connect() method
const client = http2.connect(
    'http://localhost:8000');

const req = client.request({
    ':method': 'GET',
    ':path': '/'
});

req.on('response', (responseHeaders) => {
    console.log("status : "
        + responseHeaders[":status"]);
});

req.on('data', (data) => {
    console.log('Received: %s ',
        data.toString().replace(/(\n)/gm, ""));
});
const http2session = req.session;

// Getting type aof the particular session
// by using type method
const status = http2session.type;

if (status)
    console.log("This session is of "
        + "NGHTTP2_SESSION_CLIENT type");
else
    console.log("This session is of "
        + "NGHTTP2_SESSION_SERVER type");

req.on('end', () => {
    client.close(() => {
        console.log("client localSettings");
    })
});
