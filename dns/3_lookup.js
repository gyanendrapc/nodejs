
// Node.js program to demonstrate the
// dns.lookup() method

// accessing dns
const dns = require('dns');

// setting options for dns.lookup() method
const options = {
    //Setting family as 6 i.e.IPv6
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
}

// Calling dns.lookup() for hostname geeksforgeeks.org
// and displaying them in console as a callback
dns.lookup('geeksforgeeks.org', options, (err, addr, fam) => {
    console.log("Address %j family IPv%s", addr, fam)
});

// Setting options for dns.lookup()
// method, all as true
const options1 = {
    all: true,
};

// Calling dns.lookup() for hostname
//  geeksforgeeks.org and displaying
// them in console as a callback
dns.lookup('geeksforgeeks.org', options1, (err, addresses) =>
    console.log('addresses: %j', addresses));