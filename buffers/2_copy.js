// nodejs program to demonstrate the Buffer.copy() method
// Creating the buffer()
var Buffer2 = Buffer.from('for');
var Buffer1 = Buffer.from('GreeksAndGreeks');

Buffer2.copy(Buffer1, 6, 0);
console.log(Buffer1.toString());


// Node.js program to demonstrate the
// Buffer.copy() Method


// Node.js program to demonstrate the  
// Buffer.copy() Method

var buffer2 = Buffer.allocUnsafe(5);

var buffer1 = Buffer.from('Geeks');
for (let index = 0; index < 5; index++) {
    buffer1[index] = index + 97;

}
buffer2.copy(buffer1, 2);
// Prints 'Geabc' as the input buffer1
// carries 'Geeks' and we provided the
// targetStart index as 2
// so elements will replace the values in
// buffer1 starting from index 2

console.log(buffer1.toString());