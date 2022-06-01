// Node program to demonstrate Buffer.compare() methods

// Creating a buffer
var buf1 = Buffer.from("geek");
var buf2 = Buffer.from("geek");

var op = Buffer.compare(buf1, buf2);
console.log(op)

// Node program to demonstrate Buffer.compare() methods

// Creating a buffer
var buf1 = Buffer.from("for");
var buf2 = Buffer.from("geek");

var op = Buffer.compare(buf1, buf2);
console.log(op)


// Creating buffer
var buffer1 = Buffer.from("1");
var buffer2 = Buffer.from("2");
var buffer3 = Buffer.from("3");

var array = [buffer1, buffer2, buffer3];

// before shorting
console.log(array);

// After sorting array

console.log(array.sort(Buffer.compare))


console.log("test - 3")
// test-3
// Creating buffer
var b1 = Buffer.from('gyanendrapc');
var b2 = Buffer.from('xydsfasdfdfadfasfasdfdsffasz');
console.log(b1.compare(b2, 3))

console.log(b1.compare(b2, 23))