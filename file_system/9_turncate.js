const fs = require('fs')

// completely delete the content of the targeted file
fs.truncate('hello.txt', 0, (err) => {
    err ? console.log(err) : console.log("File deleted");
})


// next example

console.log("Content of file");

// Opening file
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }

    // Reading file
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }

        // Truncating the file
        fs.truncate('Demo.txt', 15, function (err, bytes) {
            if (err) {
                console.log(err);
            }

            // Content after truncating
            console.log("New content of file");
            fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
                if (err) {
                    console.log(err);
                }

                // Print only read bytes to avoid junk.
                if (bytes > 0) {
                    console.log(buf.slice(0, bytes).toString());
                }

                // Close the opened file.
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        });
    });
});
