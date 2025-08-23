"use client";
import React, { useState } from 'react';

const AddPostPage = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescriptiont] = useState('');
    const [image, setImage] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { title, price, description, image };
        console.log(post);
        try {
            const response = await fetch('https://nextjs-app-omega-nine.vercel.app/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post)
            });
            const responseJson = await response.json();
            console.log(responseJson);

        } catch (error) {
            console.error('Error adding post:', error);
        }
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    };

    return (
        <div className='w-11/12 max-w-md mx-auto py-10'>
            <h1 className='text-2xl font-bold mb-6 text-center'>Add Post</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor="image" className='block mb-1 font-semibold'>Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className='w-full p-2 border rounded'
                    />
                    {image && (
                        <img src={image} alt="image" className='mt-2 max-h-40 rounded' />
                    )}
                </div>
                <div>
                    <label htmlFor="title" className='block mb-1 font-semibold'>Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full p-2 border rounded'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price" className='block mb-1 font-semibold'>Price:</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='w-full p-2 border rounded'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className='block mb-1 font-semibold'>Description</label>
                    <textarea
                        id="content"
                        value={description}
                        onChange={(e) => setDescriptiont(e.target.value)}
                        className='w-full p-2 border rounded'
                        rows={5}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddPostPage;
