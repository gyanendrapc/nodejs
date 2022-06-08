// Node.js program to demonstrate the
// os.endianness() method

// Allocating os module
const os = require('os');

// Printing os.endianness() value
console.log(os.endianness());

console.log("Example 2 -==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

// Printing os.endianness() value
switch (os.endianness()) {
    case 'LE':
        console.log("CPU is little endian format");
        break;

    case 'BE':
        console.log("CPU is big endian format");
        break;

    default:
        colsole.log("Unknown endianness");
}
