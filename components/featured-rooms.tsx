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
    title: "Executive Suite",
    description: "The pinnacle of Barak Valley luxury with sweeping views and bespoke interiors.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.47 PM.jpeg",
    price: "₹8,500",
  },
  {
    title: "Luxury Sanctuary",
    description: "Elegant design meets absolute privacy for a truly restorative experience.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.22 PM.jpeg",
    price: "₹6,500",
  },
  {
    title: "Twin Deluxe",
    description: "A sophisticated haven designed for shared comfort and modern utility.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.30 PM.jpeg",
    price: "₹5,000",
  },
  {
    title: "Presidential Royal",
    description: "Our grandest accommodation, featuring expansive living spaces and royal treatment.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.32 PM.jpeg",
    price: "₹12,000",
  },
  {
    title: "Club Premium",
    description: "Modern elegance tailored for the discerning traveler who values style and comfort.",
    image: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.34 PM.jpeg",
    price: "₹7,200",
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
    <section className="py-24 md:py-40 bg-gradient-to-b from-midnight-purple to-deep-maroon overflow-hidden relative">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="font-jakarta text-xs md:text-sm text-royal-gold uppercase font-bold mb-4"
          >
            Curated Living
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-champagne uppercase leading-[0.8] tracking-tighter"
          >
            Luxury Rooms <br />
            <span className="text-royal-gold">Just For You</span>
          </motion.h2>
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
                  <div className="group/card relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/5 transition-all duration-700 hover:border-royal-gold/30 shadow-2xl">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover/card:scale-105 transition-transform duration-1000"
                        priority={idx === 0 && currentIndex === 0}
                      />
                      <div className="absolute top-0 right-0 bg-royal-gold text-midnight-purple px-6 py-2 text-[10px] md:text-xs font-jakarta font-bold uppercase tracking-widest z-20">
                        {room.price} <span className="font-normal opacity-70">/ Night</span>
                      </div>
                      
                      {/* Gradient Overlay for Card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-purple via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="p-8 md:p-10 relative z-10 bg-midnight-purple/40">
                      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-champagne mb-4 group-hover/card:text-royal-gold transition-colors duration-500 uppercase tracking-tight">
                        {room.title}
                      </h3>
                      <p className="text-champagne/60 font-jakarta text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                        {room.description}
                      </p>
                      <Button asChild variant="link" className="text-royal-gold p-0 h-auto font-bold uppercase tracking-[0.2em] text-[10px] hover:text-champagne transition-all duration-300 gap-3 group/btn">
                        <Link href="/rooms">
                          View Details 
                          <MoveRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
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
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/10 text-royal-gold rounded-full z-40 transition-all hover:bg-royal-gold hover:text-midnight-purple shadow-2xl group/prev opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/10 text-royal-gold rounded-full z-40 transition-all hover:bg-royal-gold hover:text-midnight-purple shadow-2xl group/next opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
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
                currentIndex === idx ? "w-12 bg-royal-gold" : "w-6 bg-white/10 hover:bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
