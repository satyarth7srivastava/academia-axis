"use client"

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Loader from "@/components/loader";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";




export default function course(){
    const id = useSearchParams().get("id");
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState({
        courseName: "",
        courseDescription: "",
        courseDuration: "",
        courseInstructor: "",
        coursePrice: "",
        courseRating: "",
        courseImage: "",
        courseLevel: "",
        courseDomain: "",
        courseLink: ""
    });
    const [error, setError] = useState("");
    useEffect(() => {
        const getCourse = async () => {
            try {
                setLoading(true);
                const res = await axios.post("/api/courses/course", { id: id });
                const resData = res.data;
                setCourseData({
                    ...courseData,
                    courseName: resData.data.courseName,
                    courseDescription: resData.data.courseDescription,
                    courseDuration: resData.data.courseDuration,
                    courseInstructor: resData.data.courseInstructor,
                    coursePrice: resData.data.coursePrice,
                    courseRating: resData.data.courseRating,
                    courseImage: resData.data.courseImage,
                    courseLevel: resData.data.courseLevel,
                    courseDomain: resData.data.courseDomain,
                    courseLink: resData.data.courseLink
                });
            } catch (error: any) {
                console.log(error.message);
                setError(error.message);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1400)
            }
        }
        getCourse();
    }, [])
    if(loading){
        return <Loader />
    }
    if(error){
        return <h1>{error} <br /> 404 = Course Not Found</h1>
    }

    return (
        <div>
            <NavBar isLogged = {true}/>
            <div
            className="flex flex-col items-center justify-center gap-4 m-4"
            >
                <h1>{courseData.courseName}</h1>
                <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <div>
                        <img
                        className="mb-4 w-full h-half object-cover rounded-md"
                        src = {courseData.courseImage} alt="Course Image" />
                        <button
                        className="mb-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >Start Tracking</button>
                        <p>
                            <strong>Course Link:</strong> <a 
                            className="text-blue-500 hover:underline"
                            href={courseData.courseLink}>Here</a><br />
                            <strong>Course Rating:</strong> {courseData.courseRating} / 10<br />
                            <strong>Course By:</strong> {courseData.courseInstructor}<br />
                            <strong>Course Duration:</strong> {courseData.courseDuration} hrs<br />
                            <strong>Course Fee:</strong> {courseData.coursePrice}<br />
                            <strong>Course Level:</strong> {courseData.courseLevel}<br />
                            <strong>Course Domain:</strong> {courseData.courseDomain}<br />
                        </p>
                    </div>
                    <div>
                        <h2>Course Description</h2>
                        <p>
                            {courseData.courseDescription}
                        </p>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}