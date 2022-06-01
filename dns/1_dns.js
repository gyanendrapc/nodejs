// include 'dns' module and crate its object
const dns = require('dns');
const { hostname } = require('os');
const website = 'google.com';

// call to lookup function of dns
dns.lookup(website, (err, address, family) => {
    console.log('address of %s is %j  family : IPv%s', website, address, family);
})

// call to reverse function  along with lookup function
dns.lookup('www.google.com', onLookup = (err, addr, family) => {
    console.log('address : ', addr);
    dns.reverse(addr, (err, hostname) => {
        console.log('reverse for address : ' + addr + ': ' + JSON.stringify(hostname));
    });
});