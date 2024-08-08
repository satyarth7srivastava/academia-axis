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
        list: [{
            _id: "",
            name: "",
            link: ""
        }]
    });
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/api/users/data");
                const resData = res.data;
                setData({
                    name: resData.name,
                    email: resData.email,
                    college: resData.clg,
                    list: resData.list
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
    const enrollList = data.list.map((course) => {
        return (
            <div
                key={course._id}
                className="flex flex-col items-center border-2 border-gray-300 rounded-lg background-gray-100 justify-space-between"
            >
                <p
                    className="text-xl m-4 p-2"
                >{course.name}</p>
                <a
                    href={course.link}
                    className="text-xl m-4 p-2"
                >{(course.link)?"Learn":""}</a>
            </div>
        )
    });

    if (loading) {
        return <Loader />
    }


    return (
        <div>
            <NavBar isLogged={isLogged} />
            <h1
                className="text-4xl m-4 p-2"
            >Dashboard</h1>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <div
                    className="flex flex-col items-center"
                >
                    <h1
                        className="text-2xl m-4 p-2"
                    >Welcome {data.name}</h1>
                    <h1
                        className="text-2xl m-4 p-2"
                    >Email: {data.email}</h1>
                    <h1
                        className="text-2xl m-4 p-2"
                    >College: {data.college}</h1>
                    <button
                        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={logout}
                    >Logout</button>
                </div>
                <div>
                    <h1
                        className="text-2xl m-4 p-2"
                    >Courses Enrolled</h1>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2"
                    >
                    {enrollList}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}