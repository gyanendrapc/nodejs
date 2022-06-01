// cbuff = new Buffer(256)
// bufferlen = cbuff.write("Learn Programming with GeeksforGeeks!!!");
// console.log("No. of Octets in which string is written : " + bufferlen);


console.log("Read from a buffer")
rbuf = new Buffer(26);

var j;
for (var i = 0, j = 0; i < 90, j < 26; i++, j++) {
    rbuf[j] = i;
}
console.log(rbuf.toString('ascii'))

// Write JavaScript code here
rbuf = new Buffer(26);
var j;

for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
    rbuf[j] = i;
}

console.log(rbuf.toString('utf-8', 3, 9)); 