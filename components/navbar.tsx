"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-4 md:px-6",
        isScrolled 
          ? "py-3 bg-cream/95 backdrop-blur-md shadow-sm border-b border-taupe/10" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-tobacco" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Left Side Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-jakarta font-medium uppercase tracking-widest transition-colors",
                isScrolled ? "text-tobacco hover:text-marigold" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center flex-1 md:flex-none">
          <Link href="/" className="group text-center">
            <h1 className={cn(
              "text-xl md:text-3xl font-playfair font-bold tracking-tighter uppercase leading-none transition-colors",
              isScrolled ? "text-tobacco" : "text-white"
            )}>
              Luxuria <span className="text-marigold">Grand</span>
            </h1>
            <p className={cn(
              "text-[8px] md:text-xs font-jakarta font-semibold tracking-[0.3em] uppercase transition-colors mt-1",
              isScrolled ? "text-taupe group-hover:text-marigold" : "text-white/60 group-hover:text-white"
            )}>
              Silchar
            </p>
          </Link>
        </div>

        {/* Right Side Links & CTA */}
        <div className="flex items-center justify-end md:space-x-8 flex-1 md:flex-none">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-jakarta font-medium uppercase tracking-widest transition-colors",
                  isScrolled ? "text-tobacco hover:text-marigold" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button asChild className="bg-marigold text-white hover:bg-tobacco px-4 md:px-8 py-2 text-[10px] md:text-xs shadow-lg hover:shadow-marigold/20 h-9 md:h-10">
            <Link href="/book">Bookings</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Sheet) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-tobacco/40 backdrop-blur-sm z-[110] md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[80%] max-w-sm h-full bg-cream z-[120] p-8 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="text-left">
                  <h2 className="text-xl font-playfair font-bold text-tobacco uppercase">
                    Luxuria <span className="text-marigold">Grand</span>
                  </h2>
                  <p className="text-[10px] font-jakarta font-semibold tracking-widest text-taupe uppercase">Silchar</p>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-tobacco p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-playfair font-semibold text-tobacco hover:text-marigold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-taupe/10">
                  <Button asChild className="w-full bg-marigold text-white hover:bg-tobacco py-6 text-sm uppercase">
                    <Link href="/book">Reserve Your Stay</Link>
                  </Button>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="text-[10px] font-jakarta text-taupe uppercase tracking-widest">NIT Road, Silchar, Assam</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
