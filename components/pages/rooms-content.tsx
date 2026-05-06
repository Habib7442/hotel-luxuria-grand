"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Star, Coffee, Wifi, Tv, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rooms = [
  {
    title: "President Suite",
    description: "Our grandest accommodation, offering unmatched luxury, expansive living spaces, and royal treatment in the heart of Silchar.",
    image: "/assets/new_assets_2/President Suite 5500-6500.jpeg",
    priceSingle: "₹5,500",
    priceDouble: "₹6,500",
    features: ["Private Lounge", "Premium View", "Bespoke Decor"]
  },
  {
    title: "Executive Suite",
    description: "The pinnacle of Barak Valley luxury with premium services, bespoke interiors, and sophisticated design.",
    image: "/assets/new_assets_2/Executive suite @ 5000-6000.jpeg",
    priceSingle: "₹5,000",
    priceDouble: "₹6,000",
    features: ["Workstation", "Mini Bar", "Designer Lighting"]
  },
  {
    title: "Suite",
    description: "A spacious haven featuring a separate living area, perfect for families and extended stays.",
    image: "/assets/new_assets_2/President Suite 5500-6500(1).jpeg",
    priceSingle: "₹4,500",
    priceDouble: "₹5,500",
    features: ["Living Area", "Kitchenette", "Premium Bedding"]
  },
  {
    title: "Executive",
    description: "Tailored for the discerning professional, offering a perfect blend of modern utility and refined comfort.",
    image: "/assets/new_assets_2/Exective room @ 3500-4500.jpeg",
    priceSingle: "₹3,500",
    priceDouble: "₹4,500",
    features: ["High-speed Wifi", "Work Desk", "Modern Bath"]
  },
  {
    title: "Super Deluxe",
    description: "Premium comfort with elegant furnishings, modern amenities, and a welcoming ambiance.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.30 PM.jpeg",
    priceSingle: "₹3,000",
    priceDouble: "₹4,000",
    features: ["Climate Control", "Smart TV", "Coffee Maker"]
  },
  {
    title: "Deluxe",
    description: "Refined space and essential luxuries designed for a comfortable and restorative experience.",
    image: "/assets/new_assets_2/HOTEL ENTERANCE.jpeg",
    priceSingle: "₹2,500",
    priceDouble: "₹3,500",
    features: ["Ambient Lighting", "Luxury Linen", "Spacious Bath"]
  },
  {
    title: "Standard",
    description: "Comfortable and essential accommodation, ideal for solo travelers or short business trips.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.06 PM.jpeg",
    priceSingle: "₹2,200",
    priceDouble: "₹3,200",
    features: ["Comfort Bed", "Essential Amenities", "Wifi Access"]
  },
];

export default function RoomsContent() {
  return (
    <main className="min-h-screen bg-onyx overflow-hidden">
      
      {/* Rooms Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/new_assets_2/EXTERIOR.jpeg"
          alt="Luxury Accommodations"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-transparent to-onyx z-10" />
        
        <div className="relative z-20 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
            animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Refined Living
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter"
          >
            Our <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Rooms</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro Subtext */}
      <section className="py-12 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-ivory/60 font-jakarta text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
            All rates are per night • Single & Double Occupancy Options • Extra Person @ ₹800 + Taxes
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {rooms.map((room, idx) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row gap-10 items-stretch bg-white/[0.02] border border-white/5 hover:border-champagne/30 transition-all duration-700"
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 bg-champagne text-black text-[8px] font-black uppercase tracking-widest px-4 py-2">
                    {idx < 2 ? "Premium Suite" : "Luxury Room"}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-4xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-4 group-hover:text-champagne transition-colors">
                    {room.title}
                  </h2>
                  <p className="text-ivory/60 text-sm leading-relaxed mb-8 font-jakarta">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4 mb-10">
                    {room.features.map(f => (
                      <span key={f} className="text-[9px] uppercase tracking-widest text-champagne font-bold border border-champagne/20 px-3 py-1.5">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Pricing Badge Layout */}
                  <div className="bg-onyx/40 border border-white/5 p-6 mb-10">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-champagne font-jakarta font-black text-2xl">{room.priceSingle}</p>
                        <p className="text-ivory/40 text-[8px] uppercase tracking-[0.2em] font-bold">Single Occupancy</p>
                      </div>
                      <div className="w-[1px] h-10 bg-white/10" />
                      <div className="text-right">
                        <p className="text-champagne font-jakarta font-black text-2xl">{room.priceDouble}</p>
                        <p className="text-ivory/40 text-[8px] uppercase tracking-[0.2em] font-bold">Double Occupancy</p>
                      </div>
                    </div>
                    <p className="text-ivory/20 text-[7px] uppercase tracking-widest text-center border-t border-white/5 pt-3 font-bold">
                      + 12% GST as applicable
                    </p>
                  </div>

                  <Button asChild className="bg-champagne text-black hover:bg-brass rounded-none py-6 text-[10px] uppercase tracking-[0.3em] font-bold h-auto shadow-2xl transition-all duration-500">
                    <Link href={`/book?room=${encodeURIComponent(room.title)}`} className="flex items-center justify-center gap-4">
                      Book This Room <MoveRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Amenities Section */}
      <section className="py-24 bg-black/20 border-t border-white/5 relative">
         <div className="absolute top-0 right-0 text-[15vw] font-jakarta font-black text-white/[0.02] uppercase leading-none pointer-events-none select-none">
          Amenities
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="font-jakarta text-[10px] text-champagne uppercase font-bold tracking-[0.4em] mb-8">Standard in Every Room</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {[
              { icon: Wifi, label: "Free Wifi" },
              { icon: Coffee, label: "Tea/Coffee" },
              { icon: Tv, label: "Smart TV" },
              { icon: Wind, label: "AC Control" },
              { icon: Star, label: "Premium Bed" },
              { icon: Shield, label: "24/7 Security" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-champagne group-hover:border-champagne transition-all duration-500">
                  <item.icon className="w-5 h-5 text-champagne group-hover:text-black transition-colors" />
                </div>
                <span className="text-ivory/60 text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

const Shield = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);
