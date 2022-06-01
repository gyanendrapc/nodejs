// Node.js program to demonstrate the   
// dns.resolveAny() method
// Accessing dns module
const dns = require('dns');

// for facebook
dns.resolveAny('faceook.com', (err, ret) => {
    err ? console.log(err) : console.log(ret);
})

// for localhost
dns.resolveAny('localhost', (err, ret) => {
    err ? console.log(err) : console.log(ret);
})