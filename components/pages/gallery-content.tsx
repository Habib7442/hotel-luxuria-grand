"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Play } from "lucide-react";

const categories = ["All", "Rooms", "Dining", "General", "Videos"];

const galleryItems = [
  { src: "/assets/new_assets_2/EXTERIOR(1).jpeg", category: "General", title: "The Grand Facade", type: "image" },
  { src: "/assets/new_assets_2/video Hotel Entry Gate .mp4", category: "Videos", title: "Grand Entrance Preview", type: "video" },
  { src: "/assets/new_assets_2/HOTEL RRONT(1).jpeg", category: "General", title: "Architecture", type: "image" },
  { src: "/assets/new_assets_2/video prezident suit.mp4", category: "Videos", title: "President Suite Tour", type: "video" },
  { src: "/assets/new_assets_2/President Suite 5500-6500.jpeg", category: "Rooms", title: "Presidential Suite", type: "image" },
  { src: "/assets/new_assets_2/video cafe entry.mp4", category: "Videos", title: "Café Cove Ambiance", type: "video" },
  { src: "/assets/new_assets_2/Executive suite @ 5000-6000.jpeg", category: "Rooms", title: "Executive Luxury", type: "image" },
  { src: "/assets/new_assets_2/video of recption .mp4", category: "Videos", title: "Grand Reception", type: "video" },
  { src: "/assets/food/masala_dosa.png", category: "Dining", title: "Crisp Masala Dosa", type: "image" },
  { src: "/assets/food/tandoori_platter.png", category: "Dining", title: "Signature Tandoori", type: "image" },
  { src: "/assets/food/grand_biryani.png", category: "Dining", title: "Grand Feast Biryani", type: "image" },
  { src: "/assets/food/premium_coffee.png", category: "Dining", title: "Artisan Coffee", type: "image" },
  { src: "/assets/new_assets_2/CAFE.jpeg", category: "Dining", title: "Café Cove", type: "image" },
  { src: "/assets/new_assets_2/video bathroom.mp4", category: "Videos", title: "Bathroom Luxury", type: "video" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S .jpeg", category: "General", title: "Banquet Avaani", type: "image" },
  { src: "/assets/new_assets_2/HOTEL ENTERANCE.jpeg", category: "General", title: "Grand Entrance", type: "image" },
  { src: "/assets/new_assets_2/Exective room @ 3500-4500.jpeg", category: "Rooms", title: "Executive Room", type: "image" },
  { src: "/assets/new_assets_2/Super Deluxe room.jpeg", category: "Rooms", title: "Super Deluxe Room", type: "image" },
  { src: "/assets/new_assets_2/Standard room.jpeg", category: "Rooms", title: "Standard Room", type: "image" },
  { src: "/assets/new_assets_2/Bath room (3).jpeg", category: "Rooms", title: "Suite Bathroom", type: "image" },
  { src: "/assets/new_assets_2/CAFE(1).jpeg", category: "Dining", title: "Café Cove Interiors", type: "image" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S (1).jpeg", category: "General", title: "Avaani Banquet Hall", type: "image" },
  { src: "/assets/new_assets_2/HOTEL RRONT(3).jpeg", category: "General", title: "Modern Facade", type: "image" },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{src: string, type: string} | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.src + idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-black/20"
                onClick={() => setSelectedItem({ src: item.src, type: item.type })}
              >
                {item.type === "video" ? (
                  <div className="w-full h-full relative">
                    <video 
                      src={item.src} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-champagne/80 flex items-center justify-center shadow-2xl">
                        <Play className="w-5 h-5 text-black fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
                )}
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-onyx/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-champagne text-[10px] uppercase tracking-[0.3em] mb-2">{item.category}</span>
                  <h3 className="text-ivory font-jakarta font-bold text-xl uppercase tracking-tighter">{item.title}</h3>
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
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-10 right-10 text-ivory hover:text-champagne transition-colors z-[110]"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[4/5] md:aspect-video flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "video" ? (
                <video 
                  src={selectedItem.src} 
                  controls 
                  autoPlay 
                  className="max-h-full max-w-full shadow-2xl"
                />
              ) : (
                <Image
                  src={selectedItem.src}
                  alt="Full Preview"
                  fill
                  className="object-contain"
                />
              )}
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
