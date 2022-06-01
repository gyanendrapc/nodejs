assert = require("assert").strict;


try {
    assert.match("I will try to pass", /fail/)
} catch (error) {
    console.log("Error", error)
}