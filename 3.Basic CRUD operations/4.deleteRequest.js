const ex = require("express");

// here we are using joi to validate the input
const Joi = require("joi");
const app = ex();
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

app.get("/", (req, res) => {
 res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
 const course = courses.find(c => c.id === parseInt(req.params.id))
 if (!course){
  res.status(404).send("Course not found");
 }
 res.send(course)
});

app.post('/api/courses', (req, res) =>{

 // validate the input
 const { error } = validateCourse(req.body);

 // if the input is not valid, we send a 400 status code
 if (error){
  res.status(400).send(error.details[0].message);
 }
 const course ={
  id: courses.length + 1,
  name: req.body.name
 }
 courses.push(course);
 res.send(course);
})



app.put('/api/courses/:id', (req, res) =>{

 // check if the course exists
 const course = courses.find(c => c.id === parseInt(req.params.id))
 if (!course){
  res.status(404).send("Course not found");
 }

 // validate the input
 const { error } = validateCourse(req.body);

 // if the input is not valid, we send a 400 status code
 if (error){
  res.status(400).send(error.details[0].message);
 }
 // update the course
 course.name = req.body.name;
 res.send(course)
})

function validateCourse(course){
 const schema = {
  name: Joi.string().min(3).required()
 };
 return Joi.validate(course, schema);
}


app.delete('/api/courses/:id', (req, res) =>{
 // check if the course exists
 const course = courses.find(c => c.id === parseInt(req.params.id))
 if (!course){
  res.status(404).send("Course not found");
 }
 // delete the course
 // splice is used to remove the element from the array
 // courses.indexOf(course) is used to get the index of the course
 // 1 is the number of elements to remove
 courses.splice(courses.indexOf(course), 1);
 res.send(course)
})

app.listen(3000, () => {
 console.log("Server started on port 3000"); 
});