// Node.js program to demonstrate the
// dns.resolve4() method

// Accessing dns module
const dns = require('dns');

// Calling dns.resolve4() method for hostname
// geeksforgeeks.org and display them in
// console as a callback
// dns.resolve4('geeksforgeeks.org', (err,
//     address) => console.log('address: %j', address));

dns.resolve4('geeksforgeeks.org', true, (err,
    address) => console.log('address: %j', address));


// Setting options value for dns.resolve4() method
const options = {
    ttl: true
}
// Calling dns.resolve4() method for hostname
// geeksforgeeks.org and displaying them
// in console as a callback
dns.resolve4('www.daraz.com', options, (err, address) => {
    err ? console.log(err) : console.log('address: %j', address);
})