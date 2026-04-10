import express from "express";
import Joi from "joi";
import mongoose from "mongoose";
const router = express.Router();



// create a model
const Genre = mongoose.model("Genre", new mongoose.Schema({
    name:{
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
}));



// get all genres
router.get("/", async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

// get genre by id
router.get("/:id", async (req, res)=>{
    const genre = await Genre.findById(req.params.id);
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
router.post("/", async (req, res) =>{
 const {error,value} = validation(req.body);
 if(error){
  res.status(400).send(error.details[0].message);
 }
 else{
 let genre = new Genre({
  name: req.body.name
 });
 genre = await genre.save();
 res.send(genre);
 }

});

router.put("/:id", async (req, res) =>{
 
  // validate the input
 const {error,value} = validation(req.body);
 if(error){
  res.status(400).send(error.details[0].message);
 }

 // check if the genre exists
 const genre = await Genre.findByIdAndUpdate(req.params.id,{name: req.body.name},{new: true});

 if(!genre){
  res.status(404).send("Genre not found");
 }
 else{
 // update the genre
  res.send(genre);}
});

router.delete("/:id", async (req, res) =>{
  
 // check if the genre exists
 const genre = await Genre.findByIdAndDelete(req.params.id);

 //  if genre is not found
 if(!genre){
  res.status(404).send("Genre not found");
 }
 else{
 // delete the genre
 res.send(genre)
}
})

// export the router
export default router;