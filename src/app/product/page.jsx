


import Link from 'next/link';
import React from 'react';
import { dbConnect, collectionsObj } from "@/lib/dbConnect";

const ProductPage = async () => {
    const productCollection = dbConnect(collectionsObj.productCollection);
    const product = await productCollection.find({}).toArray();
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>All Product</h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 '>
                    {product.map(product => (
                        <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><strong className='font-bold'>Product Name: </strong>{product.name}</h2>
                                <h3><strong className='font-bold'>Price:</strong> {product.price}</h3>
                                <p><strong className='font-bold'>Description:</strong> {product.description}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/product/${product._id}`} className="btn btn-primary">Details</Link>
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