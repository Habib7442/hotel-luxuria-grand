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
    image: "/assets/new_assets_2/President Suite 5500-6500.webp",
    priceSingle: "₹5,500",
    priceDouble: "₹6,500",
    features: ["Private Lounge", "Premium View", "Bespoke Decor"]
  },
  {
    title: "Executive Suite",
    description: "The pinnacle of Barak Valley luxury with premium services, bespoke interiors, and sophisticated design.",
    image: "/assets/new_assets_2/Executive suite @ 5000-6000.webp",
    priceSingle: "₹5,000",
    priceDouble: "₹6,000",
    features: ["Workstation", "Mini Bar", "Designer Lighting"]
  },
  {
    title: "Suite",
    description: "A spacious haven featuring a separate living area, perfect for families and extended stays.",
    image: "/assets/new_assets_2/President Suite 5500-6500(1).webp",
    priceSingle: "₹4,500",
    priceDouble: "₹5,500",
    features: ["Living Area", "Kitchenette", "Premium Bedding"]
  },
  {
    title: "Executive",
    description: "Tailored for the discerning professional, offering a perfect blend of modern utility and refined comfort.",
    image: "/assets/new_assets_2/Exective room @ 3500-4500.webp",
    priceSingle: "₹3,500",
    priceDouble: "₹4,500",
    features: ["High-speed Wifi", "Work Desk", "Modern Bath"]
  },
  {
    title: "Super Deluxe",
    description: "Premium comfort with elegant furnishings, modern amenities, and a welcoming ambiance.",
    image: "/assets/new_assets_2/Super Deluxe room.webp",
    priceSingle: "₹3,000",
    priceDouble: "₹4,000",
    features: ["Climate Control", "Smart TV", "Coffee Maker"]
  },
  {
    title: "Deluxe",
    description: "Refined space and essential luxuries designed for a comfortable and restorative experience.",
    image: "/assets/new_assets_2/Standard room(2).webp",
    priceSingle: "₹2,500",
    priceDouble: "₹3,500",
    features: ["Ambient Lighting", "Luxury Linen", "Spacious Bath"]
  },
  {
    title: "Standard",
    description: "Comfortable and essential accommodation, ideal for solo travelers or short business trips.",
    image: "/assets/new_assets_2/Standard room.webp",
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
          src="/assets/new_assets_2/EXTERIOR(1).webp"
          alt="Luxury Accommodations"
          fill
          sizes="100vw"
          quality={75}
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
        <div className="container mx-auto px-6 md:px-16 text-center">
          <p className="text-ivory/60 font-jakarta text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
            All rates are per night • Single & Double Occupancy Options • Extra Person @ ₹800 + Taxes
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {rooms.map((room, idx) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex flex-col bg-white/[0.02] border border-white/5 hover:border-champagne/30 transition-all duration-700"
              >
                {/* Image Side */}
                <div className="w-full relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 bg-champagne text-black text-[8px] font-black uppercase tracking-widest px-4 py-2 z-20">
                    {idx < 2 ? "Premium Suite" : "Luxury Room"}
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Side */}
                <div className="w-full p-8 md:p-12 flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-4xl md:text-6xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-4 group-hover:text-champagne transition-colors">
                      {room.title}
                    </h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                      {room.features.map(f => (
                        <span key={f} className="text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                          <span className="w-1 h-1 bg-champagne rounded-full" /> {f}
                        </span>
                      ))}
                    </div>
                    
                    {/* Full-width Pricing Box */}
                    <div className="bg-white/5 border border-white/5 p-6 md:p-8 w-full max-w-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                        <div className="flex flex-col">
                          <p className="text-ivory/40 text-[8px] uppercase tracking-widest font-bold mb-2">Single Occupancy</p>
                          <p className="text-champagne font-jakarta font-black text-3xl md:text-4xl leading-tight">{room.priceSingle}</p>
                        </div>
                        <div className="flex flex-col sm:items-end sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-8">
                          <p className="text-ivory/40 text-[8px] uppercase tracking-widest font-bold mb-2">Double Occupancy</p>
                          <p className="text-champagne font-jakarta font-black text-3xl md:text-4xl leading-tight">{room.priceDouble}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/5 flex flex-col xs:flex-row justify-between items-center gap-3">
                        <p className="text-ivory/20 text-[8px] uppercase tracking-widest font-bold">
                          Per Night • Excl. Taxes
                        </p>
                        <p className="text-champagne/40 text-[8px] uppercase tracking-widest font-bold">
                          + 12% GST Applicable
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-ivory/60 text-sm md:text-base leading-relaxed mb-10 font-jakarta max-w-2xl">
                    {room.description}
                  </p>

                  <Button asChild className="bg-champagne text-black hover:bg-brass rounded-none py-8 text-[10px] uppercase tracking-[0.3em] font-bold h-auto shadow-2xl transition-all duration-500 w-full max-w-xl">
                    <Link href={`/book?room=${encodeURIComponent(room.title)}`} className="flex items-center justify-center gap-4">
                      Reserve This Room <MoveRight className="w-4 h-4" />
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
        
        <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
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

