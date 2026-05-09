"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BrandStory = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-onyx overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Image Stack */}
          <div className="relative w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] w-full md:w-[85%] rounded-none overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-10 border border-white/5"
            >
              <Image
                src="/assets/new_assets_2/HOTEL FRONT.webp"
                alt="Hotel Luxuria Grand Exterior"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -bottom-12 -right-4 md:-right-12 aspect-square w-[55%] rounded-none overflow-hidden shadow-2xl z-20 border-[8px] md:border-[16px] border-onyx"
            >
              <Image
                src="/assets/new_assets_2/HOTEL ENTERANCE.webp"
                alt="Grand Entrance"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.6em" }}
                viewport={{ once: true }}
                className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
              >
                Our Legacy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter"
              >
                Our Story <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Your Luxury</span>
              </motion.h2>
            </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="space-y-6 text-ivory/70 font-jakarta text-sm md:text-base leading-relaxed max-w-xl font-medium tracking-wide"
              >
              <p>
                Located in the heart of Silchar, Hotel Luxuria Grand is a sanctuary designed for those who seek the extraordinary. Every corner of our property is a testament to the art of fine living, blending world-class amenities with the warmth of Barak Valley hospitality.
              </p>
              <p>
                Whether you are here for a high-profile corporate event or a restorative retreat, we invite you to experience a stay where every detail is tailored to your perfection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-10"
            >
              <Button asChild className="bg-champagne text-black hover:bg-brass px-12 md:px-16 py-8 md:py-10 rounded-none text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all duration-500 h-auto font-bold shadow-2xl shadow-black/20 border border-white/5">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

