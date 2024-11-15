import Image from "next/image";
import React from "react";

//dummy version details
const versionDetails = [
    {
        version: "AV version 0.0.1",
        heading: "A newer version is on the line",
        subHeading: "Please update to get new features.",
        label: "What's new in v0.0.2",
        points: [
            {
                point1: "Upgraded storage",
                point2: "Remote connectivity",
                point3: "Interactive care guides",
                point4: "Smart connectivity",
                point5: "Up to 4 users",
            },
        ],
    },
];

function Version() {
    return (
        <div className="pt-10">
            <div className="flex items-center justify-center mb-2">
                <Image
                    src="/versionicon.svg"
                    alt="version"
                    height={72}
                    width={72}
                />
            </div>

            <div className="text-center">
                {versionDetails.map((item) => (
                    <div key={item.heading}>
                        <div className="text-[#8C8FA3] font-medium text-sm mb-6">
                            {item.version}
                        </div>

                        <div className="text-[#44475B] text-2xl font-semibold mb-2">
                            {item.heading}
                        </div>
                        <div className="text-[#8C8FA3] text-base mb-4">
                            {" "}
                            {item.subHeading}
                        </div>
                        <div className="text-[#8C8FA3] mb-2 text-base">
                            {item.label}
                        </div>
                        <div className="text-center">
                            {item.points.map((point, pointIndex) => (
                                <div
                                    key={`point-${pointIndex}`}
                                    className="mb-2"
                                >
                                    {Object.entries(point).map(
                                        ([key, pt], index) => (
                                            <div
                                                key={`${key}-${index}`}
                                                className="ml-44 flex items-start justify-center mb-1"
                                            >
                                                <div className="flex items-center justify-start max-w-xs w-full">
                                                    <span className="text-gray-400 mr-2">
                                                        •
                                                    </span>
                                                    <span className="text-gray-400 text-sm">
                                                        {pt}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Version;
