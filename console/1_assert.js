// It requires the fs module
const fs = require("fs");
const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');

const myobject = new console.Console(out, err);
// It will display 'This is the first example' to out
myobject.log('This is the first example');
// It will display 'This is the second example' to out
myobject.log('This is the %s example', 'second');

// It will display 'This is the second example' to out
myobject.log('This is the %s example', 'second');

// It will display 'Error: In this we creating some error' to err
myobject.error(new Error('In this we creating some error'));

const num = 'third';

// It will display 'This is the third error' to err
myobject.warn(`This is the ${num} example`);