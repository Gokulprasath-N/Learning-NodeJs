import mongoose from "mongoose";
import joi from "joi";
import { genreSchema } from "./genre.js";

const Movie = mongoose.model(
 'Movie-DB', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 255
    }
 })
)

function validateMovie(movie){
 const schema = joi.object({
  title: joi.string().min(5).max(50).required(),
  genre: joi.string().required(),
  numberInStock: joi.number().min(0).max(255).required(),
  dailyRentalRate: joi.number().min(0).max(255).required()
 });
 return schema.validate(movie);
}

export { Movie, validateMovie };