// accessing dns
const dns = require('dns');

//calling dns.lookupService() method for
// 127.0.0.1 port number 22
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {

    // Printing hostname and service as callback
    console.log(hostname, service);
})

// setting options for dns.lookup() method
const options = {
    // setting family as 4 i.e. IPv4
    family: 4,
    hints: dns.ADDRCONFIG | dns.V4MAPPED
}

dns.lookup('www.google.com', options, (err, addr, fam) => {
    console.log(addr, fam);
    if (err) {
        console.log(err.stack);
    } else {
        // calling dns lookupService() method
        dns.lookupService(addr, 80, (err, hostname, service) => {
            if (err) {
                console.log(err.stack);
            }

            // Printing hostname and service
            // as callback
            console.log(hostname, service);
        })
    }
})