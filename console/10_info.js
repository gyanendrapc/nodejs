// Node.js program to demonstrate the
// console.info() method

// Accessing console module
const console = require('console');

// Calling console.info() method
console.info("this is a sample info message!");
console.info("sample info message with args: %d", 39);
// Node.js program to demonstrate the
// console.info() method


// Calling console.info() method
console.info("this is a %s" +
    " sample info message!");

console.info("sample info message "
    + "with args: %d", 34);
console.info("info message: Warning "
    + "at function %s: line number"
    + " %d ff()", 96)

var isDebugMode = true;
console.custom_info = function (message) {
    if (isDebugMode) {
        console.log(message);
    }
}

console.custom_info("custom info message");
