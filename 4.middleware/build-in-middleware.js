import ex from "express";

const app = ex();
// inbuilt middleware
// it is used to parse the JSON data from the request body
app.use(ex.json());
// it is used to serve static files
// for example if we have a file named index.html in the public folder, we can access it by going to http://localhost:3000/readme.txt
app.use(ex.static('public'));
// it is used to parse the URL-encoded data from the request body
app.use(ex.urlencoded({extended: true}));
app.listen(3000, () => {
 console.log("Server started on port 3000"); 
});

app.get("/", (req, res) => {
 res.send("Hello World!");
});