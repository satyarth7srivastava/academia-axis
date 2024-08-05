import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/connectDb";
import User from "@/models/userModal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email: email, password: password } = await reqBody;
        //check if user already exists or not
        const user = await User.findOne({ email: email });
        if (!user) {
            //false cookie
            const res = NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
            res.cookies.set("authToken", "", {
                httpOnly: true,
                sameSite: "strict",
                secure: true,
            });
            return res;
        }
        //check if password is correct
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            //false cookie
            const res = NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
            res.cookies.set("authToken", "", {
                httpOnly: true,
                sameSite: "strict",
                secure: true,
            });
            return res;
        }
        //create token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET!, {expiresIn: "1d"});
        //set the token
        user.authToken = token;
        await user.save();
        const res = NextResponse.json({ success:true }, { status: 200 });
        res.cookies.set("authToken", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return res;
    } catch (error: any) {
        throw new Error(error.message);
    }
}