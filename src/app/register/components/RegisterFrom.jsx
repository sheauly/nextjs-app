"use client";
const RegisterForm = () => {



    // Call API route to register user
    const registerUser = async ({ name, email, password }) => {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
        return res.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({ name, email, password });
    };

    return (
        <div className="flex justify-center items-center ">
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white rounded  space-y-3"
            >
                {/* name */}
                <label className="form-control w-full">
                    <div className="label w-full">
                        <span className="label-text font-bold">Name</span>
                    </div>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered w-full max-w-xs"
                        name="name"
                    />
                </label>

                {/* email */}
                <label className="form-control w-full">
                    <div className="label w-full">
                        <span className="label-text font-bold">Email</span>
                    </div>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered w-full max-w-xs"
                        name="email"
                    />
                </label>

                {/* password */}
                <label className="form-control w-full">
                    <div className="label w-full">
                        <span className="label-text font-bold">Password</span>
                    </div>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered w-full max-w-xs"
                        name="password"
                    />
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 mt-3 rounded hover:bg-blue-700"
                >
                    Register
                </button>
                <div className="flex flex-col items-center gap-2 mt-4">
                    <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
                    <a href="/login" className="text-blue-600 hover:underline text-sm">Sign up</a>
                </div>

            </form>
        </div>
    );
};

export default RegisterForm;
