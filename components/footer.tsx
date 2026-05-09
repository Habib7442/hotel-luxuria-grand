"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-onyx border-t border-white/5 pt-16 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Column 1: Brand Story */}
          <div className="space-y-8">
            <Link href="/" className="group block w-fit">
              <Image 
                src="/assets/logo.webp" 
                alt="Hotel Luxuria Grand" 
                width={180} 
                height={90} 
                className="h-14 w-auto object-contain"
              />
              <p className="text-xs font-jakarta font-bold tracking-[0.4em] uppercase text-white/40 mt-3">
                Silchar
              </p>
            </Link>
            <p className="text-champagne/50 font-jakarta text-sm leading-relaxed max-w-sm">
              The pinnacle of luxury in Silchar. Our hotel combines modern elegance with 
              timeless hospitality to create an unforgettable sanctuary for every guest.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { name: "instagram", icon: "/social-icons/instagram.png", href: "https://www.instagram.com/luxuria_grand/" },
                { name: "facebook", icon: "/social-icons/facebook.png", href: "#" },
                { name: "whatsapp", icon: "/social-icons/whatsapp.png", href: "https://wa.me/919181043994" },
                { name: "linkedin", icon: "/social-icons/linkedin.png", href: "#" },
                { name: "X", icon: "/social-icons/X.png", href: "#" },
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-champagne/20 transition-all group"
                >
                  <Image 
                    src={social.icon} 
                    alt={social.name} 
                    width={18} 
                    height={18} 
                    className={cn(
                      "opacity-100 transition-opacity",
                      social.name === "X" && "brightness-0 invert"
                    )}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-champagne font-jakarta font-bold uppercase text-xs tracking-[0.3em]">Navigation</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {[
                { name: "Rooms", href: "/rooms" },
                { name: "Dining", href: "/dining" },
                { name: "Exclusive Offers", href: "/offers" },
                { name: "Book Now", href: "/book" },
                { name: "About Us", href: "/about" },
                { name: "Write a Review", href: "https://www.google.com/search?q=Luxuria+Grand+Reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcFxboClSYhUlfcnk14JnFGbuxCDrgBszO1QuUIE3mECRZcYvsx5sjVqFS7lF4P9nA8qNhxPm7PGZ-JjN2wsBCdKJF1V" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-champagne/60 hover:text-white transition-colors text-sm font-jakarta uppercase tracking-widest font-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-8">
            <h4 className="text-champagne font-jakarta font-bold uppercase text-xs tracking-[0.3em]">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-champagne mt-1 shrink-0" />
                <p className="text-champagne/60 text-sm font-jakarta leading-relaxed">
                  Ghungoor Kuarpar Road, <br />
                  Near Saint Capitanio School, <br />
                  Silchar-788015, Assam
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={20} className="text-champagne mt-1 shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919181043994" className="text-champagne/60 hover:text-champagne text-sm font-jakarta font-bold transition-colors">
                    +91 91810 43994
                  </a>
                  <a href="tel:+919181099018" className="text-champagne/60 hover:text-champagne text-sm font-jakarta font-bold transition-colors">
                    +91 91810 99018
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail size={20} className="text-champagne mt-1 shrink-0" />
                <a href="mailto:luxuriagrand2025@gmail.com" className="text-champagne/60 hover:text-champagne text-sm font-jakarta uppercase font-bold transition-colors">
                  luxuriagrand2025@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Visiting Card Row */}
        <div className="pt-16 border-t border-white/5 mb-16">
          <div className="flex flex-col items-center justify-center">
            <div className="relative group overflow-hidden rounded-md border border-white/10 shadow-2xl max-w-xl w-full">
              <Image 
                src="/assets/visiting_card.webp" 
                alt="Hotel Luxuria Grand Visiting Card" 
                width={600} 
                height={320} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-onyx/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-jakarta uppercase tracking-[0.2em]">
            &copy; {currentYear} Hotel Luxuria Grand. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { name: "Privacy Policy", href: "/legal/privacy" },
              { name: "Terms & Conditions", href: "/legal/terms" },
              { name: "Cancellation", href: "/legal/cancellation-policy" },
              { name: "Refunds", href: "/legal/refund-policy" },
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-white/20 hover:text-champagne transition-colors text-[9px] uppercase tracking-widest font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

