const assert = require("assert");
try {
    assert.notDeepEqual({}, { a: "hello" }, ["Checking notDeepEqual"])
    console.log("Not equal")
} catch (error) {
    console.log("Error", error)
}
try {
    assert.notDeepEqual({}, {}, ["Checking notDeepEqual"])
} catch (error) {
    console.log("Error", error)
}