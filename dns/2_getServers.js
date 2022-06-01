// Node.js program to demonstrate the dns.resolveSoa() method
var dns = require('dns');
// reading ip address of the current host
console.log(dns.getServers())
// Reading IP address of the current host
// and printing it to the console
res = dns.getServers();

res.forEach(element => {
    console.log(element);
});