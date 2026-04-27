"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [droplets, setDroplets] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate droplets only on client side to avoid hydration mismatch
    const newDroplets = [...Array(100)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      height: `${15 + Math.random() * 20}px`,
      duration: `${0.5 + Math.random() * 0.5}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setDroplets(newDroplets);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-tobacco">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpeg"
          alt="Hotel Luxuria Grand Exterior"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        
        {/* Subtle Rain Effect - Only rendered on client */}
        {mounted && (
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-30">
            {droplets.map((drop, i) => (
              <div
                key={i}
                className="absolute bg-white/40 rounded-full"
                style={{
                  left: drop.left,
                  top: `-20px`,
                  width: `1px`,
                  height: drop.height,
                  animation: `rain ${drop.duration} linear infinite`,
                  animationDelay: drop.delay,
                }}
              />
            ))}
          </div>
        )}

        <style jsx>{`
          @keyframes rain {
            0% {
              transform: translateY(-100px);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `}</style>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-jakarta text-xs md:text-sm text-marigold uppercase tracking-[0.4em] font-bold"
          >
            A Silchar Landmark
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-7xl font-playfair font-bold text-white leading-[1.1] tracking-tight uppercase"
          >
            Immerse <br />
            Yourself in <span className="italic text-marigold">Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 font-jakarta text-[10px] md:text-xs tracking-[0.25em] uppercase max-w-lg mx-auto pt-2"
          >
            The pinnacle of hospitality at NIT Road
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-10 flex justify-center"
        >
          <Button
            asChild
            className="group flex items-center gap-3 px-8 md:px-10 py-5 md:py-6 bg-marigold text-white rounded-full transition-all shadow-xl hover:bg-white hover:text-tobacco cursor-pointer text-[10px] md:text-xs uppercase tracking-widest font-bold h-auto w-auto"
          >
            <Link href="/book" className="flex items-center gap-3">
              Book Your Stay
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
