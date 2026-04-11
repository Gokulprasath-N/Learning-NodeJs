import express from "express";
import genres from "./routes/genres.js";

const app = express();
// middleware to parse JSON
app.use(express.json());
// use the genres router
app.use("/api/genres", genres);
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

