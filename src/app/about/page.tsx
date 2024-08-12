"use client"

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
    const uri = process.env.PROFILE_URI;
    return (
        <div> 
            <NavBar />
            <main className="max-w-4xl mx-auto p-6 text-black">
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Meet Our Founder</h2>
                    <div className="flex items-center">
                        <img src={uri} alt="Satyarth Srivastava" className="w-24 h-24 rounded-full mr-4" />
                            <div>
                                <h3 className="text-xl font-bold">Satyarth Srivastava</h3>
                                <p className="leading-relaxed">
                                    Satyarth Srivastava is a B.Tech student at NIT Patna, specializing in Electronics and Communication Engineering. He has a deep interest in technology and education, with expertise in MERN Stack, Next.js, Blockchain, DSA, and Machine Learning. Driven by his passion for learning, Satyarth created Academia Axis to bridge the gap between learners and the vast array of online educational resources.
                                </p>
                                <a href="mailto:satyarthsrivastava7@gmail.com" className="text-blue-600 hover:underline">satyarthsrivastava7@gmail.com</a><br/>
                                    <a href="https://www.linkedin.com/in/satyarth-srivastava-61699028a" className="text-blue-600 hover:underline">LinkedIn Profile</a>
                            </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}