
// Node.js program to demonstrate the
// dns.resolve6() method
const dns = require('dns');

// Calling dns.resolve6() method for hostname
// geeksforgeeks.org and displaying them in
// console as a callback
dns.resolve6('facebook.com', (err,
    address) => console.log('address: %j', address));


// with options parameter for ttl

const options = {
    ttl: true
}
dns.resolve6('facebook.com', options, (err, addr) => {
    err ? console.log(err) : console.log(addr);
})
