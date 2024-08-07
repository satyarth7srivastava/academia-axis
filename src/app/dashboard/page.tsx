"use client"

import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import Loader from "@/components/loader"

import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { list } from "postcss"

export default function dashboard() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [isLogged, setIsLogged] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        college: "",
        list: []
    });
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/api/users/data");
                const resData = res.data;
                setData({
                    ...data,
                    name: resData.name,
                    email: resData.email,
                    college: resData.clg
                });
                setIsLogged(true);
            } catch (error: any) {
                console.log(error.message);
                throw new Error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [])

    const logout = async () => {
        try {
            const res = await axios.post("/api/users/logout");
            console.log(res.data);
            const resData = res.data;
            if (resData.success) {
                router.push("/login");
                alert("Logged Out");
            } else {
                alert("Login Failed");
            }
        } catch (error: any) {
            console.log(error.message);
            throw new Error(error.message);
        }
    }

    if (loading) {
        return <Loader />
    }


    return (
        <div>
            <NavBar isLogged={isLogged}/>
            <h1
                className="text-4xl m-4 p-2"
            >Dashboard</h1>
            <div
                className="flex gap-10 items-center justify-center"
            >
                <p
                    className="text-lg"
                >Name: {data.name} </p>
                <p
                    className="text-lg"
                >Email: {data.email}</p>
                <p
                    className="text-lg"
                >College: {data.college}</p>
            </div>
            <div
            className="flex justify-center"
            >
                <button
                    onClick={logout}
                    className="bg-red-500 p-2 m-4 rounded-lg"
                >logout</button>
            </div>
            <Footer />
        </div>
    )
}