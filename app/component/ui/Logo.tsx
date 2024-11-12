import Image from "next/image";
import React from "react";

function Logo() {
    return (
        <div>
            <div className="pt-4 sm:pt-6 ml-4 md:ml-10 lg:ml-10 2xl:-ml-16">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={32}
                    height={32}
                    className=""
                />
            </div>
        </div>
    );
}

export default Logo;
