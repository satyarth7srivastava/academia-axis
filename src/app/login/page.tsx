"use client"

import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import Loader from "@/components/loader"

import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { set } from "mongoose"


export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post("/api/users/login", data);
            const resData = res.data;
            if (resData.success) {
                router.push("/dashboard");
            } else {
                alert("Invalid Credentials");
            }
        } catch (error: any) {
            console.log(error.message);
            setError(error.message);
            setLoading(false);
        }
    }
    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                    flexDirection: "column"
                }}
            >
                <h1
                    style={{
                        marginBottom: "20px"
                    }}
                >Login</h1>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}
                >
                    <input
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="p-2 text-black"
                        type="text" placeholder="Username" />
                    <input
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSubmit(e);
                            } else {
                                return;
                            }
                        }}
                        className="p-2 text-black"
                        type="password" placeholder="Password" />
                    {error && <p className="border-2 rounded-lg p-2 border-red-800 text-red-800">Authentication Error</p>}
                    <button
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                    >Login</button>
                    <Link href="/signup"
                        className="text-blue-500"
                    >Register...</Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}