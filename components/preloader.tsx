"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Cinematic duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-onyx flex items-center justify-center overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          
          <div className="relative text-center">
            {/* Animated Logo/Name */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl font-jakarta font-extrabold text-ivory tracking-[0.5em] uppercase"
              >
                Luxuria <span className="text-champagne">Grand</span>
              </motion.h1>
            </div>

            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-12 h-[1px] bg-champagne/30" />
              <p className="font-jakarta text-[10px] md:text-xs text-champagne uppercase tracking-[0.8em] font-bold">
                Welcome to Excellence
              </p>
              <div className="w-12 h-[1px] bg-champagne/30" />
            </motion.div>

            {/* Progress Indicator */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-white/5 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 2.5, 
                  ease: "easeInOut",
                  repeat: 0,
                  delay: 0.5
                }}
                className="w-full h-full bg-champagne"
              />
            </div>
          </div>

          {/* Decorative Corner Accents */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-12 left-12 w-12 h-12 border-t border-l border-champagne/20" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-champagne/20" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
