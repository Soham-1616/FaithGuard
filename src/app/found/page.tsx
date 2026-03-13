"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Bell, Sparkles, PackageX, MapPin, Clock } from "lucide-react";
import FloatingParticles from "@/components/floating-particles";
import BottomNav from "@/components/bottom-nav";
import { useItems } from "@/context/items-context";

export default function FoundItemFlow() {
    const { lostItems } = useItems();

    return (
        <div className="min-h-screen bg-beige relative overflow-hidden">
            <FloatingParticles />

            <div className="relative z-10 max-w-lg mx-auto px-4 py-6 pb-nav">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                    <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                        <Bell size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Step Banner */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-amber-50 px-3 py-1 rounded-full">
                            Step 1 of 2
                        </span>
                    </div>
                    <h1 className="text-2xl font-bold text-foreground mb-1">
                        Check if someone has already reported this item lost
                    </h1>
                    <p className="text-text-secondary text-sm">
                        Search through active lost reports. If the item is listed, let the
                        owner know.
                    </p>
                </motion.div>

                {/* CTA Banner */}
                <motion.div
                    className="card bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Sparkles size={18} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">
                                Not listed?
                            </span>
                        </div>
                        <Link href="/report-found">
                            <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                                Report Found Item →
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Lost Items List or Empty State */}
                {lostItems.length === 0 ? (
                    <motion.div
                        className="card text-center py-12"
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
                            No active lost reports found
                        </h3>
                        <p className="text-sm text-text-secondary max-w-xs mx-auto mb-6">
                            The owner hasn&apos;t reported it yet. Be the first to help!
                        </p>
                        <Link href="/report-found">
                            <button className="btn-gradient px-8 py-3">
                                Report Found Item
                            </button>
                        </Link>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-lg font-semibold text-foreground mb-4">
                            Active Lost Reports
                        </h2>
                        <div className="space-y-3">
                            {lostItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="card"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-semibold text-foreground">
                                                    {item.name}
                                                </h3>
                                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
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
                    </motion.div>
                )}
            </div>

            <BottomNav />
        </div>
    );
}
