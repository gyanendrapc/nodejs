
// Node.js program to demonstrate the
// Buffer.write() method

// Create a buffer
var buf = Buffer.from('GeeksforGeeks');

buf.write('EE', 1);

console.log(buf.toString());


// create a buffer 
var buf = Buffer.allocUnsafe(100);
var len = buf.write("GeeksForGeeks", 2, 5, 'utf-8')
console.log(len.toString());