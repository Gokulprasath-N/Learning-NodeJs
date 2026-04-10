import ex from "express";

const app = ex();
// inbuilt middleware
// it is used to parse the JSON data from the request body
app.use(ex.json());

// custom middleware
// it is a function that takes request, response and next as arguments
// next is a function that is used to pass the request to the next middleware
// if next is not called, the request will be stuck in the middleware
app.use((req, res, next) => {
 console.log("Logging...");
 next();
});

// authentication middleware
app.use((req, res, next) => {
 console.log("Authentication...");
 next();
});

app.listen(3000, () => {
 console.log("Server started on port 3000"); 
});