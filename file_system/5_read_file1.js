const fs = require('fs')



fs.readFile('Demo.txt', 'utf8', (err, data) => {
    console.log(data);
})
console.log('read file called');
// Use fs.readFile() method to read the file
fs.readFile('demo.txt', (err, data) => {
    console.log(data);
})