const assert = require("assert");

try {
    assert.ifError(null);

} catch (error) {
    console.log("Error", error)
}

try {
    assert.ifError("error");
} catch (error) {
    console.log("Error", error)
}