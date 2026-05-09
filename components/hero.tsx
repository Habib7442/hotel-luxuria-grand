"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Phone } from "lucide-react";
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
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-onyx">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.webp"
          alt="Hotel Luxuria Grand Exterior"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover brightness-[0.5]"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-onyx z-10" />
        
        {/* Subtle Luxury Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(13,2,2,0.1)_0%,transparent_50%)] z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 15 }}
            animate={{ opacity: 1, letterSpacing: "0.6em", y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-jakarta text-[11px] md:text-xs text-champagne uppercase font-bold text-center drop-shadow-md"
          >
            Silchar&apos;s Most Glamorous Destination
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter"
          >
            The Art of <br />
            <span className="text-champagne italic font-cormorant font-normal lowercase">Grand Living</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-ivory font-jakarta text-[11px] md:text-sm tracking-[0.3em] uppercase max-w-xl mx-auto pt-6 font-semibold drop-shadow-lg"
          >
            Refined accommodation on Ghungoor Kuarpar Road
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-12 flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <Button
            asChild
            className="group flex items-center justify-center gap-4 py-6 md:py-8 bg-champagne text-black rounded-none transition-all duration-500 shadow-2xl hover:bg-brass cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold h-auto w-full md:w-[320px] relative overflow-hidden border border-white/5"
          >
            <Link href="/rooms" className="flex items-center gap-4 relative z-10">
              Start Your Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <MoveRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group flex items-center justify-center gap-4 py-6 md:py-8 border-champagne/50 text-champagne rounded-none transition-all duration-500 hover:bg-champagne hover:text-black cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold h-auto w-full md:w-[320px]"
          >
            <a href="tel:+919181043994" className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              Call to Book
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

