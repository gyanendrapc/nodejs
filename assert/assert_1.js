/**
 * 
 * Assert module in Node.js provides a bunch of facilities that are useful for the assertion of the function. The assert module provides a set of assertion functions for verifying invariants. If the condition is true it will output nothing else an assertion error is given by the console.
 */
console.clear();
const assert = require("assert");

let x = 4;
let y = 5;
try {
    assert(x == y);
} catch (error) {
    // Error outpur
    console.log(`${x} is not equals to ${y}`);
}

// without try catch
assert(x > y);