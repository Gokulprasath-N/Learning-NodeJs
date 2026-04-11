import mongoose from "mongoose";
import joi from "joi";

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Genre = mongoose.model('Genre-DB', genreSchema);

function validateGenre(genre){
 const schema = joi.object({
  name: joi.string().min(5).max(50).required(),
 });
 return schema.validate(genre);
}

export { genreSchema, Genre, validateGenre };