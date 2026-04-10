import express from "express";
import genres from "./routes/genres.js";
import mongoose from "mongoose";

const app = express();

// middleware to parse JSON
app.use(express.json());

// use the genres router
app.use("/api/genres", genres);

// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vidly")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

