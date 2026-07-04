"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Play } from "lucide-react";

const categories = ["All", "Rooms", "Dining", "General", "Videos"];

const galleryItems = [
  { src: "/assets/new_assets_2/EXTERIOR(1).webp", category: "General", title: "The Grand Facade", type: "image", aspect: "portrait" },
  { youtubeId: "rE25_7Hd2uA", category: "Videos", title: "Grand Entrance Preview", type: "video" },
  { src: "/assets/new_assets_2/HOTEL RRONT(1).webp", category: "General", title: "Architecture", type: "image", aspect: "portrait" },
  { src: "/assets/new_assets_2/President Suite 5500-6500.webp", category: "Rooms", title: "Presidential Suite", type: "image", aspect: "landscape" },
  { youtubeId: "_lj-vd8THMg", category: "Videos", title: "Café Cove Ambiance", type: "video" },
  { src: "/assets/new_assets_2/Executive suite @ 5000-6000.webp", category: "Rooms", title: "Executive Luxury", type: "image", aspect: "landscape" },
  { src: "/assets/food/masala_dosa.webp", category: "Dining", title: "Crisp Masala Dosa", type: "image", aspect: "square" },
  { youtubeId: "Gsq2o8V4qMM", category: "Videos", title: "Exclusive Suite Tour", type: "video" },
  { src: "/assets/food/tandoori_platter.webp", category: "Dining", title: "Signature Tandoori", type: "image", aspect: "square" },
  { src: "/assets/food/grand_biryani.webp", category: "Dining", title: "Grand Feast Biryani", type: "image", aspect: "square" },
  { youtubeId: "8favX0EEnMs", category: "Videos", title: "Bathroom Luxury", type: "video" },
  { src: "/assets/food/premium_coffee.webp", category: "Dining", title: "Artisan Coffee", type: "image", aspect: "square" },
  { src: "/assets/new_assets_2/CAFE.webp", category: "Dining", title: "Café Cove", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S .webp", category: "General", title: "Banquet Avaani", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_2/HOTEL ENTERANCE.webp", category: "General", title: "Grand Entrance", type: "image", aspect: "portrait" },
  { src: "/assets/new_assets_2/Exective room @ 3500-4500.webp", category: "Rooms", title: "Executive Room", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_2/Super Deluxe room.webp", category: "Rooms", title: "Super Deluxe Room", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_2/Standard room.webp", category: "Rooms", title: "Standard Room", type: "image", aspect: "portrait" },
  { src: "/assets/new_assets_2/Bath room (3).webp", category: "Rooms", title: "Suite Bathroom", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_2/CAFE(1).webp", category: "Dining", title: "Café Cove Interiors", type: "image", aspect: "portrait" },
  { src: "/assets/new_assets_2/BANQUET AVAANI_S (1).webp", category: "General", title: "Avaani Banquet Hall", type: "image", aspect: "portrait" },
  { src: "/assets/new_assets_2/HOTEL RRONT(3).webp", category: "General", title: "Modern Facade", type: "image", aspect: "portrait" },

  // New Assets 3 Group
  { src: "/assets/new_assets_3/gallery-new-01.webp", category: "Rooms", title: "Premium Twin Room", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-02.webp", category: "General", title: "Reception Lounge", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-03.webp", category: "Dining", title: "Grand Dining Room", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-04.webp", category: "Rooms", title: "Executive Suite Bed", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-05.webp", category: "Rooms", title: "Private Suite Lounge", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-06.webp", category: "Rooms", title: "Deluxe Double Room", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-07.webp", category: "Rooms", title: "Standard Double Room", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-08.webp", category: "Dining", title: "Anaaya's Fine Dining", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-09.webp", category: "Rooms", title: "Elegant Double Bed", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-10.webp", category: "Dining", title: "Anaaya's Restaurant", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-11.webp", category: "Rooms", title: "In-Room Dresser Desk", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-12.webp", category: "Dining", title: "Avaani Banquet Hall", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-13.webp", category: "Rooms", title: "Elite Double Bed", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-14.webp", category: "Rooms", title: "Classic Deluxe Room", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-15.webp", category: "Rooms", title: "Executive Suite Bedroom", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-16.webp", category: "Rooms", title: "Suite Private Lounge", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-17.webp", category: "Rooms", title: "Suite Sitting Space", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-18.webp", category: "Rooms", title: "Modern Suite Bathroom", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-19.webp", category: "Dining", title: "Buffet Dining Space", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-20.webp", category: "Rooms", title: "Luxury Guest Bathroom", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-21.webp", category: "Rooms", title: "Comfort Suite Desk", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-22.webp", category: "Rooms", title: "Premium Twin Beds", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-23.webp", category: "Rooms", title: "Suite Sitting Corner", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-24.webp", category: "Dining", title: "Café Cove Bar Counter", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-25.webp", category: "Dining", title: "Anaaya's Dining Ambiance", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-26.webp", category: "Rooms", title: "Chic Guest Washroom", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-27.webp", category: "Rooms", title: "Luxury In-Room Desk", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-28.webp", category: "Rooms", title: "Signature Deluxe Bed", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-29.webp", category: "Rooms", title: "Deluxe Suite View", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-30.webp", category: "General", title: "Lobby Hallway Seating", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-31.webp", category: "Rooms", title: "Luxury Blue-Themed Bed", type: "image", aspect: "landscape" },
  { src: "/assets/new_assets_3/gallery-new-32.webp", category: "Dining", title: "Café Cove Patisserie", type: "image", aspect: "landscape" },
];

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState("Photos"); // "Photos" or "Videos"
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<{src?: string, youtubeId?: string, type: string, aspect?: string} | null>(null);

  const itemsPerPage = 12;

  // Split items into photos and videos
  const photoItems = galleryItems.filter(item => item.type === "image");
  const videoItems = galleryItems.filter(item => item.type === "video");

  // Filter photos by category
  const filteredPhotos = activeCategory === "All" 
    ? photoItems 
    : photoItems.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  
  // Clamp page number
  const page = Math.min(Math.max(1, currentPage), totalPages || 1);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
      };
    }
  }, [selectedItem]);

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
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
          <div className="w-20 h-[1px] bg-champagne mx-auto mt-6" />
        </div>

        {/* Top-Level Tab Switcher (Photos vs Videos) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-black/40 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => {
                setActiveTab("Photos");
                setCurrentPage(1);
              }}
              className={`font-jakarta text-xs uppercase tracking-[0.2em] font-bold px-8 py-3 rounded-full transition-all duration-500 cursor-pointer ${
                activeTab === "Photos"
                  ? "bg-champagne text-black shadow-lg"
                  : "text-ivory/60 hover:text-ivory"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => {
                setActiveTab("Videos");
              }}
              className={`font-jakarta text-xs uppercase tracking-[0.2em] font-bold px-8 py-3 rounded-full transition-all duration-500 cursor-pointer ${
                activeTab === "Videos"
                  ? "bg-champagne text-black shadow-lg"
                  : "text-ivory/60 hover:text-ivory"
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Sub-Filters (only for Photos) */}
        {activeTab === "Photos" && (
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-16">
            {categories.filter(cat => cat !== "Videos").map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                aria-label={`Show ${cat} items`}
                aria-pressed={activeCategory === cat}
                className={`font-jakarta text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold py-2 border-b-2 transition-all duration-500 cursor-pointer ${
                  activeCategory === cat 
                    ? "text-champagne border-champagne" 
                    : "text-ivory/40 border-transparent hover:text-ivory"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {/* Photos Tab Grid */}
          {activeTab === "Photos" && (
            photoItems.map((item, idx) => {
              const matchesCategory = activeCategory === "All" || item.category === activeCategory;
              const indexInActiveCategory = filteredPhotos.indexOf(item);
              const matchesPage = indexInActiveCategory >= startIndex && indexInActiveCategory < endIndex;
              const isVisible = matchesCategory && matchesPage;

              return (
                <motion.div
                  key={`photo-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1, display: "block" } : { opacity: 0, scale: 0.9, transitionEnd: { display: "none" } }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden cursor-pointer bg-black/20 ${
                    item.aspect === 'landscape' 
                      ? 'aspect-[4/3]' 
                      : item.aspect === 'square' 
                        ? 'aspect-square' 
                        : 'aspect-[4/5]'
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.src!}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
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
              );
            })
          )}

          {/* Videos Tab Grid */}
          {activeTab === "Videos" && (
            videoItems.map((item, idx) => (
              <motion.div
                key={`video-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, display: "block" }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden cursor-pointer bg-black/20 aspect-[9/16]"
                onClick={() => setSelectedItem(item)}
              >
                <div className="w-full h-full relative">
                  <Image 
                    src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-champagne/80 flex items-center justify-center shadow-2xl">
                      <Play className="w-5 h-5 text-black fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
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
            ))
          )}
        </motion.div>

        {/* Pagination Controls */}
        {activeTab === "Photos" && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={page === 1}
              className={`px-6 py-2.5 border border-champagne/30 text-xs font-jakarta uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                page === 1
                  ? "opacity-30 cursor-not-allowed text-ivory/40 border-white/10"
                  : "text-champagne hover:bg-champagne hover:text-black hover:border-champagne"
              }`}
            >
              Prev
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-jakarta text-xs font-bold transition-all duration-300 cursor-pointer ${
                    page === p
                      ? "bg-champagne text-black shadow-md"
                      : "text-ivory/60 hover:text-ivory hover:bg-white/5"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              className={`px-6 py-2.5 border border-champagne/30 text-xs font-jakarta uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                page === totalPages
                  ? "opacity-30 cursor-not-allowed text-ivory/40 border-white/10"
                  : "text-champagne hover:bg-champagne hover:text-black hover:border-champagne"
              }`}
            >
              Next
            </button>
          </div>
        )}
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
            role="dialog"
            aria-modal="true"
            aria-label="Media Preview"
          >
            <button 
              className="absolute top-10 right-10 text-ivory hover:text-champagne transition-colors z-[110] cursor-pointer"
              onClick={() => setSelectedItem(null)}
              aria-label="Close Lightbox"
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
                    alt="Gallery item preview"
                    fill
                    sizes="100vw"
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


