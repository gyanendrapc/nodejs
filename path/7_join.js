// Node.js program to demonstrate the
// path.join() Method

// Import the path module
const path = require('path');

// Joining 2 path-segments
path1 = path.join("users/admin/files", "index.html");
console.log(path1)

// Joining 3 path-segments
path2 = path.join("users", "geeks/website", "index.html");
console.log(path2)

// Joining with zero-length paths
path3 = path.join("users", "", "", "index.html");
console.log(path3)

console.log("example 2-=-=-=-")

// Normalizing of the final path
path1 = path.join("users", "..", "files", "readme.md");
console.log(path1)

// Zero length final path
// returns a period (.)
path2 = path.join("users", "..");
console.log(path2)

// Getting the directory path one folder above
console.log("Current Directory: ", __dirname);
path3 = path.join(__dirname, "..");
console.log("Directory above:", path3)
