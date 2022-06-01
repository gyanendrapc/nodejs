// python program to demonstrate the Buffer.includes() method

// Creating buffer
const buf = new Buffer('Geek One');

console.log(buf.includes('Geek'));



// Node program to demonstrate the  
// Buffer.includes() Method 

const buffer = Buffer.from(
    'GeeksforGeeks: A computer science portal');

// Started checking the value from index 15 only
const output = buffer.includes('Geek', 15);

console.log(output);