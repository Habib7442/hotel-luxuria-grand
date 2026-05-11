"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Optimized cinematic duration to reveal content faster

    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;


  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-onyx flex items-center justify-center overflow-hidden"
          role="status"
          aria-live="polite"
        >
          <div className="relative text-center">
            {/* Minimal Logo/Name Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-jakarta font-extrabold text-ivory tracking-[0.5em] uppercase"
            >
              Luxuria <span className="text-champagne">Grand</span>
            </motion.h1>

            {/* Faster Welcome Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-champagne/30" />
              <p className="font-jakarta text-[10px] md:text-xs text-champagne uppercase tracking-[0.8em] font-bold">
                Excellence
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
