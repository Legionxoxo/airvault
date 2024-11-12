import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", path: "/userdashboard", icon: "📊" },
        { name: "Accounts", path: "/dashboard/accounts", icon: "👤" },
        { name: "Users", path: "/dashboard/users", icon: "👥" },
        { name: "Groups", path: "/dashboard/groups", icon: "👪" },
        { name: "Directory", path: "/dashboard/directory", icon: "📁" },
        {
            name: "Network Shares",
            path: "/dashboard/network-shares",
            icon: "📡",
        },
        { name: "Protection", path: "/dashboard/protection", icon: "🛡️" },
        {
            name: "Version Update",
            path: "/dashboard/version-update",
            icon: "⬆️",
        },
        { name: "Logout", path: "/logout", icon: "🚪" },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-1/5 bg-black text-white p-5">
                <div className="mb-8">
                    <span className="text-orange-500 text-2xl">🔥 Logo</span>
                </div>
                <nav>
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.path}>
                            <a
                                className={`flex items-center p-3 my-2 rounded ${
                                    pathname === item.path
                                        ? "bg-blue-200 text-black"
                                        : ""
                                } hover:bg-blue-300`}
                            >
                                <span className="mr-3">{item.icon}</span>
                                <span>{item.name}</span>
                            </a>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Content Area */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
