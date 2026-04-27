"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Image Stack */}
          <div className="relative w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full md:w-[85%] rounded-lg overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/assets/lobby_story.png"
                alt="Luxuria Grand Lobby"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-12 -right-4 md:-right-12 aspect-square w-[50%] rounded-lg overflow-hidden shadow-2xl z-20 border-4 md:border-8 border-white"
            >
              <Image
                src="/assets/amenities_story.png"
                alt="Luxury Details"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="script-text text-2xl md:text-3xl text-marigold mb-4"
              >
                Our Legacy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-playfair font-bold text-tobacco uppercase leading-tight"
              >
                Where Luxury <br />
                Meets <span className="italic">Heritage</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-taupe font-jakarta text-lg leading-relaxed max-w-xl"
            >
              <p>
                Nestled in the heart of Silchar, Hotel Luxuria Grand is more than just a destination; it's an experience curated for those who seek the extraordinary. From our meticulously designed suites to our world-class hospitality, every detail is a tribute to the art of fine living.
              </p>
              <p>
                Whether you're here for a grand celebration or a quiet retreat, we invite you to immerse yourself in a world where warmth meets elegance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <Button asChild className="bg-tobacco text-white hover:bg-marigold px-8 md:px-12 py-6 md:py-8 rounded-full text-[10px] md:text-sm uppercase tracking-widest transition-all h-auto font-bold">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
