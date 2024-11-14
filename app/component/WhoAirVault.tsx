import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

function WhoAirVault() {
    return (
        <div className="w-full max-h-fit">
            <div className="relative max-w-[1300px] mx-auto">
                <div className="absolute inset-0 mx-auto h-full z-0 overflow-hidden">
                    <img
                        src="/shadow.png"
                        alt="Shadow"
                        className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-overlay z-0"
                    />
                </div>

                <div className="relative z-10 pb-20 -mt-24 2xl:-mt-[120px]">
                    <div className="mx-4 md:mx-15">
                        {/* Heading */}
                        <div className="mt-24 mb-12">
                            <h1 className="pt-24 -mr-2 sm:-mr-0 pb-12 text-4xl md:text-5xl font-medium text-left md:text-center bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] text-transparent bg-clip-text">
                                Who is AirVault for?
                            </h1>
                        </div>

                        {/* Icons */}
                        <div className="2xl:mx-[210px]">
                            <div className="grid grid-cols-1 gap-[60px] md:place-items-center 2xl:grid-cols-3 2xl:gap-[100px] max-w-[1200px] mx-auto">
                                {/* Point 1 */}
                                <div className="md:mx-[262px] 2xl:mx-0">
                                    <div className="w-full">
                                        <div className="2xl:justify-start">
                                            <Image
                                                src="/icon1.svg"
                                                alt="icon1"
                                                height={48}
                                                width={48}
                                                className="mb-6"
                                            />
                                        </div>
                                        <p className="text-regular text-left 2xl:text-left text-2xl md:text-left text-[#F0F0F0] mb-3">
                                            Individuals
                                        </p>
                                        <p className="text-[#B6B6B8] 2xl:text-left text-left md:text-left text-regular text-base">
                                            Private storage separate from the
                                            internet
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div className="md:mx-[262px] 2xl:mx-0">
                                    <div className="w-full">
                                        <div className="2xl:justify-start">
                                            <Image
                                                src="/icon2.svg"
                                                alt="icon2"
                                                height={48}
                                                width={48}
                                                className="mb-6"
                                            />
                                        </div>
                                        <p className="text-regular 2xl:text-left text-left text-2xl md:text-left text-[#F0F0F0] mb-3">
                                            Creative teams
                                        </p>
                                        <p className="text-[#B6B6B8] 2xl:text-left text-left md:text-left text-regular text-base">
                                            High speed data sharing for
                                            collaborative work
                                        </p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div className="md:mx-[262px] 2xl:mx-0">
                                    <div className="w-full">
                                        <div className="2xl:justify-start">
                                            <Image
                                                src="/icon3.svg"
                                                alt="icon3"
                                                height={48}
                                                width={48}
                                                className="mb-6 md:justify-start"
                                            />
                                        </div>
                                        <p className="text-regular text-left 2xl:text-left text-2xl md:text-left text-[#F0F0F0] mb-3">
                                            Businesses
                                        </p>
                                        <p className="text-[#B6B6B8] text-left 2xl:text-left md:text-left text-regular text-base">
                                            Centralised storage for better
                                            organisation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="pt-14 mx-4 sm:pb-">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoAirVault;
