"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const menuItems = [
    { name: "Dashboard", path: "/userDashboard", icon: "/grid.svg" },
    {
        name: "Accounts",
        path: "/accounts",
        icon: "/user.svg",
        submenu: [
            { name: "Users", path: "/accounts/users" },
            { name: "Groups", path: "/accounts/groups" },
        ],
    },
    { name: "Directory", path: "/directory", icon: "/database.svg" },
    { name: "Network Shares", path: "/networkShares", icon: "/share.svg" },
    { name: "Protection", path: "/protection", icon: "/shield.svg" },
    {
        name: "Version Update",
        path: "/versionUpdate",
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
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const router = useRouter();

    const handleLogoutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowLogoutModal(true);
    };

    const handleConfirmLogout = () => {
        setShowLogoutModal(false);
        router.push("/login"); // Redirect to logout path
    };

    const handleCloseModal = () => {
        setShowLogoutModal(false);
    };

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
                                            ? "bg-[#DBEAFE] text-gray-800"
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
                                                        ? "bg-[#DBEAFE] text-gray-800"
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
                    <button
                        onClick={handleLogoutClick}
                        className={`flex items-center p-2 my-1 rounded transition-colors ${
                            pathname === logoutItem.path
                                ? "bg-[#DBEAFE] text-gray-800"
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
                    </button>
                </nav>
            </aside>

            {showLogoutModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-10 shadow-lg text-center w-[414px] h-[209px] rounded-lg flex flex-col items-center justify-between">
                        <h2 className="text-3xl font-medium mb-6 text-gray-800">
                            Logout?
                        </h2>
                        <div className="flex justify-between w-full space-x-3">
                            <button
                                onClick={handleCloseModal}
                                className="w-[161px] h-[48px] py-3 text-base bg-white border-[#E1E3F5] border-2 rounded-md hover:bg-gray-400 text-[#737790] transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmLogout}
                                className="w-[161px] h-[48px] py-3 text-base bg-[#298DFF] text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <main className="flex-1 p-20">{children}</main>
        </div>
    );
}
