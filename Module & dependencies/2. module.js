// in node every file is a module
   // console.log(module);


function log(message) {
 // send an http request
    console.log(message);
}

var url = 'http://mylogger.io/log';
// export module
module.exports.log =log;
module.exports.url =url;


// to load a module we need a require function

// inside require we pass the path to the module
const logger = require('./2. module.js');

console.log(logger);

// printing the function
logger.log('Hello World');