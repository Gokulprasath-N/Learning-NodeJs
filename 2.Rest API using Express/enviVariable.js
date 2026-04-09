const ex = require("express");

const app = ex();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// here we are using process.env.PORT to get the port number from the environment variable
// if the environment variable is not set, then we are using 3000 as the default port number

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// to set environment variable
// set PORT=4000