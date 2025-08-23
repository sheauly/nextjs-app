import React from 'react';
import { signIn } from "next-auth/react";

const SocialLogin = () => {
    const handleSocialLogin = async (providerName) => {
        const result = await signIn(providerName, { redirect: false });
        console.log(result);
    };
    return (
        <div>
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-3"
                onClick={() => handleSocialLogin("google")}
            >
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17_40)"><path d="M47.532 24.552c0-1.636-.146-3.2-.418-4.704H24.48v9.02h13.02c-.528 2.84-2.12 5.24-4.52 6.86v5.68h7.32c4.28-3.94 6.73-9.74 6.73-16.856z" fill="#4285F4" /><path d="M24.48 48c6.12 0 11.26-2.04 15.01-5.54l-7.32-5.68c-2.04 1.36-4.66 2.18-7.69 2.18-5.91 0-10.92-3.99-12.72-9.36H4.24v5.82C7.98 43.98 15.62 48 24.48 48z" fill="#34A853" /><path d="M11.76 29.6c-.48-1.36-.76-2.8-.76-4.28s.28-2.92.76-4.28v-5.82H4.24A23.97 23.97 0 0 0 0 24.48c0 3.98.96 7.76 2.64 11.08l7.32-5.82z" fill="#FBBC05" /><path d="M24.48 9.52c3.34 0 6.32 1.14 8.68 3.38l6.48-6.48C35.74 2.04 30.6 0 24.48 0 15.62 0 7.98 4.02 4.24 10.18l7.32 5.82c1.8-5.37 6.81-9.36 12.72-9.36z" fill="#EA4335" /></g><defs><clipPath id="clip0_17_40"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;