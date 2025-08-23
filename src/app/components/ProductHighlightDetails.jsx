// pages/products/[id].js
import { useRouter } from "next/router";

const products = [
    {
        id: 1,
        name: "Galaxy",
        price: "$2099",
        description: "The SmartPhone is a cutting-edge mobile device designed to deliver top-notch performance and convenience.",
        image: "https://i.ibb.co.com/j9mHn9kD/download.jpg"
    },
    {
        id: 2,
        name: "Symphony",
        price: "$2999",
        description: "The AndroidPhone is a reliable and feature-rich smartphone designed to meet all your daily needs.",
        image: "https://i.ibb.co.com/SDLhfspd/download.jpg"
    },
    {
        id: 3,
        name: "HeyxFomer",
        price: "$1799",
        description: "Who Is This Mobile Phone Suitable For: If you enjoy downloading many apps or you are a gamer...",
        image: "https://i.ibb.co.com/0p39bRLC/download.jpg"
    },
    {
        id: 4,
        name: "Gionee X1",
        price: "$2849",
        description: "The Gionee X1 is designed to offer a seamless mobile experience with its powerful processor.",
        image: "https://i.ibb.co.com/JRxsgNcL/download.jpg"
    },
    {
        id: 5,
        name: "Sharp Android",
        price: "$3899",
        description: "The Sharp Android is a versatile and reliable smartphone built for efficiency and performance.",
        image: "https://i.ibb.co.com/JR4mBwtv/download.jpg"
    },
    {
        id: 6,
        name: "Vivo V1",
        price: "$1199",
        description: "The Vivo V1 is a high-performance smartphone designed for both style and functionality.",
        image: "https://i.ibb.co.com/4RDWBTvd/images.jpg"
    }
];

const ProductHighlightDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2 className="text-center text-red-500 mt-10">Product Not Found</h2>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <h2 className="text-lg font-semibold mt-2">Price: {product.price}</h2>
            <p className="mt-3 text-gray-700">{product.description}</p>
        </div>
    );
};

export default ProductHighlightDetails;
