"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Heart,
    Search,
    MapPin,
    Clock,
    ChevronDown,
    Bell,
    PackageX,
} from "lucide-react";
import FloatingParticles from "@/components/floating-particles";
import BottomNav from "@/components/bottom-nav";
import { useItems } from "@/context/items-context";

export default function ItemsPage() {
    const { lostItems } = useItems();
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [locationFilter, setLocationFilter] = useState("All");

    const filteredItems = lostItems.filter((item) => {
        const matchSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchCategory =
            categoryFilter === "All" || item.category === categoryFilter;
        return matchSearch && matchCategory;
    });

    return (
        <div className="min-h-screen bg-beige relative overflow-hidden">
            <FloatingParticles />

            <div className="relative z-10 max-w-lg mx-auto px-4 py-6 pb-nav">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <Heart size={22} className="text-primary" />
                            <h1 className="text-2xl font-bold text-foreground">
                                Lost &amp; Found
                            </h1>
                        </div>
                        <p className="text-text-secondary text-sm">
                            Help reconnect items with their owners
                        </p>
                    </motion.div>
                    <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                        <Bell size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Search Bar */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                        />
                    </div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="flex gap-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="relative flex-1">
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all cursor-pointer"
                        >
                            <option value="All">All Categories</option>
                            <option value="Phone">Phone</option>
                            <option value="Jewelry">Jewelry</option>
                            <option value="Wallet">Wallet</option>
                            <option value="Bag">Bag</option>
                            <option value="Keys">Keys</option>
                            <option value="Other">Other</option>
                        </select>
                        <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                    </div>
                    <div className="relative flex-1">
                        <select
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all cursor-pointer"
                        >
                            <option value="All">All Locations</option>
                            <option value="Main Hall">Main Hall</option>
                            <option value="Shoe Rack">Shoe Rack</option>
                            <option value="Meditation Hall">Meditation Hall</option>
                        </select>
                        <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                    </div>
                </motion.div>

                {/* Items List or Empty State */}
                {filteredItems.length === 0 ? (
                    <motion.div
                        className="card text-center py-12 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                <PackageX size={32} className="text-gray-400" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            No items found
                        </h3>
                        <p className="text-sm text-text-secondary max-w-xs mx-auto">
                            No lost items have been reported yet. Check back later or report a found item.
                        </p>
                    </motion.div>
                ) : (
                    <div className="space-y-3 mb-6">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-foreground">
                                                {item.name}
                                            </h3>
                                            <span
                                                className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.status === "Active"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-green-100 text-green-700"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-text-secondary mb-2">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Clock size={13} className="text-text-secondary" />
                                                <span className="text-xs text-text-secondary">
                                                    {item.time}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={13} className="text-primary" />
                                                <span className="text-xs text-primary font-medium">
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Report Found Item Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link href="/report-found">
                        <button className="btn-gradient w-full py-3.5">
                            + Report Found Item
                        </button>
                    </Link>
                </motion.div>
            </div>

            <BottomNav />
        </div>
    );
}
