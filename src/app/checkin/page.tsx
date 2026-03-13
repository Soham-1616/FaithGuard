"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { QrCode, KeyRound, Camera, ShieldCheck } from "lucide-react";
import FloatingParticles from "@/components/floating-particles";

export default function CheckInPage() {
    const [templeCode, setTempleCode] = useState("");
    const router = useRouter();

    const handleEnterTemple = () => {
        if (templeCode.trim()) {
            router.push("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-beige relative overflow-hidden">
            <FloatingParticles />

            <div className="relative z-10 flex flex-col items-center px-4 py-8 max-w-lg mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo */}
                    <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
                            <ShieldCheck size={24} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-foreground mb-1">FaithGuard</h1>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                        Temple Check-In
                    </h2>
                    <p className="text-text-secondary text-sm max-w-sm">
                        Scan the temple QR code or enter your temple code to access the
                        Lost &amp; Found system.
                    </p>
                </motion.div>

                {/* Card 1: Scan QR Code */}
                <motion.div
                    className="card w-full text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                            <QrCode size={28} className="text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                        Scan QR Code
                    </h3>
                    <p className="text-text-secondary text-sm mb-5">
                        Scan the QR displayed at the temple entrance. Your session will be
                        created automatically.
                    </p>
                    <button className="w-full border-2 border-dashed border-amber-300 rounded-2xl py-4 px-6 text-primary hover:bg-amber-50 transition-colors duration-200 flex items-center justify-center gap-2">
                        <Camera size={18} />
                        <span className="text-sm font-medium">
                            Tap here to open your camera and scan the temple QR code.
                        </span>
                    </button>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="flex items-center w-full my-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="px-4 text-sm text-text-secondary font-medium">
                        OR
                    </span>
                    <div className="flex-1 h-px bg-gray-300" />
                </motion.div>

                {/* Card 2: Enter Temple Code */}
                <motion.div
                    className="card w-full text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                            <KeyRound size={28} className="text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                        Enter Temple Code
                    </h3>
                    <p className="text-text-secondary text-sm mb-5">
                        Manually enter the unique temple code shown at the entrance.
                    </p>
                    <input
                        type="text"
                        placeholder="e.g. temple_001"
                        value={templeCode}
                        onChange={(e) => setTempleCode(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all mb-4 bg-white"
                    />
                    <button
                        onClick={handleEnterTemple}
                        className="btn-gradient w-full py-3.5"
                    >
                        Enter Temple →
                    </button>
                </motion.div>

                {/* Footer */}
                <motion.p
                    className="text-xs text-text-secondary text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    No login • No tracking • Temporary access only • Session expires in 4
                    hours
                </motion.p>
            </div>
        </div>
    );
}
