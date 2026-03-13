"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";
import FloatingParticles from "@/components/floating-particles";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-beige relative overflow-hidden">
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Admin Login - Top Right */}
        <div className="absolute top-4 right-4">
          <button className="text-sm text-text-secondary hover:text-foreground font-medium px-4 py-2 rounded-lg hover:bg-white/50 transition-all duration-200">
            Admin Login
          </button>
        </div>

        {/* Logo & Title Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
              <ShieldCheck size={32} className="text-white" />
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl font-bold text-foreground mb-1">FaithGuard</h1>
          <p className="text-xs tracking-widest uppercase text-text-secondary font-medium">
            Community-Driven Lost &amp; Found
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Temple Lost &amp; Found
          </h2>
          <p className="text-text-secondary text-base max-w-md mx-auto">
            A peaceful space to reconnect with what you&apos;ve lost on the temple grounds.
          </p>
        </motion.div>

        {/* Welcome Card */}
        <motion.div
          className="card max-w-md w-full mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center mb-3">
            <Sparkles size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Welcome to the Temple
          </h3>
          <p className="text-text-secondary text-sm">
            If you lose something inside the temple, people around you can help.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/checkin">
            <button className="btn-gradient text-lg px-10 py-4">
              Enter Temple Grounds →
            </button>
          </Link>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-xs text-text-secondary mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          No login • No tracking • Temporary access only
        </motion.p>
      </div>
    </div>
  );
}
