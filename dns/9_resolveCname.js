// Node.js program to demonstrate the   
// dns.resolveAny() method

// Accessing dns module
const dns = require('dns');

// Calling dns.resolveCname() method for hostname
// geeksforgeeks.org and displaying them in
// console as a callback

dns.resolveCname('www.facebook.com', (err, address) => {
    err ? console.log(err) : console.log(address);
});
dns.resolveCname('localhost', (err,
    addresses) => console.log('addresses: %j', addresses));