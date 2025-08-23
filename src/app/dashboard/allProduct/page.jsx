import React from 'react';


import { dbConnect, collectionsObj } from "@/lib/dbConnect";

const allProductPage = async () => {
    const productCollection = dbConnect(collectionsObj.productCollection);
    const product = await productCollection.find({}).toArray();
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>All Product</h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 justify-items-center'>
                    {product.map(product => (
                        <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                {product.image ? (
                                    <img src={product.image} alt={product.title || "Product Image"} />
                                ) : (
                                    <span className="text-gray-400">No Image</span>
                                )}
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title"><strong className='font-bold'>Product Name: </strong>{product.title || product.name}</h2>
                                <h3><strong className='font-bold'>Price:</strong> {product.price}</h3>
                                <p><strong className='font-bold'>Description:</strong> {product.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default allProductPage;