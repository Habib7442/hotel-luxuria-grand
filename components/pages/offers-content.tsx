"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, Tag, Zap, ShieldCheck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: "1",
    title: "The Weekend Escape",
    description: "Enjoy a luxury staycation with 15% off on our Deluxe and Super Deluxe rooms. Includes complimentary breakfast and early check-in.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.32 PM.webp",
    validTill: "Valid through June 2026",
    code: "WEEKEND15",
    link: "/book?type=room"
  },
  {
    id: "2",
    title: "Dining Celebration Deal",
    description: "Book a table for 6 or more at Café Cove and receive a complimentary signature dessert platter for the group.",
    image: "/assets/food/WhatsApp Image 2026-04-27 at 8.28.32 PM (1).webp",
    validTill: "Limited time offer",
    code: "CELEBRATE",
    link: "/book?type=dining"
  },
  {
    id: "3",
    title: "Corporate Excellence",
    description: "Specially curated rates for business travelers. Includes high-speed wifi, laundry service, and 10% off on business dining.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.34 PM.webp",
    validTill: "Year-round offer",
    code: "CORPORATE",
    link: "/book?type=room"
  }
];

export default function OffersContent() {
  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Exclusive Benefits
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter"
          >
            Offers & <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Packages</span>
          </motion.h1>
          <div className="w-20 h-[1px] bg-champagne mx-auto mt-8" />
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-7xl mx-auto py-12 border-y border-white/5">
          {[
            { icon: ShieldCheck, text: "Best Rate Guaranteed" },
            { icon: Zap, text: "Instant Confirmation" },
            { icon: Gift, text: "Welcome Amenities" },
            { icon: Tag, text: "Exclusive Discounts" }
          ].map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 group">
              <benefit.icon className="w-5 h-5 text-champagne transition-transform group-hover:scale-110" />
              <span className="text-ivory/60 text-[9px] uppercase tracking-widest font-bold">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="max-w-4xl mx-auto py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.02] border border-white/5 p-16 md:p-24 relative group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-champagne" />
            <h2 className="text-4xl md:text-6xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-8">
              New Curated <br />
              <span className="text-champagne font-cormorant italic lowercase tracking-normal">Experiences</span> Coming Soon
            </h2>
            <p className="text-ivory/40 font-jakarta text-sm uppercase tracking-[0.3em] leading-relaxed max-w-md mx-auto">
              We are currently designing exclusive new packages and seasonal retreats for your next stay.
            </p>
            <div className="mt-16 flex flex-col items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                <Gift className="w-5 h-5 text-champagne/40" />
              </div>
              <p className="text-[10px] text-champagne/40 uppercase font-black tracking-[0.4em]">Check back shortly</p>
            </div>
          </motion.div>
        </div>

        {/* Custom Inquiry */}
        <div className="mt-32 max-w-4xl mx-auto bg-white/[0.02] border border-white/5 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-8">Looking for a <span className="text-champagne">Custom Package?</span></h2>
          <p className="text-ivory/60 font-jakarta text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Planning a long stay or a multi-room group booking? Contact our reservation team for a bespoke quote tailored to your needs.
          </p>
          <Button asChild className="bg-champagne text-black hover:bg-brass rounded-none px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] h-auto shadow-2xl transition-all">
            <Link href="/contact" className="flex items-center gap-4">Contact Concierge <MoveRight className="w-4 h-4" /></Link>
          </Button>
        </div>

      </div>
    </main>
  );
}

