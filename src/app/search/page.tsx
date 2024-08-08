"use client"

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";


import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link";


export default function SearchPage() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.post("/api/courses/getAllCourses", { search: (search) ? search : "bug" });
                console.log(data);
                const objs = data.body.map((item: any) => {
                    let desc = item.courseDescription;
                    var trimmedString = desc.substring(0, 80);
                    return(
                        <li
                        key={item._id}
                        className="bg-gray-300 w-full rounded-lg" >
                            <div className="grid grid-cols-2">
                                <div className="text-left text-gray-800 p-4">
                                    <h1 className="text-2xl">{item.courseName}</h1>
                                    <p>{trimmedString}</p>
                                </div>
                                <div>
                                    <img
                                        className="w-full h-48 object-cover rounded-lg p-4"
                                        src={item.courseImage} alt="" />
                                </div>
                                <div
                                    className="text-right p-4 grid grid-cols-2 items-center text-black"
                                >
                                    <Link
                                    className="bg-blue-700 text-white p-2 m-4 rounded-lg text-center"
                                    href={`/course/?id=${item._id}`}>View Course</Link>
                                    <div
                                    className="text-right"
                                    >
                                        {item.coursePrice}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
                setResults(objs);
            } catch (error: any) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [search]);

    const handleChange = (e: any) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <NavBar />
            <div className="container mx-auto m-4 text-black">
                <div className="flex justify-center p-4">
                    <input
                        type="text"
                        placeholder="Search for a course"
                        className="w-1/2 p-4 border-2 border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>
                <ul
                    className="grid gap-4 grid-row-3 grid-cols-1 lg:grid-cols-3"
                >
                    {results}
                </ul>
            </div>
            <Footer />
        </div>
    )
}