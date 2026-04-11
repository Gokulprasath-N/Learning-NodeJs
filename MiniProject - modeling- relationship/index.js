import express from "express";
import mongoose from "mongoose";
import customers from "./routes/customers.js";
import genres from "./routes/genres.js";
import movies from "./routes/movies.js";

const app = express();

mongoose.connect('mongodb://localhost:27017/vidly_2_0')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
// use customer router
app.use('/api/customers', customers);
// use genre router
app.use('/api/genres', genres);
// use movie router
app.use('/api/movies', movies);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));