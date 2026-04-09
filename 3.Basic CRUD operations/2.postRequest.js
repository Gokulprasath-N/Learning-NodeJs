const ex = require("express");

const app = ex();
// middleware to parse the request body
app.use(ex.json());
const courses = [{
 id: 1,
 name: "course1"
},
{
 id: 2,
 name: "course2"
},
{
 id: 3,
 name: "course3"
}
]

app.get("/api/courses/:id", (req, res) => {
 const course = courses.find(c => c.id === parseInt(req.params.id))
 if (!course){
  res.status(404).send("Course not found");
 }
 res.send(course)
});

// here req.body is used to get the data from the request body
// we need to enable the middleware to parse the request body
// app.use(express.json());
// here we are posting the data to the server
app.post('/api/courses', (req, res) =>{
 const course ={
  id: courses.length + 1,
  name: req.body.name
 }
 courses.push(course);
 res.send(course);
})


app.listen(3000, () => {
 console.log("Server started on port 3000");
});