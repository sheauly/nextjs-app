import React from 'react';

const ProductDetailsPage = () => {
    const productCollection = dbConnect(collectionName.productCollection);
    const data = productCollection.find({}).toArray();
    return (
        <div className="w-11/12 mx-auto flex justify-center items-center mt-10">
            <div className="card w-96 bg-base-100 shadow-xl p-10">
                <img
                    src={singleProducts.image}
                    alt={singleProducts.name}
                    className="rounded-lg mb-4"
                />
                <p>
                    <strong>Product Name: </strong> {singleProducts.name}
                </p>
                <p>
                    <strong>Product Price: </strong> {singleProducts.price}
                </p>
                <p>
                    <strong>Product Description: </strong> {singleProducts.description}
                </p>
            </div>
        </div>

    );
};

export default ProductDetailsPage