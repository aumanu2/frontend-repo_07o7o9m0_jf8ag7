"use client";
import { motion } from "framer-motion";

export function Cloudy({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative w-24 h-16">
        <div className="absolute inset-0 blur-xl bg-teal/20 rounded-full" />
        <div className="absolute left-2 top-3 w-6 h-6 bg-cloud/90 rounded-full" />
        <div className="absolute left-6 top-1 w-10 h-10 bg-cloud/95 rounded-full" />
        <div className="absolute left-14 top-4 w-8 h-8 bg-cloud/90 rounded-full" />
        <div className="absolute -left-1 top-7 w-24 h-6 bg-cloud/95 rounded-full" />
        {/* eyes */}
        <div className="absolute left-8 top-6 w-2 h-2 bg-night rounded-full" />
        <div className="absolute left-12 top-6 w-2 h-2 bg-night rounded-full" />
      </div>
    </motion.div>
  );
}
