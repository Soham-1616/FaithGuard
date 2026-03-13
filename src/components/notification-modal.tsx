"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, CheckCircle, X } from "lucide-react";

interface NotificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEnable: () => void;
}

export default function NotificationModal({
    isOpen,
    onClose,
    onEnable,
}: NotificationModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white rounded-3xl p-8 max-w-sm w-[90%] mx-auto relative shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Bell icon */}
                        <div className="flex justify-center mb-5">
                            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                                <Bell size={28} className="text-primary" />
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-center text-foreground mb-2">
                            Stay Updated
                        </h2>

                        {/* Description */}
                        <p className="text-text-secondary text-center text-sm mb-6">
                            Get alerts if someone finds your item or posts a lost item nearby.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-success mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-sm text-foreground">Real-time alerts</p>
                                    <p className="text-xs text-text-secondary">
                                        Know immediately when there&apos;s activity on your items
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-success mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-sm text-foreground">Privacy-first</p>
                                    <p className="text-xs text-text-secondary">
                                        Notifications expire with your session
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-success mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-sm text-foreground">Temple-only</p>
                                    <p className="text-xs text-text-secondary">
                                        Only receive notifications for your current temple
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <button
                            onClick={onEnable}
                            className="btn-gradient w-full mb-3 text-base"
                        >
                            Enable Notifications
                        </button>
                        <button
                            onClick={onClose}
                            className="btn-ghost w-full text-base"
                        >
                            Skip
                        </button>

                        <p className="text-xs text-text-secondary text-center mt-4">
                            You can change this later in your browser settings
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
