import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/connectDb";
import Course from "@/models/courseModal";


connect();

export async function POST(req: NextRequest) {
    const reqBody = await req.json();
    const { search } = reqBody;
    try {
        const list = await Course.find({ $text: { $search: search } });
        return NextResponse.json({
            status: 200,
            body: list
        });
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            body: {
                message: error.message
            }
        })
    }
}