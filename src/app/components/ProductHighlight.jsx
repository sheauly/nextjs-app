"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ProductHighlight = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data.productCollection || []));
    }, []);

    return (
        <div className='mt-4'>
            <h1 className='text-3xl font-bold text-center mb-6'>Product Highlight</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 '>
                {
                    products.slice(0, 6).map(product => (
                        <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={product.image} alt={product.title || product.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <strong className='font-bold'>Product Name: </strong>{product.title || product.name}
                                </h2>
                                <h3><strong className='font-bold'>Price:</strong> {product.price}</h3>
                                <p><strong className='font-bold'>Description:</strong> {product.description}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/product/${product._id}`}>
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