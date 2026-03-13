"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    CheckCircle,
    Search,
    Package,
    Shield,
    Clock,
    Bell,
} from "lucide-react";
import FloatingParticles from "@/components/floating-particles";
import BottomNav from "@/components/bottom-nav";
import NotificationModal from "@/components/notification-modal";

export default function DashboardPage() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("notifications_prompt_shown");
        if (!alreadyShown) {
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismissModal = () => {
        sessionStorage.setItem("notifications_prompt_shown", "true");
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-beige relative overflow-hidden">
            <FloatingParticles />

            <div className="relative z-10 max-w-3xl mx-auto px-4 py-6 pb-nav">
                {/* Notification Bell - Top Right */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                    >
                        <Bell size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Status Card */}
                <motion.div
                    className="card mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                            <CheckCircle size={24} className="text-success" />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-1">
                        Checked-In Successfully
                    </h2>
                    <p className="text-sm text-text-secondary">
                        You are inside the temple
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                        Session is active. You can report or find items anonymously.
                    </p>
                    <p className="text-xs text-primary font-medium mt-2">
                        (~240 min remaining)
                    </p>
                </motion.div>

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Lost Something Card */}
                    <motion.div
                        className="card text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                                <Search size={28} className="text-primary" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-2">
                            I Lost Something
                        </h3>
                        <p className="text-text-secondary text-sm mb-5">
                            Report a missing item and the temple community will help you look
                            for it.
                        </p>
                        <Link href="/lost">
                            <button className="btn-gradient w-full py-3">
                                + Report Lost Item
                            </button>
                        </Link>
                    </motion.div>

                    {/* Found Something Card */}
                    <motion.div
                        className="card text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                                <Package size={28} className="text-primary" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-2">
                            I Found Something
                        </h3>
                        <p className="text-text-secondary text-sm mb-5">
                            See if someone has reported this item, or add it to the found
                            list.
                        </p>
                        <Link href="/items">
                            <button className="btn-gradient w-full py-3 mb-3">
                                Browse Items
                            </button>
                        </Link>
                        <Link href="/found">
                            <button className="btn-ghost w-full py-3">
                                + Report Found Item
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Info Cards Row */}
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle size={18} className="text-success" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Session Active
                            </p>
                            <p className="text-xs text-text-secondary">
                                You&apos;re checked in
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                                    <Shield size={18} className="text-primary" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Privacy First
                            </p>
                            <p className="text-xs text-text-secondary">
                                No tracking, no data
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <Clock size={18} className="text-blue-500" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Temporary Access
                            </p>
                            <p className="text-xs text-text-secondary">
                                Expires when you leave
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <BottomNav />

            <NotificationModal
                isOpen={showModal}
                onClose={handleDismissModal}
                onEnable={handleDismissModal}
            />
        </div>
    );
}
