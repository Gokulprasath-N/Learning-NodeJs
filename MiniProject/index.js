import express from "express";
import Joi from "joi";

const app = express();
// middleware to parse JSON
app.use(express.json());

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

const genres = [
    {id: 1, name: "Action"},
    {id: 2, name: "Comedy"},
    {id: 3, name: "Drama"},
    {id: 4, name: "Horror"},
    {id: 5, name: "Sci-Fi"},
    {id: 6, name: "Romance"},
    {id: 7, name: "Thriller"}
];

// get all genres
app.get("/", (req, res) => {
    res.send(genres);
});

// get genre by id
app.get("/api/genres/:id", (req, res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre){
        res.status(404).send("Genre not found");
    }
    res.send(genre);
});

// validate the input
function validation(gener) {
  // 1. Define the schema
  // he schema variable holds a "contract" that says: "Any data I check against this rulebook MUST look exactly like this:"
  // Joi.string() -> The data must be a string.
  // .min(3) -> It must have at least 3 characters.
  // .required() -> It cannot be empty.
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  // 2. Call validate() ON the schema, passing the data as the argument
  // It returns an object with two properties: error and value.
  // If the data is valid, error will be null and value will be the validated data.
  // If the data is invalid, error will be an error object and value will be undefined.
  return schema.validate(gener);
}

// post a new genre
app.post("/api/genres", (req, res) =>{
 const {error,value} = validation(req.body);
 if(error){
  res.status(400).send(error.details[0].message);
 }
 else{
 const gener = {
  id: genres.length + 1,
  name: value.name
 };
 genres.push(gener);
 }
 res.send(genres);

});

app.put("/api/genres/:id", (req, res) =>{
 // check if the genre exists
 const genre = genres.find(g => g.id === parseInt(req.params.id));
 if(!genre){
  res.status(404).send("Genre not found");
 }
 // validate the input
 const {error,value} = validation(req.body);
 if(error){
  res.status(400).send(error.details[0].message);
 }
 else{
 // update the genre
 genre.name = value.name;
 }
 res.send(genre);
})

app.delete("/api/genres/:id", (req, res) =>{
 // check if the genre exists
 const genre = genres.find(g => g.id === parseInt(req.params.id));
 if(!genre){
  res.status(404).send("Genre not found");
 }
 // delete the genre
 // splice is used to remove the element from the array
 // genres.indexOf(genre) is used to get the index of the genre
 // 1 is the number of elements to remove
 genres.splice(genres.indexOf(genre), 1);
 res.send(genre)
})