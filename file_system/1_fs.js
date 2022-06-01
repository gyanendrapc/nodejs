var fs = require('fs');
// Asyncronous read
fs.readFile('input.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("Asyncronous read : ", data.toString());
})


// syncronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());