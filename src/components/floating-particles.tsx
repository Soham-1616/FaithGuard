"use client";

import React from "react";

const particles = [
    { width: 40, height: 40, top: "8%", left: "5%", delay: "0s", duration: "7s" },
    { width: 20, height: 20, top: "15%", left: "85%", delay: "1s", duration: "5s" },
    { width: 30, height: 30, top: "25%", left: "15%", delay: "2s", duration: "8s" },
    { width: 15, height: 15, top: "40%", left: "90%", delay: "0.5s", duration: "6s" },
    { width: 25, height: 25, top: "55%", left: "3%", delay: "3s", duration: "7s" },
    { width: 35, height: 35, top: "70%", left: "80%", delay: "1.5s", duration: "9s" },
    { width: 18, height: 18, top: "80%", left: "20%", delay: "2.5s", duration: "6s" },
    { width: 28, height: 28, top: "10%", left: "50%", delay: "0.8s", duration: "8s" },
    { width: 12, height: 12, top: "35%", left: "70%", delay: "1.2s", duration: "5s" },
    { width: 22, height: 22, top: "60%", left: "40%", delay: "3.5s", duration: "7s" },
    { width: 16, height: 16, top: "90%", left: "60%", delay: "0.3s", duration: "6s" },
    { width: 32, height: 32, top: "5%", left: "35%", delay: "2.2s", duration: "9s" },
    { width: 14, height: 14, top: "45%", left: "10%", delay: "1.8s", duration: "5s" },
    { width: 50, height: 50, top: "20%", left: "2%", delay: "0.6s", duration: "10s" },
    { width: 10, height: 10, top: "75%", left: "50%", delay: "4s", duration: "6s" },
    { width: 45, height: 45, top: "85%", left: "75%", delay: "1.1s", duration: "8s" },
];

export default function FloatingParticles() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="particle"
                    style={{
                        width: p.width,
                        height: p.height,
                        top: p.top,
                        left: p.left,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                        borderRadius: p.width > 30 ? "6px" : "4px",
                    }}
                />
            ))}
        </div>
    );
}
