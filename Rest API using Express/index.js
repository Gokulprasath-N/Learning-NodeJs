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

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.get("/array", (req, res) => {
    res.send([1, 2, 3, 4, 5,6]);
});

// here we start the server
// app.listen() is used to start the server
// 3000 is the port number
// () => { ... } is the callback function
// console.log() is used to print the message
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});