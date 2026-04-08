// here we import express module
const express = require("express");

// here we create an express application
// app is the instance of express
const app = express();

// here we define a route for the root URL
// app.get() is used to handle GET requests
// "/" is the root URL
// (req, res) => { ... } is the callback function
// req is the request object
// res is the response object
app.get("/", (req, res) => {
    res.send("Hello World!");
});