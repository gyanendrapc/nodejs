var fs = require('fs');

fs.exists('etc/password/', (exist) => {
    console.log(exist ? 'Found' : 'Not Found');
})
// Using fs.exists() method
fs.exists('/etc/geeks', (exists) => {
    console.log(exists ? 'Found' : 'Not found!');
});