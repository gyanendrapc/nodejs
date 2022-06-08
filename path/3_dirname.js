// Node.js program to demonstrate the	
// path.dirname() method

// Import the path module
const path = require('path');

// Complete file path
path1 = path.dirname("/users/admin/website/index.html");
console.log(path1)

// Only file name
// returns a period (.)
path2 = path.dirname("readme.md");
console.log(path2)

// Path with file not specified
path3 = path.dirname("website/post/comments")
console.log(path3);

console.log("Example2-=-=--=-=-=-=-=")


console.log("File name:", __filename);
path1 = path.dirname(__filename);
console.log(path1);

console.log("Directory name:", __dirname);
path2 = path.dirname(__dirname);
console.log(path2);
