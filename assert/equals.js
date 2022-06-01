const assert = require("assert").strict;

try {
    assert.equal(4, 4)
} catch (error) {
    console.log("Error", error)
}