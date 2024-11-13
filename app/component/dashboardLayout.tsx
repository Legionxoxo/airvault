"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
    { name: "Dashboard", path: "/dashboard/userdashboard", icon: "grid" },
    {
        name: "Accounts",
        path: "/dashboard/accounts",
        icon: "user",
        submenu: [
            { name: "Users", path: "/dashboard/accounts/users" },
            { name: "Groups", path: "/dashboard/accounts/" },
        ],
    },
    { name: "Directory", path: "/dashboard/directory", icon: "database" },
    {
        name: "Network Shares",
        path: "/dashboard/network-shares",
        icon: "share",
    },
    { name: "Protection", path: "/dashboard/protection", icon: "shield" },
    {
        name: "Version Update",
        path: "/dashboard/version-update",
        icon: "arrow-up-circle",
    },
];

const logoutItem = { name: "Logout", path: "/login", icon: "log-out" };

// Helper function to return SVG icons
const renderIcon = (icon: string) => {
    switch (icon) {
        case "grid":
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
            );
        case "user":
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            );
        case "database":
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
            );
        case "share":
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342a3 3 0 110-2.684l6.632-3.316a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684L8.684 13.342zm0 2.684l6.632 3.316m0 0a3 3 0 105.368-2.684 3 3 0 00-5.368 2.684z"
                />
            );
        case "shield":
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            );
        case "arrow-up-circle":
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
            );
        case "log-out":
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
            );
        default:
            return null;
    }
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [accountsOpen, setAccountsOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white text-gray-800 p-4 border-r flex flex-col justify-between">
                <div>
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                        </Link>
                    </div>
                    <nav>
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.path}
                                    onClick={(e) => {
                                        if (item.submenu) {
                                            e.preventDefault();
                                            setAccountsOpen(!accountsOpen);
                                        }
                                    }}
                                    className={`flex items-center p-2 my-1 rounded transition-colors ${
                                        pathname === item.path
                                            ? "bg-blue-100 text-blue-700"
                                            : "hover:bg-gray-200"
                                    }`}
                                >
                                    <svg
                                        className="w-5 h-5 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {renderIcon(item.icon)}
                                    </svg>
                                    <span>{item.name}</span>
                                    {item.submenu && (
                                        <span className="ml-auto">
                                            {accountsOpen ? "-" : "+"}
                                        </span>
                                    )}
                                </Link>
                                {item.submenu && accountsOpen && (
                                    <div className="ml-8">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.path}
                                                className={`block p-2 my-1 rounded ${
                                                    pathname === subItem.path
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "hover:bg-gray-200"
                                                }`}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
                <nav>
                    <Link
                        href={logoutItem.path}
                        className={`flex items-center p-2 my-1 rounded transition-colors ${
                            pathname === logoutItem.path
                                ? "bg-blue-100 text-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        <svg
                            className="w-5 h-5 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {renderIcon(logoutItem.icon)}
                        </svg>
                        <span>{logoutItem.name}</span>
                    </Link>
                </nav>
            </aside>
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
