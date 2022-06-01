// Node.js program to demonstrate the
// console.countReset() method

// Accessing console module
const console = require('console');

// Calling console.count() method
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count("a");
console.count("b");

// Resetting counter
console.countReset("a");
console.countReset("b");

console.count("a");
console.count("b");
// Node.js program to demonstrate the
// console.countReset() method

// Accessing console module

// Calling console.count() method
// with no parameter to count
// default label
console.count();
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count();
console.count();

// Resetting counter
console.countReset();
console.countReset("a");
console.countReset("b");

console.count();
console.count("a");
console.count("b");

console.count("apple")
console.countReset("apple")
console.count("apple")