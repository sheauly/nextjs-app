import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// You must have your NextAuth config here:
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AddProductPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    // Add product form goes here
    return (
        <div className="w-11/12 max-w-md mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-1 font-semibold">Title:</label>
                    <input type="text" id="title" className="w-full p-2 border rounded" required />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-1 font-semibold">Price:</label>
                    <input type="text" id="price" className="w-full p-2 border rounded" required />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-1 font-semibold">Description:</label>
                    <textarea id="description" className="w-full p-2 border rounded" rows={5} required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
            </form>
        </div>
    );
}
