
// Node.js program to demonstrate the  
// Buffer.subarray() method

// Allocating buffer
const buf = Buffer.from('GeeksforGeeks', 'ascii');

// Printing original buffer
console.log("Original buffer is: " + buf);

// Cropping buffer, here starting index
// is 5 and ending index is 10
cropped_buf = buf.subarray(5, 10);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);


// Modifying cropped buffer
cropped_buf[0] = 70;  // F
cropped_buf[1] = 79;  // O
cropped_buf[2] = 82;  // R

// Printing cropped buffer
console.log("Cropped buffer after modification is: " + cropped_buf);

// Printing original buffer
console.log("Original buffer after modification is: " + buf);

// Allocating buffer
const b = Buffer.from('GeeksForGeeks', 'ascii');
// Printing original buffer
console.log("Original buffer is: " + buf);

// cropping buffer
var cb = b.subarray(-10, -1);
// printing cropped buffer
console.log("Cropped Buffer : " + cb);


// Cropping buffer again with no parameter
cropped_buf = buf.subarray();

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);