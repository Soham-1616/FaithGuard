"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Bell, Sparkles } from "lucide-react";
import FloatingParticles from "@/components/floating-particles";
import BottomNav from "@/components/bottom-nav";
import { useItems } from "@/context/items-context";

export default function ReportFoundPage() {
    const router = useRouter();
    const { addFoundItem } = useItems();
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        date: "",
    });

    const handleSubmit = () => {
        if (formData.title.trim() && formData.location.trim()) {
            addFoundItem({
                name: formData.title,
                location: formData.location,
            });
            router.push("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-beige relative overflow-hidden">
            <FloatingParticles />

            <div className="relative z-10 max-w-lg mx-auto px-4 py-6 pb-nav">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                    <Link
                        href="/found"
                        className="flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                    <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                        <Bell size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Header */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={24} className="text-primary" />
                        <h1 className="text-2xl font-bold text-foreground">
                            Report Found Item
                        </h1>
                    </div>
                    <p className="text-text-secondary text-sm">
                        Help the owner find their lost item
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            Item Title
                        </label>
                        <input
                            type="text"
                            placeholder="What did you find?"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            Where did you find it?
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Main Hall, Near Entrance"
                            value={formData.location}
                            onChange={(e) =>
                                setFormData({ ...formData, location: e.target.value })
                            }
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            When did you find it?
                        </label>
                        <input
                            type="datetime-local"
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({ ...formData, date: e.target.value })
                            }
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                        />
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link href="/found" className="flex-1">
                        <button className="btn-ghost w-full py-3">Back</button>
                    </Link>
                    <button
                        onClick={handleSubmit}
                        className="btn-gradient flex-1 py-3"
                    >
                        Report Found Item
                    </button>
                </motion.div>
            </div>

            <BottomNav />
        </div>
    );
}
