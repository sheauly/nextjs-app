import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-11/12 mx-auto mt-4 ">
            <nav className="flex justify-between items-center p-4 rounded-xl bg-gray-600 text-white">
                {/* Hospital Name as Logo */}
                <Link href="/" className="text-2xl font-extrabold tracking-wide">
                    <span className="text-white">Medi</span>
                    <span className="text-yellow-300">Care</span>
                </Link>

                {/* Navigation Links */}
                <div className="space-x-4 text-lg">
                    <Link href="/">Home</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/doctors">Doctors</Link>
                    <Link href="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
}
