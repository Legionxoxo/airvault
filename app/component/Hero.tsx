"use client";
import { useEffect } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

function Hero() {
    useEffect(() => {
        // Dynamically load the DotLottie player script if needed
        const script = document.createElement("script");
        script.src =
            "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
        script.type = "module";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="w-full max-h-fit relative">
            {/* Lottie Animation */}
            <div className=" flex justify-center">
                <div className="absolute">
                    <dotlottie-player
                        src="https://lottie.host/fae072c8-88f0-46d6-8387-0c3e06982e05/ybo5X6q1ZV.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "100%", height: "100%" }}
                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <div className="mx-4 pt-4 md:pt-6 max-w-screen-lg lg:mx-auto">
                    <div>
                        <Logo />
                    </div>

                    <div className="mt-4 md:mt-28 2xl:mt-20 flex items-center justify-center mb-7 md:mb-10">
                        <Image
                            src="/pill.svg"
                            alt="logo"
                            width={170}
                            height={30}
                        />
                    </div>

                    {/* Text */}
                    <div className="sm:mx-10 max-w-[1024px] mx-auto">
                        <h1 className="text-4xl md:leading-tight md:text-7xl lg:leading-[1.2] lg:text-7xl font-medium text-center bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] text-transparent bg-clip-text">
                            The next-evolution in data storage is here
                        </h1>
                        <p className="text-base text-[#B6B6B8] text-center mt-5 font-light md:my-10 2xl:mt-10 max-w-[768px] mx-auto">
                            Stay ahead of the curb in data privacy and storage
                            by pre-ordering AirVault today!
                        </p>
                    </div>

                    {/* Button */}
                    <div className="mt-7 pb-40 flex justify-center">
                        <Button />
                    </div>

                    {/* Overlay effects */}
                    <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.15] blur-[100px] mix-blend-lighten"></div>
                    <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.1] blur-[150px] mix-blend-lighten"></div>
                    <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.05] blur-[200px] mix-blend-lighten"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
