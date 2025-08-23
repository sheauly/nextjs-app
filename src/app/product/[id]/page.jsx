import React from 'react';
import { dbConnect, collectionsObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const ProductDetailsPage = async ({ params }) => {
    const productCollection = dbConnect(collectionsObj.productCollection);
    const singleProduct = await productCollection.findOne({ _id: new ObjectId(params.id) });
    if (!singleProduct) {
        return <div className="w-11/12 mx-auto mt-10 text-center">Product not found</div>;
    }
    return (
        <div className="w-11/12 mx-auto flex justify-center items-center mt-10">
            <div className="card w-96 bg-base-100 shadow-xl p-10">
                {singleProduct.image && (
                    <img
                        src={singleProduct.image}
                        alt={singleProduct.title || singleProduct.name}
                        className="rounded-lg mb-4"
                    />
                )}
                <p>
                    <strong>Product Name: </strong> {singleProduct.title || singleProduct.name}
                </p>
                <p>
                    <strong>Product Price: </strong> {singleProduct.price}
                </p>
                <p>
                    <strong>Product Description: </strong> {singleProduct.description}
                </p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;