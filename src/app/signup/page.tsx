"use client";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Braah_One } from "next/font/google";


export default function SignupPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    clg: "",
    branch: "",
    GradYear: "",
  });
  const router = useRouter();
  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const date = new Date();
    if (parseInt(data.GradYear) < date.getFullYear()) {
      alert("Graduation year should be greater than current year");
      return;
    }
    try {
      const res = await axios.post("/api/users/signup", data);
      if (res.status === 201) {
        alert("User Registered");
        router.push("/login");
      } else {
        alert("User already exists with that email");
      }

    } catch (error: any) {
      alert("Error :: User already exists with that email");
      throw new Error(error);
    }
  }
  return (
    <div>
      <NavBar />
      <div
        className="flex flex-col items-center justify-center gap-4 m-4"
      >
        <h1>Signup Page</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            name="name"
            onChange={handleChange}
            value={data.name}
            className="p-2 rouned-md border border-gray-300 text-black"
            type="text" placeholder="Name" />
          <input
            name="email"
            onChange={handleChange}
            value={data.email}
            className="p-2 rouned-md border border-gray-300 text-black"
            type="email" placeholder="Email" />
          <input
            name="clg"
            onChange={handleChange}
            value={data.clg}
            className="p-2 rouned-md border border-gray-300 text-black"
            type="text" placeholder="College/School Name" />
          <input
            name="branch"
            onChange={handleChange}
            value={data.branch}
            className="p-2 rouned-md border border-gray-300 text-black"
            type="text" placeholder="Branch" />
          <input
            name="GradYear"
            onChange={handleChange}
            value={data.GradYear}
            className="p-2 rouned-md border border-gray-300 text-black"
            type="text" placeholder="Graduation Year" />
          <input
            name="password"
            onChange={handleChange}
            value={data.password}
            className="p-2 rouned-md border border-gray-300 text-black"
            type="password" placeholder="Password" />
          <input
            name="confirmPassword"
            onChange={handleChange}
            value={data.confirmPassword}
            className="p-2 rouned-md border border-gray-300 text-black"
            type="password" placeholder="Confirm Password" />
          <button
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            type="submit">Signup</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}