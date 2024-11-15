"use client";

import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DashboardCard() {
    const [cpu, setCpu] = useState(0);
    const [memory, setMemory] = useState(0);
    const [storage, setStorage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCpu(78);
            setMemory(12);
            setStorage(12);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const cardData = [
        {
            label: "CPU",
            percentage: cpu,
            detail: "1 of 4 used",
            icon: "/cpu-icon.svg",
            spec: "Processor",
            specValue: "4 cores",
        },
        {
            label: "Memory",
            percentage: memory,
            detail: "12 of 4 GiB used",
            icon: "/ram-icon.svg",
            spec: "RAM",
            specValue: "4GB",
        },
        {
            label: "Storage",
            percentage: storage,
            detail: "0.12 TB of 15 TB",
            icon: "/storage-icon.svg",
            spec: "Storage",
            specValue: "16TB",
        },
    ];

    return (
        <div className="flex justify-center items-start bg-gray-100 py-10 overflow-x-auto">
            <div className="flex space-x-16">
                {cardData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-80 flex-shrink-0"
                    >
                        {/* Circular Progress Bar */}
                        <div className="relative w-56 h-56 mb-4">
                            <CircularProgressbar
                                value={item.percentage}
                                styles={buildStyles({
                                    textSize: "0px", // Hide default text
                                    pathColor: "#3B82F6",
                                    trailColor: "#D1D5DB",
                                })}
                            />
                            {/* Custom text inside the circle */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-gray-900 text-3xl font-semibold">
                                    {item.percentage}%
                                </p>
                                <p className="text-gray-500 text-lg">
                                    {item.label}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                        {/* Icon and Spec Details */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={item.icon}
                                alt={item.spec}
                                className="w-10 h-10 mb-2"
                            />
                            <p className="text-gray-500 text-lg font-medium">
                                {item.spec}
                            </p>
                            <p className="text-gray-900 text-xl font-bold">
                                {item.specValue}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
