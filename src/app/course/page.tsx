import NavBar from "@/components/navbar";
import Footer from "@/components/footer";



export default function course(){
    return (
        <div>
            <NavBar />
            <div
            className="flex flex-col items-center justify-center gap-4 m-4"
            >
                <h1>Course Title</h1>
                <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <div>
                        <img
                        className="mb-4 w-full h-half object-cover rounded-md"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aBhloyMLx5qA6G6wSEi0s9AvDu1r7utrbQ&s" alt="Course Image" />
                        <button
                        className="mb-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >Start Tracking</button>
                        <p>
                            <strong>Course Link:</strong> <a 
                            className="text-blue-500 hover:underline"
                            href="https://www.google.com">Here</a><br />
                            <strong>Course Code:</strong> 123456<br />
                            <strong>Course By:</strong> Jack<br />
                            <strong>Course Duration:</strong> 6 hrs<br />
                            <strong>Course Fee:</strong> Free<br />
                            <strong>Course Level:</strong> Beginner<br />
                            <strong>Course Domain:</strong> CS<br />
                        </p>
                    </div>
                    <div>
                        <h2>Course Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque nec semper turpis. Nam auctor, nunc in bibendum 
                            ultricies, velit sapien tincidunt justo, nec lobortis 
                            libero nunc sed diam. Nullam auctor, nunc in bibendum 
                            ultricies, velit sapien tincidunt justo, nec lobortis 
                            libero nunc sed diam. Nullam auctor, nunc in bibendum 
                            ultricies, velit sapien tincidunt justo, nec lobortis 
                            libero nunc sed diam.
                        </p>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}