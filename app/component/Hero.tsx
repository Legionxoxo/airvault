import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

function Hero() {
    return (
        <div className="w-full max-h-fit relative">
            <div
                className="bg-cover bg-[url('/finalmobilelines.svg')] 
        md:bg-[url('/finalpadlines.svg')] 
        2xl:bg-[url('/finaltvlines.svg')]  max-w-[1200px] mx-auto"
            >
                <div className="mx-4 pt-4 md:pt-6 max-w-screen-lg lg:mx-auto">
                    <div className="">
                        <Logo />
                    </div>

                    <div className="mt-4 md:mt-28 2xl:mt-20 flex items-center justify-center mb-7 md:mb-10">
                        <Image
                            src="/pill.svg"
                            alt="logo"
                            width={170}
                            height={30}
                            className=""
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

                    {/* Overlay effect */}
                    <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.15] blur-[100px] mix-blend-lighten"></div>
                    <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.1] blur-[150px] mix-blend-lighten"></div>
                    <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.05] blur-[200px] mix-blend-lighten"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
