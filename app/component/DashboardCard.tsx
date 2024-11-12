"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

const DashboardCard = () => {
    const [cpu, setCpu] = useState(0);
    const [memory, setMemory] = useState(0);
    const [storage, setStorage] = useState(0);

    useEffect(() => {
        // Simulate progress bar loading animation
        const timer = setTimeout(() => {
            setCpu(78);
            setMemory(12);
            setStorage(12);
        }, 200); // Delay for smooth animation
        return () => clearTimeout(timer);
    }, []);

    const cardData = [
        {
            label: "CPU",
            percentage: cpu,
            detail: "1 of 4 used",
            icon: "/icons/cpu-icon.svg", // Dummy icon path
            spec: "Processor",
            specValue: "4 cores",
        },
        {
            label: "Memory",
            percentage: memory,
            detail: "12 of 4 GiB used",
            icon: "/icons/ram-icon.svg", // Dummy icon path
            spec: "RAM",
            specValue: "4GB",
        },
        {
            label: "Storage",
            percentage: storage,
            detail: "0.12 TB of 15 TB",
            icon: "/icons/storage-icon.svg", // Dummy icon path
            spec: "Storage",
            specValue: "16TB",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-8">
            {cardData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-40 h-40">
                        <CircularProgressbar
                            value={item.percentage}
                            text={`${item.percentage}%`}
                            styles={buildStyles({
                                textColor: "#374151",
                                pathColor: "#3b82f6",
                                trailColor: "#e5e7eb",
                                textSize: "18px",
                            })}
                        />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">
                        {item.label}
                    </h2>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                    <div className="mt-4 flex flex-col items-center">
                        <img
                            src={item.icon}
                            alt={item.spec}
                            className="w-6 mb-2"
                        />
                        <p className="text-gray-700 font-medium">{item.spec}</p>
                        <p className="text-blue-500 font-semibold">
                            {item.specValue}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardCard;
