import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/playground")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

    const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// creating a model
const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
 // creating a course
    const course = new Course({
        name: "My First Course",
        author: "John Doe",
        tags: ["web", "frontend"],
        isPublished: true
    });
    // saving a course
    const result = await course.save();
    console.log(result);
}

// call createCourse function
createCourse();