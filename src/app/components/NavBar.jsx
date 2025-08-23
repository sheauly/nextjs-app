"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-11/12 mx-auto mt-4 ">
            <nav className="flex justify-between items-center p-4 rounded-xl bg-gray-600 text-white">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold tracking-wide">
                    <span className="text-white">Mobile</span>
                    <span className="text-yellow-300">Hub</span>
                </Link>

                {/* Navigation Links */}
                <div className="space-x-4 text-lg">
                    <Link href="/">Home</Link>
                    <Link href="/addPost">addPost</Link>
                    <Link href="/product">Product</Link>
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="bg-green-600 px-4 py-2 rounded"
                    >
                        Dashboard
                    </button>
                    <Link href="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
                    <Link href="/register" className="bg-blue-500 px-4 py-2 rounded">Register</Link>
                </div>
            </nav>

            {/* Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="w-64 bg-gray-800 text-white h-full p-6 flex flex-col gap-4 shadow-lg">
                        <button
                            className=" text-2xl mb-4 hover:text-red-400"
                            onClick={() => setSidebarOpen(false)}
                        >

                            <Link href="/" className="text-2xl font-extrabold tracking-wide">
                                <span className="text-white">Mobile</span>
                                <span className="text-yellow-300">Hub</span>
                            </Link>
                        </button>
                        {/* Logo */}

                        <Link href="/dashboard/add-product" className="hover:underline">Add Product</Link>
                        <Link href="/dashboard/products" className="hover:underline">All Products</Link>
                        <Link href="/dashboard/profile" className="hover:underline">Profile</Link>
                        {/* Add more sidebar links here */}
                    </div>
                    <div
                        className="flex-1 "
                        onClick={() => setSidebarOpen(false)}
                    />
                </div>
            )}
        </div>
    );
}
