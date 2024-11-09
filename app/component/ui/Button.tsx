"use client";

import { useState } from "react";

function Button() {
    // State to track if the button is pressed
    const [isPressed, setIsPressed] = useState(false);

    // Function to handle the button press
    const handlePress = () => {
        setIsPressed(true);
    };

    return (
        <div className="w-full flex justify-center">
            <button
                onMouseDown={handlePress}
                disabled={isPressed}
                className={`
                    w-full 
                    md:w-52
                    py-2 
                    px-4 
                    text-white 
                    font-medium 
                    text-lg 
                    rounded-md 
                    transition-all 
                    duration-300
                    shadow-[0_4px_9px_-4px_rgba(0,0,0,0.35)]
                    hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.25)]
                    
                    ${
                        isPressed
                            ? "bg-gradient-to-r from-[#E05D2D] to-[#CC4C1D] cursor-not-allowed opacity-90"
                            : "bg-gradient-to-r from-[#FF6A33] to-[#FF4C0A] hover:from-[#FA7646] hover:to-[#F55E27]"
                    }
                `}
            >
                Pre-order now
            </button>
        </div>
    );
}

export default Button;
