import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/connectDb";
import User from "@/models/userModal.js";


connect();

export async function GET(req: NextRequest){
    try {
        const authToken = req.cookies.get("authToken")?.value;
        const user = await User.findOne({authToken: authToken});
        if(!user){
            return NextResponse.redirect(new URL('/login', req.nextUrl));
        }
        const res = NextResponse.json({
            name: user.name,
            email: user.email,
            clg: user.clg
        }, { status: 200 });
        return res;

    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
    }
}

