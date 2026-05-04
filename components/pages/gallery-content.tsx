"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const categories = ["All", "Rooms", "Dining", "General"];

const galleryImages = [
  { src: "/assets/new_assets/exterior.jpeg", category: "General", title: "The Grand Facade" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.12 PM.jpeg", category: "Rooms", title: "Deluxe Comfort" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.31 PM.jpeg", category: "Rooms", title: "Executive Space" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.27.26 PM.jpeg", category: "Dining", title: "Café Cove Ambiance" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.25.07 PM.jpeg", category: "Dining", title: "Breakfast Spot" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.27.35 PM.jpeg", category: "Dining", title: "Buffet Spread" },
  { src: "/assets/food/WhatsApp Image 2026-04-27 at 8.28.32 PM (1).jpeg", category: "Dining", title: "Gourmet Platter" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.32 PM.jpeg", category: "Rooms", title: "Presidential View" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.03 PM.jpeg", category: "Rooms", title: "Standard Elegance" },
  { src: "/assets/food/WhatsApp Image 2026-04-27 at 8.28.51 PM.jpeg", category: "Dining", title: "Signature Drinks" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.23.51 PM.jpeg", category: "General", title: "Main Hall" },
  { src: "/assets/new_assets/WhatsApp Image 2026-04-27 at 8.24.32 PM.jpeg", category: "Rooms", title: "Suite Living" },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Visual Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter"
          >
            Gallery
          </motion.h1>
          <div className="w-20 h-[1px] bg-champagne mx-auto mt-8" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-jakarta text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold py-2 border-b-2 transition-all duration-500 ${
                activeCategory === cat 
                  ? "text-champagne border-champagne" 
                  : "text-ivory/40 border-transparent hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.src + idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s] brightness-[0.8] group-hover:brightness-100"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-onyx/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-champagne text-[10px] uppercase tracking-[0.3em] mb-2">{image.category}</span>
                  <h3 className="text-ivory font-jakarta font-bold text-xl uppercase tracking-tighter">{image.title}</h3>
                  <div className="mt-4 w-8 h-[1px] bg-champagne group-hover:w-full transition-all duration-700" />
                  <div className="absolute top-8 right-8 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-champagne transition-colors duration-500">
                    <Maximize2 className="w-4 h-4 text-ivory group-hover:text-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-ivory hover:text-champagne transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[4/5] md:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full Preview"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorative Element */}
      <div className="fixed top-0 right-0 text-[30vw] font-jakarta font-black text-white/[0.01] uppercase leading-none pointer-events-none select-none z-0">
        Gallery
      </div>
    </main>
  );
}
