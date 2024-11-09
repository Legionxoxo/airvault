import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

function Hero() {
    return (
        <div className="w-full max-h-fit ">
            <div className="bg-cover bg-[url('/finalmobilelines.svg')] md:bg-[url('/finalpadlines.svg')] 2xl:bg-[url('/finaltvlines.svg')] 2xl:mx-[150px]">
                <div className="mx-4 pt-4 md:pt-6 ">
                    <div className="2xl:-ml-16 sm:ml-10">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={32}
                            height={32}
                            className=""
                        />
                    </div>
                    <div className="mt-10 md:mt-24 2xl:mt-20 flex items-center justify-center mb-7 md:mb-10">
                        <Image
                            src="/pill.svg"
                            alt="logo"
                            width={170}
                            height={30}
                            className=""
                        />
                    </div>
                    {/* Text */}
                    <div className="sm:mx-10">
                        <h1 className="text-4xl md:leading-tight md:text-7xl font-medium text-center bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] text-transparent bg-clip-text ">
                            The next-evolution in data storage is here
                        </h1>
                        <p className="text-base text-[#B6B6B8] text-center mt-4  font-light md:my-10 2xl:mt-10">
                            Stay ahead of the curb in data privacy and storage
                            by pre-ordering AirVault today!
                        </p>
                    </div>
                    {/* Button */}
                    <div className="mt-7 pb-40">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
