
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative h-[80vh] mt-3 flex items-center justify-start overflow-hidden ">
            {/* Background Image */}
            <Image
                src="/assets/banner.png"
                alt="Hospital Banner"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Overlay (dark shade) */}
            <div className=" bg-black/40"></div>

            {/* Left Content */}

        </section>
    );
};

export default Hero;
