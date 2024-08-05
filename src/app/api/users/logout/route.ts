import connect from "@/db/connectDb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal.js";

connect();
export async function POST(req: NextRequest) {
    try {
        const authToken = req.cookies.get("authToken")?.value;
        const user = await User.findOne({ authToken: authToken });
        if (!user) {
            return NextResponse.redirect(new URL('/login', req.nextUrl));
        }
        user.authToken = "";
        await user.save();
        const res = NextResponse.json({ success: true }, { status: 200 });
        res.cookies.set("authToken", "", {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return res;
    } catch (error: any) {
        throw new Error(error.message);
    }
}