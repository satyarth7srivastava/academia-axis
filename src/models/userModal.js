import mongoose from "mongoose";

const trackedCoursesSchema = mongoose.Schema({
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Not Started"
    }
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    clg: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    GradYear: {
        type: Number,
        required: true
    },
    CoursesEnrolledList: {
        type: [trackedCoursesSchema],
        default: []
    },
    authToken: {
        type: String,
        required: false,
        default: "none"
    },
});


const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;