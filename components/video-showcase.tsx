"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videoAssets = [
  {
    title: "Grand Entrance",
    id: "rE25_7Hd2uA",
    tag: "Welcome"
  },
  {
    title: "Cafe Cove",
    id: "_lj-vd8THMg",
    tag: "Dining"
  },
  {
    title: "Exclusive Suite",
    id: "Gsq2o8V4qMM",
    tag: "Elite"
  },
  {
    title: "Luxury Bath",
    id: "8favX0EEnMs",
    tag: "Amenities"
  }
];

export function VideoShowcase() {
  return (
    <section className="py-24 bg-onyx relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-10 left-0 text-[15vw] font-jakarta font-black text-white/[0.02] uppercase leading-none pointer-events-none select-none">
        Experience
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-jakarta text-[10px] text-champagne uppercase font-bold tracking-[0.4em] mb-4">
            Cinematic Preview
          </p>
          <h2 className="text-4xl md:text-6xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter">
            The <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Atmosphere</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {videoAssets.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative aspect-[9/16] bg-black rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-champagne/50 transition-all duration-500 max-w-[350px] mx-auto w-full"
            >
              {/* Top-Crop Hack to hide YouTube Title Bar */}
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=0&autoplay=0&mute=1`}
                  title={video.title}
                  className="absolute -top-[60px] left-0 w-full h-[calc(100%+120px)] border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Refined Label (Top Left) */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-bold mb-1 block drop-shadow-lg">
                  {video.tag}
                </span>
                <h3 className="text-ivory font-jakarta font-bold text-base uppercase tracking-tighter drop-shadow-lg">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

