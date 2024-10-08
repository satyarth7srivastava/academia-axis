import { link } from "fs";
import mongoose from "mongoose";


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
        type: [
            {
                course_id: mongoose.Schema.Types.ObjectId, 
                name: String,
                link: String
            }
        ],
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