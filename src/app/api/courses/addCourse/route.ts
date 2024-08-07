import { NextResponse,NextRequest } from "next/server";
import connect from "@/db/connectDb";
import Course from "@/models/courseModal";

connect();

export async function POST(req: NextRequest){
    const reqBody = await req.json();
    const {
        courseName,
        courseDescription,
        courseDuration,
        courseInstructor,
        coursePrice,
        courseRating,
        courseImage,
        courseLevel,
        courseDomain,
        courseLink
    } = reqBody;
    if(!courseName || !courseDescription || !courseDuration || !courseInstructor || !coursePrice || !courseRating || !courseImage || !courseLevel || !courseDomain){
        return NextResponse.json({message: "Please fill all the fields"},{status: 400});
    }
    try{
        const course = await Course.create({
            courseName: courseName,
            courseDescription: courseDescription,
            courseDuration: courseDuration,
            courseInstructor: courseInstructor,
            coursePrice: coursePrice,
            courseRating: courseRating,
            courseImage: courseImage,
            courseDomain: courseDomain,
            courseLevel: courseLevel,
            courseLink: courseLink
        });
        return NextResponse.json({success: true, data: course},{status: 200});
    }catch(error: any){
        throw new Error(error.message);
    }
}
