// requiring the module
const assert = require("assert").strict;

// Function call
try {
    assert(0);
} catch (error) {
    console.log("Error", error)
}

try {
    assert(1);
    console.log("No error occured")
} catch (error) {
    console.log("Error", error)
}