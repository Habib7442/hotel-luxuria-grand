"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const rooms = [
  {
    title: "President Suite",
    description: "Our grandest accommodation, offering unmatched luxury, expansive living spaces, and royal treatment in the heart of Silchar.",
    image: "/assets/new_assets_2/President Suite 5500-6500.jpeg",
    priceSingle: "₹5,500",
    priceDouble: "₹6,500",
  },
  {
    title: "Executive Suite",
    description: "The pinnacle of Barak Valley luxury with premium services, bespoke interiors, and sophisticated design.",
    image: "/assets/new_assets_2/Executive suite @ 5000-6000.jpeg",
    priceSingle: "₹5,000",
    priceDouble: "₹6,000",
  },
  {
    title: "Suite",
    description: "A spacious haven featuring a separate living area, perfect for families and extended stays.",
    image: "/assets/new_assets_2/President Suite 5500-6500(1).jpeg",
    priceSingle: "₹4,500",
    priceDouble: "₹5,500",
  },
  {
    title: "Executive",
    description: "Tailored for the discerning professional, offering a perfect blend of modern utility and refined comfort.",
    image: "/assets/new_assets_2/Exective room @ 3500-4500.jpeg",
    priceSingle: "₹3,500",
    priceDouble: "₹4,500",
  },
  {
    title: "Super Deluxe",
    description: "Premium comfort with elegant furnishings, modern amenities, and a welcoming ambiance.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.30 PM.jpeg",
    priceSingle: "₹3,000",
    priceDouble: "₹4,000",
  },
  {
    title: "Deluxe",
    description: "Refined space and essential luxuries designed for a comfortable and restorative experience.",
    image: "/assets/new_assets_2/HOTEL ENTERANCE.jpeg",
    priceSingle: "₹2,500",
    priceDouble: "₹3,500",
  },
  {
    title: "Standard",
    description: "Comfortable and essential accommodation, ideal for solo travelers or short business trips.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.06 PM.jpeg",
    priceSingle: "₹2,200",
    priceDouble: "₹3,200",
  },
];

export const FeaturedRooms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1200) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  // Calculate visible rooms based on currentIndex and cardsToShow
  const getVisibleRooms = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(rooms[(currentIndex + i) % rooms.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-28 bg-onyx overflow-hidden relative">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="font-jakarta text-xs md:text-sm text-champagne uppercase font-bold mb-4"
          >
            Curated Living
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-4"
          >
            Curated <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Accommodations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-ivory font-jakarta text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold"
          >
            Single & Double Occupancy Rates • Extra Person @ ₹800
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div className="flex gap-6 md:gap-8 justify-center overflow-visible">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {getVisibleRooms().map((room, idx) => (
                <motion.div
                  key={`${room.title}-${currentIndex}-${idx}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 }
                  }}
                  className={cn(
                    "relative w-full max-w-[400px] flex-shrink-0",
                    cardsToShow === 1 ? "mx-auto" : ""
                  )}
                >
                  <div className="group/card relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/5 transition-all duration-700 hover:border-champagne/30 shadow-2xl">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover/card:scale-105 transition-transform duration-1000"
                      />
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-champagne px-3 py-2 md:px-4 md:py-3 rounded-none shadow-2xl flex flex-col items-center border border-white/20">
                          <div className="flex gap-2 md:gap-3 items-center">
                            <div className="text-center">
                              <p className="text-[#2E0249] font-jakarta font-black text-sm md:text-base leading-tight">{room.priceSingle}</p>
                              <p className="text-[#2E0249]/60 text-[6px] md:text-[7px] uppercase tracking-widest font-black">Single</p>
                            </div>
                            <div className="w-[1px] h-4 bg-[#2E0249]/20" />
                            <div className="text-center">
                              <p className="text-[#2E0249] font-jakarta font-black text-sm md:text-base leading-tight">{room.priceDouble}</p>
                              <p className="text-[#2E0249]/60 text-[6px] md:text-[7px] uppercase tracking-widest font-black">Double</p>
                            </div>
                          </div>
                          <p className="text-[#2E0249]/40 text-[5px] md:text-[6px] uppercase tracking-widest mt-1 border-t border-[#2E0249]/10 pt-1 w-full text-center font-bold whitespace-nowrap">
                            + GST as applicable
                          </p>
                        </div>
                      </div>
                      
                      {/* Gradient Overlay for Card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="p-8 md:p-10 relative z-10 bg-onyx/60">
                      <h3 className="text-2xl md:text-3xl font-cormorant font-bold text-ivory mb-4 group-hover/card:text-champagne transition-colors duration-500 uppercase tracking-tight">
                        {room.title}
                      </h3>
                      <p className="text-ivory/70 font-jakarta text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                        {room.description}
                      </p>
                    </div>
                    <div className="p-8 pt-0">
                      <Button asChild className="w-full bg-champagne text-black hover:bg-brass rounded-none py-6 text-[10px] uppercase tracking-[0.3em] font-bold h-auto transition-all duration-500">
                        <a href="tel:+919181043994" className="flex items-center justify-center gap-4">
                          Reserve Now <MoveRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center bg-black/60 backdrop-blur-xl border border-white/10 text-champagne rounded-full z-40 transition-all hover:bg-champagne hover:text-black shadow-2xl group/prev md:opacity-0 md:group-hover:opacity-100 md:-translate-x-4 md:group-hover:translate-x-0"
          >
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center bg-black/60 backdrop-blur-xl border border-white/10 text-champagne rounded-full z-40 transition-all hover:bg-champagne hover:text-black shadow-2xl group/next md:opacity-0 md:group-hover:opacity-100 md:translate-x-4 md:group-hover:translate-x-0"
          >
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12 md:mt-16">
          {rooms.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={cn(
                "h-1 transition-all duration-500",
                currentIndex === idx ? "w-12 bg-champagne" : "w-6 bg-white/10 hover:bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
