"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
      isScrolled 
        ? "bg-midnight-purple/80 backdrop-blur-2xl border-b border-white/5 py-4" 
        : "bg-transparent py-8"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Hotel Name/Logo */}
        <div className="flex items-center">
          <Link href="/" className="group flex flex-col items-start">
            <Image 
              src="/assets/logo.png" 
              alt="Hotel Luxuria Grand" 
              width={140} 
              height={70} 
              priority
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-all duration-500"
            />
            <p className={cn(
              "text-[8px] font-jakarta font-bold tracking-[0.4em] uppercase transition-colors mt-1.5",
              isScrolled ? "text-royal-gold/60 group-hover:text-royal-gold" : "text-white/40 group-hover:text-white"
            )}>
              Silchar
            </p>
          </Link>
        </div>

        {/* Right Side: Links & CTA */}
        <div className="flex items-center space-x-12">
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] font-jakarta font-bold uppercase tracking-[0.2em] transition-all duration-300",
                  isScrolled ? "text-champagne/70 hover:text-royal-gold" : "text-white/60 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Reserve Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-royal-gold text-midnight-purple hover:bg-champagne transition-all duration-500 rounded-full px-8 py-6 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Reserve Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-royal-gold p-2 transition-transform active:scale-90"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-midnight-purple z-[150] lg:hidden flex flex-col items-center justify-center"
          >
            {/* Explicit Close Button in Overlay */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 text-royal-gold p-2 transition-transform active:scale-90"
            >
              <X size={32} />
            </button>

            {/* Background Texture for Mobile Menu */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-playfair font-bold text-champagne hover:text-royal-gold transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="pt-10"
              >
                <Button className="bg-royal-gold text-midnight-purple px-12 py-8 rounded-full text-sm font-bold uppercase tracking-widest">
                  Reserve Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile Contact Info */}
            <div className="absolute bottom-12 flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3 text-royal-gold">
                <Phone size={16} />
                <span className="text-xs font-jakarta font-bold tracking-widest">+91 12345 67890</span>
              </div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest">Hotel Luxuria Grand, Silchar</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
