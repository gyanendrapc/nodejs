// Node.js program to demonstrate the
// path.delimiter property

// Allocating path module
const path = require('path');

// Printing path.delimiter value
console.log(path.delimiter);

console.log("Example 2 -=-=--=-=-=-=-=-")

// Allocating process module
const process = require('process');

// Printing path.delimiter value
var delimiter = path.delimiter;

console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

