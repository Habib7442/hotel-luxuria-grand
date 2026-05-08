"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const categories = ["All", "Rooms", "Dining", "General"];

const galleryImages = [
  { src: "/assets/new_assets_2/EXTERIOR.jpeg", category: "General", title: "The Grand Facade" },
  { src: "/assets/new_assets_2/HOTEL RRONT(1).jpeg", category: "General", title: "Architecture" },
  { src: "/assets/new_assets_2/President Suite 5500-6500.jpeg", category: "Rooms", title: "Presidential Suite" },
  { src: "/assets/new_assets_2/Executive suite @ 5000-6000.jpeg", category: "Rooms", title: "Executive Luxury" },
  { src: "/assets/new_assets_2/CAFE.jpeg", category: "Dining", title: "Café Cove" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S .jpeg", category: "General", title: "Banquet Avaani" },
  { src: "/assets/new_assets_2/HOTEL ENTERANCE.jpeg", category: "General", title: "Grand Entrance" },
  { src: "/assets/new_assets_2/Exective room @ 3500-4500.jpeg", category: "Rooms", title: "Executive Room" },
  { src: "/assets/new_assets_2/CAFE(1).jpeg", category: "Dining", title: "Café Cove Interiors" },
  { src: "/assets/new_assets_2/CAFE(2).jpeg", category: "Dining", title: "Dining Ambiance" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S (1).jpeg", category: "General", title: "Avaani Banquet Hall" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S (2).jpeg", category: "General", title: "Event Spaces" },
  { src: "/assets/new_assets_2/President Suite 5500-6500(1).jpeg", category: "Rooms", title: "Presidential Luxury" },
  { src: "/assets/new_assets_2/EXTERIOR(1).jpeg", category: "General", title: "Night Illumination" },
  { src: "/assets/new_assets_2/HOTEL FRONT.jpeg", category: "General", title: "Hotel Exterior" },
  { src: "/assets/new_assets_2/HOTEL FRONT(2).jpeg", category: "General", title: "Exterior Architecture" },
  { src: "/assets/new_assets_2/HOTEL RRONT(3).jpeg", category: "General", title: "Modern Facade" },
  { src: "/assets/new_assets_2/Bath room .jpeg", category: "Rooms", title: "Bathroom Suite" },
  { src: "/assets/new_assets_2/Bath room.jpeg", category: "Rooms", title: "Guest Bath" },
  { src: "/assets/new_assets_2/Bath room (1).jpeg", category: "Rooms", title: "Ensuite Luxury" },
  { src: "/assets/new_assets_2/Bath room (2).jpeg", category: "Rooms", title: "Modern Bathrooms" },
  { src: "/assets/new_assets_2/Bath room (3).jpeg", category: "Rooms", title: "Premium Finishes" },
  { src: "/assets/new_assets_2/Bath room (4).jpeg", category: "Rooms", title: "Suite Bathroom" },
  { src: "/assets/new_assets_2/Bath room (5).jpeg", category: "Rooms", title: "Elegant Bath" },
  { src: "/assets/new_assets_2/Bath room (6).jpeg", category: "Rooms", title: "Refined Details" },
  { src: "/assets/new_assets_2/Bath room (7).jpeg", category: "Rooms", title: "Luxury Amenities" },
  { src: "/assets/new_assets_2/Bath room (8).jpeg", category: "Rooms", title: "Executive Bath" },
  { src: "/assets/new_assets_2/Bath room (9).jpeg", category: "Rooms", title: "Polished Design" },
  { src: "/assets/new_assets_2/HOTEL FRONTpeg.jpg", category: "General", title: "Hotel Frontage" },
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
