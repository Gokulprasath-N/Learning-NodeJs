const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

// to make it asynchronous
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Files', files);
});
