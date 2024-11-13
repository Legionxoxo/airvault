"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
    { name: "Dashboard", path: "/dashboard/userdashboard", icon: "/grid.svg" },
    {
        name: "Accounts",
        path: "/dashboard/accounts",
        icon: "/user.svg",
        submenu: [
            { name: "Users", path: "/dashboard/accounts/users" },
            { name: "Groups", path: "/dashboard/accounts/groups" },
        ],
    },
    { name: "Directory", path: "/dashboard/directory", icon: "/database.svg" },
    {
        name: "Network Shares",
        path: "/dashboard/network-shares",
        icon: "/share.svg",
    },
    { name: "Protection", path: "/dashboard/protection", icon: "/shield.svg" },
    {
        name: "Version Update",
        path: "/dashboard/version-update",
        icon: "/arrow-up-circle.svg",
    },
];

const logoutItem = { name: "Logout", path: "/login", icon: "/log-out.svg" };

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
                                    <Image
                                        src={item.icon}
                                        alt={`${item.name} Icon`}
                                        width={24}
                                        height={24}
                                        className="mr-3"
                                    />
                                    <span>{item.name}</span>
                                    {item.submenu && (
                                        <Image
                                            src="/downarrow.svg"
                                            alt="Toggle Icon"
                                            width={16}
                                            height={16}
                                            className={`ml-auto transition-transform ${
                                                accountsOpen ? "rotate-180" : ""
                                            }`}
                                        />
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
                        <Image
                            src={logoutItem.icon}
                            alt="Logout Icon"
                            width={20}
                            height={20}
                            className="mr-3"
                        />
                        <span>{logoutItem.name}</span>
                    </Link>
                </nav>
            </aside>
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
