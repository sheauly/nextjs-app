"use client";
import React, { useState } from "react";
import RegisterFrom from "./components/RegisterFrom";

const registerPage = () => {


    return (
        <div className="flex justify-center items-center w-11/12 mx-auto p-10 bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-bold text-center mb-6">Welcome To Register Page</h2>
                <RegisterFrom></RegisterFrom>
            </div>
        </div>
    );
};

export default registerPage;
