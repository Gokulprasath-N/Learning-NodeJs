import config from "config";
import ex from "express";
import debug from "debug";


const app = ex();
const debug = debug("app");

console.log("Application Name: " + config.get("name"));
// debug is used to print the debug messages
// to see the debug messages we need to set the environment variable DEBUG=app
// for example: DEBUG=app node config.js
// or: DEBUG=app,other_debug_name node config.js
// or: DEBUG=app* node config.js
// or: DEBUG=app,other_debug_name node config.js
// or: DEBUG=app* node config.js
debug("Mail Host: " + config.get("mail.host"));

app.listen(3000, () => {
 console.log("Server started on port 3000"); 
});