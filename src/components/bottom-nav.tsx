"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusCircle } from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/items", label: "Items", icon: Search },
    { href: "/report-lost", label: "Report", icon: PlusCircle },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-lg mx-auto flex justify-around items-center py-3">
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href === "/dashboard" && pathname === "/dashboard");
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 px-4 py-1 transition-colors duration-200 ${isActive
                                    ? "text-primary"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            <span
                                className={`text-xs font-medium ${isActive ? "text-primary" : ""
                                    }`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
