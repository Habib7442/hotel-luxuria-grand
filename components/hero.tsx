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
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-midnight-purple">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpeg"
          alt="Hotel Luxuria Grand Exterior"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.6]"
          priority
        />
        
        {/* Golden Rain Effect - Only rendered on client */}
        {mounted && (
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-40">
            {droplets.map((drop, i) => (
              <div
                key={i}
                className="absolute bg-royal-gold/40 rounded-full"
                style={{
                  left: drop.left,
                  top: `-20px`,
                  width: `1.5px`,
                  height: drop.height,
                  animation: `rain ${drop.duration} linear infinite`,
                  animationDelay: drop.delay,
                  boxShadow: `0 0 8px rgba(212, 175, 55, 0.3)`,
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

        {/* Main Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-midnight-purple z-10" />
        
        {/* Subtle Luxury Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,2,73,0.15)_0%,transparent_70%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(26,2,2,0.2)_0%,transparent_50%)] z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 15 }}
            animate={{ opacity: 1, letterSpacing: "0.6em", y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-jakarta text-[10px] md:text-xs text-royal-gold uppercase font-bold text-center"
          >
            Silchar&apos;s Most Glamorous Destination
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-champagne uppercase leading-[0.8] tracking-tighter"
          >
            The Art of <br />
            <span className="text-royal-gold italic font-playfair font-normal">Grand Living</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-champagne/50 font-jakarta text-[10px] md:text-xs tracking-[0.3em] uppercase max-w-lg mx-auto pt-4 font-semibold"
          >
            Experience unmatched hospitality at NIT Road
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-12 flex justify-center"
        >
          <Button
            asChild
            className="group flex items-center gap-4 px-10 md:px-14 py-6 md:py-8 bg-royal-gold text-midnight-purple rounded-none transition-all duration-500 shadow-2xl hover:bg-champagne cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold h-auto w-auto relative overflow-hidden"
          >
            <Link href="/book" className="flex items-center gap-4 relative z-10">
              Start Your Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <MoveRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
