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

app.get("/api/courses/:id", (req, res) => {
 const course = courses.find(c => c.id === parseInt(req.params.id))
 if (!course){
  res.status(404).send("Course not found");
 }
 res.send(course)
});

app.post('/api/courses', (req, res) =>{

 // here we are validating the input
 const schema = {
  name: Joi.string().min(3).required()
 };
 const result = Joi.validate(req.body, schema);

 // if the input is not valid, we send a 400 status code
 if (result.error){
  res.status(400).send(result.error.details[0].message);
 }
 res.send(result)
})


app.listen(3000, () => {
 console.log("Server started on port 3000"); 
});