// Node.js program to demonstrate the
// path.isAbsolute() method

// Import the path module
const path = require('path');

path1 = path.isAbsolute("/user/bash/");
console.log(path1);

path2 = path.isAbsolute("user/bash/readme.md");
console.log(path2);

path3 = path.isAbsolute("/user/bash/readme.md");
console.log(path3);

path4 = path.isAbsolute("..");
console.log(path4);

console.log("Example 2-=-=-=-=-=-=-=-==-=")

path1 = path.isAbsolute("\\user\\bash\\");
console.log(path1);

path2 = path.isAbsolute("user\\bash\\readme.md");
console.log(path2);

path3 = path.isAbsolute("\\user\\bash\\readme.md");
console.log(path3);

path4 = path.isAbsolute("..");
console.log(path4);