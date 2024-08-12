import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/connectDb";
import User from "@/models/userModal.js";
import bcrypt from "bcryptjs";




connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const {
            name: name,
            email: email,
            password: password,
            clg: clg,
            branch: branch,
            GradYear: GradYear
        } = await reqBody;
        //check if user already exists
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }
        //create new user
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            clg: clg,
            branch: branch,
            GradYear: GradYear
        });
        const savedUser = await newUser.save();
        return NextResponse.json({ message: "User Registered" }, { status: 201 });

    } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}
