import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

import Link from "next/link";


export default function HomePage() {
    return (
        <div>
            <NavBar />
            <h1 
            className="text-4xl text-center mt-8"
            >Best Free Resources</h1>
            <h2
            className="text-2xl text-center mt-4"
            >Your One-Stop Solution for Learning</h2>
            <Link href="/search"
            className="text-center mt-4 block text-blue-500 border border-blue-500 rounded-lg p-2 w-1/4 mx-auto on-hover-bg-blue-300 on-hover-text-white"
            >
               Explore Courses
            </Link>
            <Link href="/login"
            className="text-center mt-4 block text-blue-500 border border-blue-500 rounded-lg p-2 w-1/4 mx-auto on-hover-bg-blue-300 on-hover-text-white"
            >
                Login To Continue learning
            </Link>
            <p
            className="text-lg text-center mt-4"
            >Access various free courses to enhance your knowledge and skills.</p>
            <Footer />
        </div>
    );
}