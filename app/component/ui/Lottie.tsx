"use client";
import { useEffect } from "react";

export default function Lottie() {
    useEffect(() => {
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
        <div className="w-full h-full flex">
            <dotlottie-player
                src="https://lottie.host/fae072c8-88f0-46d6-8387-0c3e06982e05/ybo5X6q1ZV.json"
                background="transparent"
                speed="1"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                loop
                autoplay
            ></dotlottie-player>
        </div>
    );
}
