// Node.js program to demonstrate the
// path.extname() method

// Import the path module
const path = require('path');

path1 = path.extname("hello.txt");
console.log(path1)

path2 = path.extname("readme.md");
console.log(path2)

// File with no extension
// Returns empty string
path3 = path.extname("fileDump")
console.log(path3)

// File with blank extension
// Return only the period
path4 = path.extname("example.")
console.log(path4)

path5 = path.extname("readme.md.txt")
console.log(path5)

// Extension name of the current script
path6 = path.extname(__filename)
console.log(path6)

console.log("Example2-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

// Comparing extensions from a
// list of file paths
paths_array = [
    "/home/user/website/index.html",
    "/home/user/website/style.css",
    "/home/user/website/bootstrap.css",
    "/home/user/website/main.js",
    "/home/user/website/contact_us.html",
    "/home/user/website/services.html",
]

paths_array.forEach(filePath => {
    if (path.extname(filePath) == ".html")
        console.log(filePath);
});
