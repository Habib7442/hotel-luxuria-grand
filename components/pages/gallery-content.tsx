"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Play } from "lucide-react";

const categories = ["All", "Rooms", "Dining", "General", "Videos"];

const galleryItems = [
  { src: "/assets/new_assets_2/EXTERIOR(1).webp", category: "General", title: "The Grand Facade", type: "image" },
  { youtubeId: "rE25_7Hd2uA", category: "Videos", title: "Grand Entrance Preview", type: "video" },
  { src: "/assets/new_assets_2/HOTEL RRONT(1).webp", category: "General", title: "Architecture", type: "image" },
  { src: "/assets/new_assets_2/President Suite 5500-6500.webp", category: "Rooms", title: "Presidential Suite", type: "image" },
  { youtubeId: "_lj-vd8THMg", category: "Videos", title: "Café Cove Ambiance", type: "video" },
  { src: "/assets/new_assets_2/Executive suite @ 5000-6000.webp", category: "Rooms", title: "Executive Luxury", type: "image" },
  { src: "/assets/food/masala_dosa.webp", category: "Dining", title: "Crisp Masala Dosa", type: "image" },
  { youtubeId: "Gsq2o8V4qMM", category: "Videos", title: "Exclusive Suite Tour", type: "video" },
  { src: "/assets/food/tandoori_platter.webp", category: "Dining", title: "Signature Tandoori", type: "image" },
  { src: "/assets/food/grand_biryani.webp", category: "Dining", title: "Grand Feast Biryani", type: "image" },
  { youtubeId: "8favX0EEnMs", category: "Videos", title: "Bathroom Luxury", type: "video" },
  { src: "/assets/food/premium_coffee.webp", category: "Dining", title: "Artisan Coffee", type: "image" },
  { src: "/assets/new_assets_2/CAFE.webp", category: "Dining", title: "Café Cove", type: "image" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S .webp", category: "General", title: "Banquet Avaani", type: "image" },
  { src: "/assets/new_assets_2/HOTEL ENTERANCE.webp", category: "General", title: "Grand Entrance", type: "image" },
  { src: "/assets/new_assets_2/Exective room @ 3500-4500.webp", category: "Rooms", title: "Executive Room", type: "image" },
  { src: "/assets/new_assets_2/Super Deluxe room.webp", category: "Rooms", title: "Super Deluxe Room", type: "image" },
  { src: "/assets/new_assets_2/Standard room.webp", category: "Rooms", title: "Standard Room", type: "image" },
  { src: "/assets/new_assets_2/Bath room (3).webp", category: "Rooms", title: "Suite Bathroom", type: "image" },
  { src: "/assets/new_assets_2/CAFE(1).webp", category: "Dining", title: "Café Cove Interiors", type: "image" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S (1).webp", category: "General", title: "Avaani Banquet Hall", type: "image" },
  { src: "/assets/new_assets_2/HOTEL RRONT(3).webp", category: "General", title: "Modern Facade", type: "image" },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{src?: string, youtubeId?: string, type: string} | null>(null);

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
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden cursor-pointer bg-black/20 ${item.type === 'video' ? 'aspect-[9/16]' : 'aspect-[4/5]'}`}
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "video" ? (
                  <div className="w-full h-full relative">
                    <Image 
                      src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-champagne/80 flex items-center justify-center shadow-2xl">
                        <Play className="w-5 h-5 text-black fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src!}
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
              className={`relative w-full ${selectedItem.type === 'video' ? 'max-w-[450px] aspect-[9/16]' : 'max-w-6xl aspect-video'} flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "video" ? (
                <div className="w-full h-full overflow-hidden relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=0`}
                    title="Video Preview"
                    className="absolute -top-[60px] left-0 w-full h-[calc(100%+120px)] border-0 shadow-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedItem.src!}
                    alt="Full Preview"
                    fill
                    className="object-contain"
                  />
                </div>
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


