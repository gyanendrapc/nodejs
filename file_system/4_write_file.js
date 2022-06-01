// var fs = require("fs");

// console.log("writing into existing file");
// fs.writeFile('input.txt', 'Geeks For Geeks', function (err) {
//     if (err) {
//         return console.error(err);
//     }

//     console.log("Data written successfully!");
//     console.log("Let's read newly written data");

//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Asynchronous read: " + data.toString());
//     });
// });

// // with option parameter
// var data = "\nLearn Node.js";

// // Append data to file
// fs.appendFile('input.txt', data, 'utf-8', (err) => {
//     if (err) throw err;
//     // if no error
//     console.log("Data is appended to file successfully.");
// })


// // For synchronously appending
// var data = "\nLearn Python";
// // appending data to file syncronously
// fs.appendFileSync('input.txt', data, 'utf8');
// console.log("Data is appended to file successfully.")

// fs.close(fd, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("File closed successfully.");
// })



const fs = require('fs');
console.log("Deleting an existing file");
fs.unlink('input.txt', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("File deleted successfully...!");
})