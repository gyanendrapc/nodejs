// Node.js program to demonstrate the
// path.basename() method

// Import the path module
const path = require('path');

path1 = path.basename('/home/user/bash/index.txt');
console.log(path1)

// Using the extension parameter
path2 = path.basename('/home/user/bash/index.txt', '.txt');
console.log(path2)


console.log("Example 2-=---=-=-=-=-=-=-=--")

path1 = path.basename('C:\\users\\bash\\index.html');
console.log(path1)

// Using the extension parameter
path2 = path.basename('C:\\users\\bash\\index.html', '.html');
console.log(path2)
