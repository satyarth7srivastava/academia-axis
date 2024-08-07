import mongoose from "mongoose";

const CourseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseDuration: {
        type: Number,
        default: 0
    },
    courseInstructor: {
        type: String,
        required: true
    },
    coursePrice: {
        type: String,
        default: "Free"
    },
    courseRating: {
        type: Number,
        default: 0
    },
    courseLink: {
        type: String,
        required: true
    },
    courseImage: {
        type: String,
        required: true
    },
    courseDomain: {
        type: String,
        required: true
    },
    courseLevel: {
        type: String,
        required: true
    }
});

CourseSchema.index({
    courseName: "text",
    courseDescription: "text",
    courseInstructor: "text",
    courseDomain: "text",
    courseLevel: "text",
    CoursePrice: "text"
});

const Course = mongoose.models.courses || mongoose.model("courses", CourseSchema);
export default Course;