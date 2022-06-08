// Node.js program to demonstrate the
// os.homedir() method

// Allocating os module
const os = require('os');

// Printing os.homedir() value
console.log(os.homedir());

console.log("Example 2-=-=-=-=-=-=-=-=-=-=")
console.log(getUserHome());

function getUserHome() {

    // Return the value using process.env
    return process.env[(process.platform ==
        'win32') ? 'USERPROFILE' : 'HOME'];
}
