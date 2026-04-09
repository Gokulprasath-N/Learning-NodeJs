const express = require("express");
const app = express();

// array of objects
const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// here we are getting the courses by id
// params is used to get the id from the url
// parseInt is used to convert the id from string to number
// if the course is not found, we send a 404 status code

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("Course not found");
    }
    res.send(course);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});