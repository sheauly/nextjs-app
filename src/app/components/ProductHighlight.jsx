import React from 'react';
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "Galaxy",
        price: "$2099",
        description: "The SmartPhone is a cutting-edge mobile device designed to deliver top-notch performance and convenience. "
            + "Equipped with a powerful processor and generous storage, it ensures smooth multitasking, gaming, and app usage. ",
        image: "https://i.ibb.co.com/j9mHn9kD/download.jpg"
    },
    {
        id: 2,
        name: "Symphony",
        price: "$2999",
        description: "The AndroidPhone is a reliable and feature-rich smartphone designed to meet all your daily needs. "
            + "It comes with a fast processor and ample storage, ensuring smooth performance across apps, games, and multitasking. ",
        image: "https://i.ibb.co.com/SDLhfspd/download.jpg"
    },
    {
        id: 3,
        name: "HeyxFomer",
        price: "$1799",
        description: "Who Is This Mobile Phone Suitable For: If you enjoy downloading many apps or you are a gamer, we are sorry this cellphone isn’t very suitable for you. Maximum of 3 apps can run simultaneously.",
        image: "https://i.ibb.co.com/0p39bRLC/download.jpg"
    },
    {
        id: 4,
        name: "Gionee X1",
        price: "$2849",
        description: "The Gionee X1 is designed to offer a seamless mobile experience with its powerful processor "
            + "and optimized software. It comes with a vibrant display that delivers sharp visuals for videos, games, ",
        image: "https://i.ibb.co.com/JRxsgNcL/download.jpg"
    },
    {
        id: 5,
        name: "Sharp Android",
        price: "$3899",
        description: "The Sharp Android is a versatile and reliable smartphone built for efficiency and performance. "
            + "It features a fast processor, ample storage, and a long-lasting battery, making it ideal for both work ",
        image: "https://i.ibb.co.com/JR4mBwtv/download.jpg"
    },
    {
        id: 6,
        name: "Vivo V1",
        price: "$1199",
        description: "The Vivo V1 is a high-performance smartphone designed for both style and functionality. "
            + "It comes with a powerful processor, long-lasting battery, and a stunning display that ensures ",
        image: "https://i.ibb.co.com/4RDWBTvd/images.jpg"
    }
]

const ProductHighlight = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-3xl font-bold text-center mb-6'>Product Highlight</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 '>
                {
                    products.map(product => (
                        <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={product.image} alt={product.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <strong className='font-bold'>Product Name: </strong>{product.name}
                                </h2>
                                <h3><strong className='font-bold'>Price:</strong> {product.price}</h3>
                                <p><strong className='font-bold'>Description:</strong> {product.description}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/products/${product.id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductHighlight;
