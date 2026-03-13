"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Bell,
    Phone,
    Briefcase,
    Diamond,
    CreditCard,
    Key,
    MoreHorizontal,
    Upload,
    Sparkles,
} from "lucide-react";
import FloatingParticles from "@/components/floating-particles";
import BottomNav from "@/components/bottom-nav";
import { useItems } from "@/context/items-context";

const categories = [
    { id: "Phone", label: "Phone", icon: Phone },
    { id: "Bag", label: "Bag", icon: Briefcase },
    { id: "Jewelry", label: "Jewelry", icon: Diamond },
    { id: "Wallet", label: "Wallet", icon: CreditCard },
    { id: "Keys", label: "Keys", icon: Key },
    { id: "Other", label: "Other", icon: MoreHorizontal },
];

export default function ReportLostPage() {
    const router = useRouter();
    const { addLostItem } = useItems();
    const [step, setStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
    });

    const handleSubmit = () => {
        if (formData.title.trim() && formData.location.trim()) {
            addLostItem({
                name: formData.title,
                description: formData.description || `${selectedCategory} item`,
                location: formData.location,
                category: selectedCategory,
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
                    <button
                        onClick={() => (step > 1 ? setStep(step - 1) : router.back())}
                        className="flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium">Back</span>
                    </button>
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
                        <h1 className="text-2xl font-bold text-foreground">Report Item</h1>
                    </div>
                    <p className="text-text-secondary text-sm">
                        Help reconnect items with their owners
                    </p>
                </motion.div>

                {step === 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-lg font-semibold text-foreground mb-4">
                            What did you lose?
                        </h2>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                const isSelected = selectedCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`card flex flex-col items-center gap-2 py-5 px-3 cursor-pointer transition-all duration-200 ${isSelected
                                                ? "border-2 border-primary bg-amber-50/50"
                                                : "border-2 border-transparent hover:border-gray-200"
                                            }`}
                                    >
                                        <Icon
                                            size={24}
                                            className={isSelected ? "text-primary" : "text-gray-400"}
                                        />
                                        <span
                                            className={`text-sm font-medium ${isSelected ? "text-primary" : "text-text-secondary"
                                                }`}
                                        >
                                            {cat.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => selectedCategory && setStep(2)}
                            className="btn-gradient w-full py-3.5"
                        >
                            Continue
                        </button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg font-semibold text-foreground mb-4">
                            Item Details
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5">
                                    Item Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Silver Ring, Blue Umbrella"
                                    value={formData.title}
                                    onChange={(e) =>
                                        setFormData({ ...formData, title: e.target.value })
                                    }
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5">
                                    Description
                                </label>
                                <textarea
                                    placeholder="Describe your item in detail..."
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5">
                                    Where did you lose it?
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Main Hall, Shoe Rack"
                                    value={formData.location}
                                    onChange={(e) =>
                                        setFormData({ ...formData, location: e.target.value })
                                    }
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5">
                                    Upload Photo (Optional)
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl py-8 px-4 text-center hover:border-primary transition-colors cursor-pointer">
                                    <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm text-text-secondary">
                                        Tap to upload a photo
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        JPG, PNG up to 5MB
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(1)}
                                className="btn-ghost flex-1 py-3"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="btn-gradient flex-1 py-3"
                            >
                                Submit Report
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>

            <BottomNav />
        </div>
    );
}
