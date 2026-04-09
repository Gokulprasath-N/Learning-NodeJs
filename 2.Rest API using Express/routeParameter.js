const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
// here we are using route parameter
// :id is the route parameter
// req.params.id is used to get the value of the route parameter
// id is the name of the route parameter
app.get("/users/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// here we are using multiple route parameters
// name is the name of the route parameter
// req.params.name is used to get the value of the route parameter
app.get('/user/posts/:firstName/:lastName', (req, res) => {
    const { firstName, lastName } = req.params;
    res.send(`User Name: ${firstName} ${lastName}`);
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});