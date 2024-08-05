import Link from "next/link"

export default function NavBar(porps: any) {
    const isLogged = porps.isLogged;
    return (
        <div
            className="bg-green-400 p-4 flex justify-between items-center text-black"
        >
            <h1
                className="text-2xl font-bold cursor-pointer"
            >
                <Link href="/home">
                    Academia Axis
                </Link>

            </h1>
            <nav>
                <ul
                    className="flex space-x-3 text-lg cursor-pointer"
                >
                    <li>
                        <Link href="/search">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link href={(!isLogged ? "/login" : "/dashboard")}>
                            {(isLogged ? "Dashboard" : "Login")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}