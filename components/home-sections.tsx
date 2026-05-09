"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export const HomeSections = () => {
  return (
    <div className="bg-onyx">
      {/* Section 1: Dining - Culinaria */}
      <section id="dining" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                viewport={{ once: true }}
                className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
              >
                Exquisite Dining
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-[12vw] md:text-[80px] lg:text-[100px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter mb-8"
              >
                The Art of <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Culinaria</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="text-ivory/70 font-jakarta text-sm md:text-base leading-relaxed max-w-xl font-medium tracking-wide mb-10"
              >
                Indulge in a gastronomic journey where local flavors meet global sophistication. 
                Our master chefs curate every dish to tell a story of Barak Valley&apos;s heritage 
                and the finest culinary traditions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Button asChild className="bg-champagne text-black hover:bg-brass px-12 py-8 rounded-none text-[10px] uppercase tracking-[0.3em] transition-all duration-500 h-auto font-bold group border border-white/5 shadow-2xl">
                  <Link href="/dining" className="flex items-center gap-4">
                    Explore Menu <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl border border-white/5"
              >
                <Image
                  src="/assets/food/WhatsApp Image 2026-04-27 at 8.28.32 PM (1).webp"
                  alt="Fine Dining at Hotel Luxuria Grand"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Weddings & Events */}
      <section id="events" className="py-20 md:py-32 relative bg-ivory/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl border border-white/5"
              >
                <Image
                  src="/assets/new_assets_2/BANQUET AVAANI_S .webp"
                  alt="Grand Banquet Hall"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                viewport={{ once: true }}
                className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
              >
                Celebrations
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-[12vw] md:text-[80px] lg:text-[100px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter mb-8"
              >
                Grand <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Occasions</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="text-ivory/70 font-jakarta text-sm md:text-base leading-relaxed max-w-xl font-medium tracking-wide mb-10"
              >
                From fairytale weddings to high-profile corporate galas, our majestic 
                banquet halls provide the perfect canvas for your most significant moments. 
                Experience a legacy of celebration.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Button asChild className="bg-champagne text-black hover:bg-brass px-12 py-8 rounded-none text-[10px] uppercase tracking-[0.3em] transition-all duration-500 h-auto font-bold group border border-white/5 shadow-2xl">
                  <Link href="/events" className="flex items-center gap-4">
                    Plan Your Event <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Gallery Teaser */}
      <section id="gallery" className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Visual Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[12vw] md:text-[80px] lg:text-[100px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter"
          >
            Captured <br />
            <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Moments</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2 max-w-[1800px] mx-auto">
          {[
            { src: "/assets/new_assets_2/CAFE.webp", alt: "Luxuria Grand Café Cove" },
            { src: "/assets/new_assets_2/HOTEL FRONT(2).webp", alt: "Hotel Entrance" },
            { src: "/assets/new_assets_2/President Suite 5500-6500.webp", alt: "Presidential Suite View" },
            { src: "/assets/new_assets_2/BANQUET AVAANI_S (1).webp", alt: "Banquet Hall Avaani" }
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover md:grayscale md:hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-champagne/50 text-champagne hover:bg-champagne hover:text-black px-12 py-8 rounded-none text-[10px] uppercase tracking-[0.3em] font-bold h-auto transition-all duration-500">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

