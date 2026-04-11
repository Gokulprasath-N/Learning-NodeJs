import express from "express";
import mongoose from "mongoose";
import customers from "./routes/customers.js";
import genres from "./routes/genres.js";
import movies from "./routes/movies.js";
import rentals from "./routes/rentals.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";
const app = express();
import config from "config";

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

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
// use rentals router
app.use('/api/rentals', rentals);
// use users router
app.use('/api/users', users);
// use auth router
app.use('/api/auth', auth);
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));