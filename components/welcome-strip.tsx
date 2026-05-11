"use client";

import React from "react";
import { MapPin, Star, Hotel } from "lucide-react";

export function WelcomeStrip() {
  return (
    <section className="py-16 md:py-24 bg-onyx border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 bg-champagne/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-all duration-500 border border-champagne/10">
              <MapPin className="w-6 h-6 text-champagne" />
            </div>
            <p className="font-jakarta font-bold text-xs uppercase tracking-[0.4em] text-champagne/60">Location</p>
            <p className="font-playfair text-2xl text-ivory mt-2 font-semibold">Ghungoor Kuarpar Rd</p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 bg-champagne/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-all duration-500 border border-champagne/10">
              <Star className="w-6 h-6 text-champagne" />
            </div>
            <p className="font-jakarta font-bold text-xs uppercase tracking-[0.4em] text-champagne/60">Rating</p>
            <p className="font-playfair text-2xl text-ivory mt-2 font-semibold">4.5/5 — 200+ Reviews</p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 bg-champagne/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-all duration-500 border border-champagne/10">
              <Hotel className="w-6 h-6 text-champagne" />
            </div>
            <p className="font-jakarta font-bold text-xs uppercase tracking-[0.4em] text-champagne/60">Experience</p>
            <p className="font-playfair text-2xl text-ivory mt-2 font-semibold">Luxury Redefined</p>
          </div>
        </div>
      </div>
    </section>
  );
}
