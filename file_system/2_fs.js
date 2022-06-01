var fs = require('fs');
// Asyncronous - Opening file.
console.log("Opening file");

fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        return console.log(err);
    }
    console.log("File Open Successfully...!");
})