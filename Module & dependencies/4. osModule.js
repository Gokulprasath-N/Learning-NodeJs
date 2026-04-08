const os = require('os');

// total memory
var totalMemory = os.totalmem();
// free memory
var freeMemory = os.freemem();

// {} is used for template literals
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);