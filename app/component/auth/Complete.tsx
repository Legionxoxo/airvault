import Image from "next/image";
import React from "react";

const Complete = () => {
    return (
        <div className="min-h-fit">
            <div className="flex items-center justify-center pt-44">
                <Image
                    src="/greentick.svg"
                    alt="green Tick"
                    height={68}
                    width={68}
                />
            </div>
            {/*  text */}
            <div className="text-center mt-2">
                <h1 className="text-[#44475B] text-2xl font-semibold ">
                    Password reset
                </h1>
                <p className="mt-2 text-[#8C8FA3] text-base">
                    Your password has been successfully reset.
                    <span className="block">Click below to login.</span>
                </p>
            </div>
            {/* Button */}
            <div className="flex items-center justify-center mt-6">
                <a href="/login">
                    <button className="py-3 px-12 bg-[#298DFF] rounded-lg font-medium text-white ">
                        Continue
                    </button>
                </a>
            </div>
            <a href="/login">
                <p className="text-center text-sm text-[#298DFF] font-medium mt-3">
                    &lt; {"  "} Back to login
                </p>
            </a>
        </div>
    );
};

export default Complete;
