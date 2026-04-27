"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    title: "Executive Suite",
    description: "Unparalleled comfort with a panoramic view of the lush surroundings.",
    image: "/assets/executive_suite.png",
    price: "₹8,500",
  },
  {
    title: "Luxury Room",
    description: "Elegant design meets modern luxury for a truly restorative stay.",
    image: "/assets/luxury_room.png",
    price: "₹6,500",
  },
  {
    title: "Deluxe Haven",
    description: "A cozy sanctuary designed for the sophisticated traveler.",
    image: "/assets/deluxe_room.png",
    price: "₹5,000",
  },
];

export const FeaturedRooms = () => {
  return (
    <section className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="script-text text-2xl md:text-3xl text-marigold mb-4"
          >
            Refined Living
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-playfair font-bold text-tobacco uppercase leading-tight"
          >
            Rooms Built for <br />
            <span className="italic">Indulgence</span>
          </motion.h2>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group h-full"
            >
              <div className="bg-white p-4 md:p-6 shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-sm text-center flex flex-col h-full">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 flex-shrink-0">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-marigold text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-jakarta font-bold">
                    {room.price} <span className="font-normal opacity-80">/night</span>
                  </div>
                </div>
                
                <div className="space-y-4 flex flex-col flex-grow">
                  <h3 className="text-2xl font-playfair font-bold text-tobacco group-hover:text-marigold transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-taupe font-jakarta text-sm leading-relaxed flex-grow">
                    {room.description}
                  </p>
                  <div className="pt-4 border-t border-taupe/10 mt-auto">
                    <Link 
                      href="/rooms" 
                      className="inline-flex items-center justify-center gap-2 text-[10px] font-jakarta font-bold uppercase tracking-widest text-tobacco hover:text-marigold transition-colors w-full"
                    >
                      View Details
                      <MoveRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <Button asChild className="bg-tobacco text-white hover:bg-marigold px-8 md:px-12 py-6 md:py-8 rounded-full text-[10px] md:text-sm uppercase tracking-widest h-auto font-bold shadow-lg transition-all">
            <Link href="/rooms">Explore All Accommodations</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
