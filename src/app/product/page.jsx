import React from 'react';

const products = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        description: "Latest Apple flagship with A16 Bionic chip and Dynamic Island.",
        price: "$1099",
        image: "https://i.ibb.co.com/j9mHn9kD/download.jpg",
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        description: "Powerful Android phone with Snapdragon 8 Gen 2 processor.",
        price: "$999",
        image: "https://i.ibb.co.com/SDLhfspd/download.jpg",
    },
    {
        id: 3,
        name: "Google Pixel 7",
        description: "Pure Android experience with Google Tensor chip.",
        price: "$799",
        image: "https://i.ibb.co.com/0p39bRLC/download.jpg",
    },
    {
        id: 4,
        name: "OnePlus 11",
        description: "Smooth OxygenOS experience with Snapdragon 8 Gen 2.",
        price: "$849",
        image: "https://i.ibb.co.com/JRxsgNcL/download.jpg",
    },
    {
        id: 5,
        name: "Xiaomi 13 Pro",
        description: "Leica camera system with Snapdragon 8 Gen 2 chip.",
        price: "$899",
        image: "https://i.ibb.co.com/JR4mBwtv/download.jpg",
    },
    {
        id: 6,
        name: "Sony Xperia 1 IV",
        description: "Professional-grade camera with 4K HDR OLED display.",
        price: "$1199",
        image: "https://i.ibb.co.com/4RDWBTvd/images.jpg",
    },
    {
        id: 7,
        name: "Oppo Find X6",
        description: "Premium design and Hasselblad-tuned cameras.",
        price: "$859",
        image: "https://i.ibb.co.com/bjhnBRrr/download.jpg",
    },
    {
        id: 8,
        name: "Vivo X90 Pro",
        description: "Zeiss optics with Dimensity 9200 processor.",
        price: "$799",
        image: "https://i.ibb.co.com/Q7S8qgV5/download.jpg",
    },
    {
        id: 9,
        name: "Realme GT Neo 5",
        description: "Affordable flagship killer with 240W charging.",
        price: "$599",
        image: "https://i.ibb.co.com/NRnCYTP/download.jpg",
    },
    {
        id: 10,
        name: "Asus ROG Phone 7",
        description: "Ultimate gaming phone with Snapdragon 8 Gen 2.",
        price: "$1099",
        image: "https://i.ibb.co.com/tp9Qsx47/images.jpg",
    },
    {
        id: 11,
        name: "Motorola Edge 40",
        description: "Curved display with MediaTek Dimensity 8020 chip.",
        price: "$699",
        image: "https://i.ibb.co.com/TDg2zxFz/images.jpg",
    },
    {
        id: 12,
        name: "Nothing Phone (2)",
        description: "Unique Glyph interface with Snapdragon 8+ Gen 1.",
        price: "$749",
        image: "https://i.ibb.co.com/39Bj85NX/images.jpg",
    },
];
const ProductPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Product page</h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 '>
                    {products.map(product => (
                        <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><strong className='font-bold'>Product Name: </strong>{product.name}</h2>
                                <h3><strong className='font-bold'>Price:</strong> {product.price}</h3>
                                <p><strong className='font-bold'>Description:</strong> {product.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;