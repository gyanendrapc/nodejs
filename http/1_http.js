var http = require('http');


// // create server
// http.createServer((req, res) => {

//     // Send a chunk  of the response body
//     res.write('Hello World');

//     // Signals the server that all of the response headers and body
//     // have been sent.
//     res.end();

// }).listen(3000, (err) => { console.log("Server running on port 3000") });



// Example 2:

var options = {
    host: 'www.geeksforgeeks.org',
    path: '/courses',
    method: 'GET'
}

// Making a get request to www.geeksforgeeks.org
http.request(options, (res) => {

    // Printing the statusCode
    console.log(`STATUS: ${res.statusCode}`);
})