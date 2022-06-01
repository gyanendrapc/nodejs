
// Node.js program to demonstrate the
// fs.renameSync() method

// Import the filesystem module
const fs = require('fs');


// List all the filenames before renaming
getCurrentFilenames();

// Rename the file
fs.renameSync('world.txt', 'hello.txt');
// List all the filenames after renaming
getCurrentFilenames();

// // List all the filenames before renaming
// getCurrentFilenames();

// // Rename a non-existent file
// fs.renameSync('nonexist.txt', 'world.txt');

// // List all the filenames after renaming
// getCurrentFilenames();

function getCurrentFilenames() {
    console.log("Current filenames");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    })
}