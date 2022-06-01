// Node.js program to demonstrate the
// fs.stat() method

// Import the filesystem module
const fs = require('fs');


// Getting information for a file
fs.stat('input.txt', (err, stats) => {
    if (err) {
        consolinput.txte.log(err);
    }
    else {
        console.log("Stats object for: input.txt");
        console.log(stats);

        // Using methods of the Stats object
        console.log("Path is file:", stats.isFile());
        console.log("Path is directory:", stats.isDirectory());
    }
})

// Getting information for a directory
fs.stat("hello", (error, stats) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Stats object for: hello");
        console.log(stats);

        // Using methods of the Stats object
        console.log("Path is file:", stats.isFile());
        console.log("Path is directory:", stats.isDirectory());
    }
});

fs.stat("input.txt", (error, stats) => {
    console.log(stats);
});

// Using the bigint option to return
// the values in big integer format
fs.stat("input.txt", { bigint: true }, (error, stats) => {
    console.log(stats);
});