"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MoveRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [droplets, setDroplets] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate fewer droplets for performance
    const newDroplets = [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      height: `${15 + Math.random() * 20}px`,
      duration: `${0.8 + Math.random() * 0.8}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setDroplets(newDroplets);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-onyx">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.webp"
          alt="Hotel Luxuria Grand Exterior"
          fill
          sizes="100vw"
          quality={80}
          className="object-cover brightness-[0.5]"
          priority
          fetchPriority="high"
        />
        
        {/* Optimized Combined Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/40 to-onyx bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.03)_0%,transparent_100%)]" />
        
        {/* Golden Rain Effect - Deferred and hardware accelerated */}
        {mounted && (
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-30">
            {droplets.map((drop, i) => (
              <div
                key={i}
                className="absolute bg-royal-gold/30 rounded-full"
                style={{
                  left: drop.left,
                  top: `-40px`,
                  width: `1px`,
                  height: drop.height,
                  animation: `rain ${drop.duration} linear infinite`,
                  animationDelay: drop.delay,
                  willChange: "transform",
                  transform: "translateZ(0)",
                }}
              />
            ))}
          </div>
        )}

        <style jsx>{`
          @keyframes rain {
            0% { transform: translateY(-100px) translateZ(0); }
            100% { transform: translateY(110vh) translateZ(0); }
          }
        `}</style>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 text-center pt-20">
        <div className="space-y-6">
          <p
            className="font-jakarta text-[11px] md:text-xs text-champagne uppercase font-bold text-center drop-shadow-md animate-fade-in-letter-spacing"
          >
            Silchar&apos;s Most Glamorous Destination
          </p>
          
          <h1
            className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            The Art of <br />
            <span className="text-champagne italic font-cormorant font-normal lowercase">Grand Living</span>
          </h1>

          <p
            className="text-ivory font-jakarta text-[11px] md:text-sm tracking-[0.3em] uppercase max-w-xl mx-auto pt-6 font-semibold drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Refined accommodation on Ghungoor Kuarpar Road
          </p>
        </div>

        <div
          className="pt-12 flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <Button
            asChild
            className="group flex items-center justify-center gap-4 py-6 md:py-8 bg-champagne text-black rounded-none transition-all duration-500 shadow-2xl hover:bg-brass cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold h-auto w-full md:w-[320px] relative overflow-hidden border border-white/5"
          >
            <Link href="/rooms" className="flex items-center gap-4 relative z-10">
              Start Your Journey
              <div className="animate-slide-right">
                <MoveRight className="w-5 h-5" />
              </div>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group flex items-center justify-center gap-4 py-6 md:py-8 bg-white/5 backdrop-blur-md border-champagne/30 text-champagne rounded-none transition-all duration-500 hover:bg-champagne hover:text-black cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold h-auto w-full md:w-[320px]"
          >
            <a href="tel:+919181043994" className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              Call to Book
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

