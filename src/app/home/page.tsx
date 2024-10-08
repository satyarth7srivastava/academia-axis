import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

import Link from "next/link";


export default function HomePage() {
    return (
        <div>
            <NavBar />
            {/* try to add some min-height so that ut would look good */}
            <div 
            className="min-h-128"
            >
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
                {/* lets add a disclaimer in red bordered box */}
                <div
                className="border-2 border-red-800 text-red-800 p-2 rounded-lg text-center m-4 w-1/2 mx-auto"
                >
                    This is a demo project. It does not include any paid promotions or courses. All the courses are free to access.
                </div>
                <p
                    className="text-lg text-center mt-4"
                >Access various free courses to enhance your knowledge and skills.</p>
            </div>
            <Footer />
        </div>
    );
}