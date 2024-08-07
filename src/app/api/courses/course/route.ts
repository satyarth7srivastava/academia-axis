import { NextResponse,NextRequest } from "next/server";
import connect from "@/db/connectDb";
import Course from "@/models/courseModal";

connect();

export async function POST(req: NextRequest){
    const reqBody = await req.json();
    const { id } = reqBody;
    if(!id){
        return NextResponse.json({message: "Cannot Find The Course"},{status: 404});
    }
    try {
        const course = await Course.findOne({_id: id});
        if(!course){
            return NextResponse.json({message: "Cannot Find The Course"},{status: 404});
        }
        return NextResponse.json({success: true, data: course},{status: 200});
    } catch (error: any) {
        throw new Error(error.message);
    }
}