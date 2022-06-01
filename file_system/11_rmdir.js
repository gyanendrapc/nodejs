
// Node.js program to demonstrate the
// fs.rmdir() method

// Import the filesystem module
const fs = require('fs');

// Get the current filenames
// in the directory
getCurrentFilenames();

fs.rmdir("directory_one", () => {
    console.log("Folder deleted");
    // Get the current filenames
    // in the directory to verify
    getCurrentFilenames();
})


getCurrentFilenames();
fs.rmdir("test", {
    recursive: false,
}, (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log("No recursive : Directories deleted");
    }
})
// Using the recursive option to delete
// multiple directories that are nested
fs.rmdir("etc", {
    recursive: true,
}, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Recursive: Directories Deleted!");

        // Get the current filenames
        // in the directory to verify
        getCurrentFilenames();
    }
});
function getCurrentFilenames() {
    console.log("\nCurrent filenames");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    })
}