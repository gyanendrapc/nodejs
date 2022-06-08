// Node.js program to demonstrate the
// path.normalize() method

// Import the path module
const path = require('path');

path1 = path.normalize("/users/admin/.");
console.log(path1)

path2 = path.normalize("/users/admin/..");
console.log(path2)

path3 = path.normalize("/users/admin/../comments")
console.log(path3);

path4 = path.normalize("/users///admin///comments")
console.log(path4);

console.log(path.normalize('../hello/world/../dev'))
