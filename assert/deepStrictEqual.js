console.log("Node.js assert.deepStrictEqual() Function")

const assert = require("assert").strict;

// Function call
try {
    assert.deepStrictEqual({ a: '5' }, { a: '5' });
    console.log("These are equal")
} catch (err) {
    console.log(`Error is found`, err)
}