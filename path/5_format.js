// // Import the path module
// const path = require('path');

// // CASE 1
// // If "dir", "root" and "base" are all given,
// // "root" is ignored.
// let path1 = path.format({
//     root: "/ignored/root/",
//     dir: "/home/user/personal",
//     base: "details.txt",
// });
// console.log("Path 1:", path1);

// // CASE 2
// // If "dir" is not specified then "root" will be used
// // If only "root" is provided
// // platform separator will not be included.
// // "ext" will be ignored.
// let path2 = path.format({
//     root: "/",
//     base: "game.dat",
//     ext: ".noextension",
// });
// console.log("Path 2:", path2);

// // CASE 3
// // If "base" is not specified
// // "name" and "ext" will be used
// let path3 = path.format({
//     root: "/images/",
//     name: "image",
//     ext: ".jpg",
// });
// console.log("Path 3:", path3);


console.log("Example1 -=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-")

// Import the path module
const path = require('path');

// CASE 1
// If "dir", "root" and "base" are all given,
// "root" is ignored.
let path1 = path.format({
    root: "C:\\ignored\\root",
    dir: "website\\dist",
    base: "index.html",
});
console.log("Path 1:", path1);

// CASE 2
// If "dir" is not specified then "root"
// will be used
// If only "root" is provided platform
// separator will not be included.
// "ext" will be ignored.
let path2 = path.format({
    root: "C:\\",
    base: "style.css",
    ext: ".ignored",
});
console.log("Path 2:", path2);

// CASE 3
// If "base" is not specified
// "name" and "ext" will be used
let path3 = path.format({
    root: "website\\",
    name: "main",
    ext: ".js",
});
console.log("Path 3:", path3);
