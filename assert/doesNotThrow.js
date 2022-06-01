const assert = require("assert").strict;


try {
    assert.doesNotThrow(() => {
        throw new TypeError("Wrong value");
    })
} catch (error) {
    console.log("Error", error);
}

try {
    assert.doesNotThrow(() => {
        throw new TypeError("Wrong value")
    }, /abcd/, 'Whoops')
} catch (error) {
    console.log("Error", error)
}