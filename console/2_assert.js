
// It will display 'This is the first object example' to stdout
console.log('This is the first object example');

// It will display 'This is the second object example' to stdout
console.log('This is the %s example', 'second object');
console.error(new Error('new error has happend'));
const obj = 'third object';
// It will display 'This is the third object example' to stderr
console.warn(`This is the ${obj} example`);

console.count();
console.timeEnd()