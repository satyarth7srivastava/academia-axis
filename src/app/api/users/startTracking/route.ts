import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/connectDb";
import User from "@/models/userModal.js";
import { useRouter } from "next/router";
import course from "@/app/course/page";


connect();
export async function POST(req: NextRequest) {
    const authToken = req.cookies.get("authToken")?.value;
    try {
        const reqBody = await req.json();
        const { courseId, courseName, courseLink } = await reqBody;
        const courseObj = {    
            id: courseId, 
            name: courseName,
            link: courseLink
        }
        if (!authToken) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const user = await User.findOne({ authToken: authToken });
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const trackingList = user.CoursesEnrolledList;
        if (trackingList.some((course: any) => course.id === courseId)) {
            return NextResponse.json({ message: "Course already added to your tracking list" }, { status: 400 });
        }
        trackingList.push(courseObj);
        user.CoursesEnrolledList = trackingList;
        await user.save();
        return NextResponse.json({ message: "Course added to your tracking list" }, { status: 200 });
    } catch (error: any) {
        throw new Error(error.message);
    }
}