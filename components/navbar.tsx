"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];

  const mobileMenu = (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            backgroundColor: "#0d0221",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-6 text-royal-gold p-2 transition-transform active:scale-90"
            style={{ zIndex: 100000 }}
          >
            <X size={32} />
          </button>

          {/* Background Texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.03, backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />

          <div className="flex flex-col items-center w-full max-h-full overflow-y-auto py-24 px-10 space-y-10 relative">
            {/* Navigation Links */}
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
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
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col space-y-4 w-full max-w-xs mx-auto"
            >
              <Button className="bg-royal-gold text-midnight-purple w-full py-8 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl">
                Reserve Now
              </Button>
              <a href="tel:+918104399400" className="w-full">
                <Button variant="outline" className="border-royal-gold/50 text-royal-gold w-full py-8 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-royal-gold/10">
                  <Phone className="mr-2 w-4 h-4" /> Call to Book
                </Button>
              </a>
            </motion.div>

            {/* Branding Subtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-10"
            >
              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold text-center">Hotel Luxuria Grand, Silchar</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
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
      </nav>

      {/* Portal: renders mobile menu directly on document.body, outside any transform context */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
};
