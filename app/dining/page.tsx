"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Utensils, Coffee, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DiningPage() {
  return (
    <main className="min-h-screen bg-midnight-purple overflow-hidden">

      {/* Cinematic Dining Hero */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/new_assets/WhatsApp Image 2026-04-27 at 8.27.26 PM.jpeg"
            alt="Café Cove Ambiance"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.4]"
            priority
          />
        </motion.div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-midnight-purple z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,2,73,0.2)_0%,transparent_70%)] z-10" />

        <div className="relative z-20 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
            animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
            transition={{ duration: 1 }}
            className="font-jakarta text-xs md:text-sm text-royal-gold uppercase font-bold mb-6"
          >
            Culinary Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-champagne uppercase leading-[0.8] tracking-tighter"
          >
            Café <br />
            <span className="text-royal-gold">Cove</span>
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="font-jakarta text-sm text-royal-gold uppercase font-bold tracking-[0.3em] mb-6">
                The Ambiance
              </p>
              <h2 className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-champagne uppercase leading-[0.8] mb-8 tracking-tighter">
                Eat Well <br />
                <span className="text-royal-gold">Live Better</span>
              </h2>
              <p className="text-champagne/70 font-jakarta text-lg leading-relaxed max-w-xl">
                Experience the finest culinary journey in Silchar. Café Cove combines modern luxury with 
                traditional flavors, creating a sanctuary for food lovers and social seekers alike.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="space-y-2">
                  <Utensils className="text-royal-gold w-6 h-6 mb-2" />
                  <h4 className="text-champagne font-bold uppercase text-xs tracking-widest">Fine Dining</h4>
                  <p className="text-champagne/50 text-xs">World-class cuisine prepared by experts.</p>
                </div>
                <div className="space-y-2">
                  <Coffee className="text-royal-gold w-6 h-6 mb-2" />
                  <h4 className="text-champagne font-bold uppercase text-xs tracking-widest">Craft Coffee</h4>
                  <p className="text-champagne/50 text-xs">Specially brewed for your morning bliss.</p>
                </div>
              </div>
            </motion.div>

            <div className="relative grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/5"
              >
                <Image
                  src="/assets/new_assets/WhatsApp Image 2026-04-27 at 8.25.07 PM.jpeg"
                  alt="Cafe Area"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-[4/5] mt-12 rounded-sm overflow-hidden border border-white/5"
              >
                <Image
                  src="/assets/new_assets/WhatsApp Image 2026-04-27 at 8.27.35 PM.jpeg"
                  alt="Buffet Experience"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experience - Horizontal Showcase */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 gap-10">
            <div className="max-w-4xl">
              <p className="font-jakarta text-sm text-royal-gold uppercase font-bold tracking-[0.3em] mb-6">
                Signature
              </p>
              <h2 className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-champagne uppercase leading-[0.8] tracking-tighter">
                Our Best <br />
                <span className="text-royal-gold">Selections</span>
              </h2>
            </div>
            <Button variant="outline" className="w-fit border-royal-gold/30 text-royal-gold hover:bg-royal-gold hover:text-midnight-purple transition-all duration-500 rounded-none px-10 py-8 uppercase tracking-widest text-xs font-bold whitespace-nowrap">
              View Full Menu <MoveRight className="ml-3 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Exotic Platters", 
                desc: "A fusion of local spices and international techniques.", 
                img: "/assets/food/WhatsApp Image 2026-04-27 at 8.28.32 PM (1).jpeg" 
              },
              { 
                title: "Gourmet Bites", 
                desc: "Perfectly crafted appetizers for any time of the day.", 
                img: "/assets/food/WhatsApp Image 2026-04-27 at 8.28.38 PM.jpeg" 
              },
              { 
                title: "Artisanal Brews", 
                desc: "Refreshing drinks and beverages designed to delight.", 
                img: "/assets/food/WhatsApp Image 2026-04-27 at 8.28.51 PM.jpeg" 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative overflow-hidden aspect-square border border-white/5"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-jakarta font-bold text-champagne mb-2">{item.title}</h3>
                  <p className="text-champagne/60 text-sm font-jakarta">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-jakarta font-black text-white/[0.02] uppercase pointer-events-none select-none whitespace-nowrap">
          RESERVE
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-24 shadow-2xl">
            <h2 className="text-[15vw] md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-champagne uppercase leading-[0.8] mb-8 tracking-tighter">
              Book Your <br />
              <span className="text-royal-gold">Table</span>
            </h2>
            <p className="text-champagne/60 font-jakarta text-lg mb-12 max-w-xl mx-auto">
              Ready for an unforgettable dining experience? Reserve your spot at Café Cove today and 
              let us take care of the rest.
            </p>
            <Button className="bg-royal-gold text-midnight-purple hover:bg-champagne transition-all duration-500 rounded-none px-12 py-8 text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Reservation <MoveRight className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
