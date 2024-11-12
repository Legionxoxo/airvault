import Image from "next/image";
import React from "react";

function Logo() {
    return (
        <div className="pt-4 sm:pt-6 ml-4 md:ml-[80px] lg:ml-[80px] xl:-ml-20">
            <Image
                src="/logo.svg"
                alt="logo"
                width={32}
                height={32}
                className=""
            />
        </div>
    );
}

export default Logo;
