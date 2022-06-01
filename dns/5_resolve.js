
// Node.js program to demonstrate the
// dns.resolve() method

// Accessing dns module
const dns = require('dns');

// setting the rrtype for dns.resolve() method

var rrtype = "A";
// Calling dns.resolve() method for hostname
// geeksforgeeks.org and print them in
// console as a callback

dns.resolve('www.gyanendrachaudhary.com.np', rrtype, (err, record) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log("Records : %j", record);
    }
})

// Set the rrtype for dns.resolve() method
var rrtype = "MX";

// Calling dns.resolve() method for hostname
// geeksforgeeks.org and print them in
// console as a callback
dns.resolve('geeksforgeeks.org', rrtype, (err, records) => console.log('records: %j', records));
// Node.js program to demonstrate the
// dns.resolve() method


// Set the rrtype for dns.resolve() method
var rrtype = "TXT";

// Calling dns.resolve() method for hostname
// geeksforgeeks.org and print them in
// console as a callback
dns.resolve('geeksforgeeks.org', rrtype, (err,
    records) => console.log('records: %j', records));

console.log("=====================================================");
var rrtype = "NS";
dns.resolve('www.geeksforgeeks.org', rrtype, (err, rec) => console.log(rec))
