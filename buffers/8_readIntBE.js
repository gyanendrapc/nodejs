// Node.js program to demonstrate the
// buffer.readIntBE(offset, bytelen) method
var buff = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]);

console.log(buff.readIntBE(0, 5).toString(16));

console.log(buff.readIntBE(0, 4).toString(16));

// Node.js program to demonstrate the
// buffer.readIntBE(offset, bytelen) method
var buff = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]);

console.log(buff.readIntBE(4, 6).toString(16));

console.log(buff.readIntBE(3, 0).toString(16));
