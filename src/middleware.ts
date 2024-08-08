import { NextResponse, NextRequest } from "next/server";
import path from "path";


export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    if(pathname === "/"){
        return NextResponse.redirect(new URL('/home', req.nextUrl));
    }
    const isPublic = (pathname === "/login" || pathname === "/home" || pathname === "/");
    const token = req.cookies.get("authToken")?.value;

    if(isPublic && token){
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }

    if (!isPublic && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
}

export const config = {
    matcher: [
        '/',
        '/home',
        '/login',
        '/dashboard',
    ]
}
