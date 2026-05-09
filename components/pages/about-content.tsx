"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, Star, Shield, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-onyx overflow-hidden">

      {/* Cinematic About Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/new_assets_2/HOTEL RRONT(3).webp"
            alt="Luxuria Grand Lobby"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.3]"
            priority
          />
        </motion.div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-transparent to-onyx z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)] z-10" />

        <div className="relative z-20 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
            animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
            transition={{ duration: 1 }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            The Spirit of Silchar
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10vw] md:text-[100px] lg:text-[150px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter"
          >
            Our <br />
            <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal block mt-4">Legacy</span>
          </motion.h1>
        </div>
      </section>

      {/* The Narrative Section */}
      <section className="py-24 md:py-48 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="font-jakarta text-xs text-champagne uppercase font-bold tracking-[0.3em] mb-8">
                Welcome to Luxuria Grand
              </p>
              <h2 className="text-4xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase leading-[0.9] mb-10 tracking-tighter">
                Redefining <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Excellence</span>
              </h2>
              <div className="w-20 h-[1px] bg-champagne mb-10" />
              <div className="space-y-6 text-ivory/70 font-jakarta text-lg leading-relaxed max-w-xl">
                <p>
                  Located in the heart of Silchar, Hotel Luxuria Grand stands as a beacon of 
                  sophisticated luxury and warm Barak Valley hospitality. Our journey began with 
                  a simple vision: to create a sanctuary where modern comforts meet timeless 
                  elegance.
                </p>
                <p>
                  From our bespoke interiors to our world-class dining experiences, every 
                  detail at Luxuria Grand is curated to provide our guests with an 
                  unforgettable stay. We believe that true luxury lies in the art of 
                  service, and our dedicated team is committed to exceeding every 
                  expectation.
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] overflow-hidden group shadow-2xl"
              >
                <Image
                  src="/assets/new_assets_2/EXTERIOR(1).webp"
                  alt="Luxuria Grand Exterior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
              
              {/* Floating Stat */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-12 -right-12 bg-champagne p-12 hidden md:block"
              >
                <p className="text-black font-jakarta font-black text-5xl leading-none mb-2">100%</p>
                <p className="text-black/60 text-[10px] uppercase tracking-[0.2em] font-bold">Guest Satisfaction</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-40 bg-black/40 relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="font-jakarta text-xs text-champagne uppercase font-bold tracking-[0.4em] mb-6">Our Philosophy</p>
            <h2 className="text-4xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter">
              The Values That <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Drive Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Star, title: "Excellence", desc: "Setting the gold standard in every guest interaction." },
              { icon: Shield, title: "Integrity", desc: "Building trust through transparency and reliability." },
              { icon: Heart, title: "Hospitality", desc: "Genuine care that makes you feel at home." },
              { icon: Award, title: "Innovation", desc: "Continuously evolving to offer modern luxury." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full border border-champagne/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-champagne/10 transition-colors duration-500">
                  <value.icon className="w-6 h-6 text-champagne" />
                </div>
                <h3 className="text-ivory font-bold uppercase text-xs tracking-widest mb-4 group-hover:text-champagne transition-colors">{value.title}</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Showcase */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-20 relative"
            >
              <div className="absolute top-0 left-0 w-12 h-[1px] bg-champagne" />
              <h3 className="text-4xl md:text-5xl font-jakarta font-extrabold text-ivory uppercase mb-8 tracking-tighter">Our Mission</h3>
              <p className="text-ivory/70 text-lg leading-relaxed font-jakarta">
                To provide a sophisticated home away from home for the discerning traveler, 
                combining the soul of Silchar with international standards of comfort and elegance. 
                We strive to create meaningful experiences through personalized service and 
                uncompromising quality.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-champagne p-12 md:p-20 flex flex-col justify-center"
            >
              <h3 className="text-4xl md:text-5xl font-jakarta font-extrabold text-black uppercase mb-8 tracking-tighter">Our Vision</h3>
              <p className="text-black/80 text-lg leading-relaxed font-jakarta">
                To be recognized as the premier luxury destination in the Barak Valley, 
                setting the benchmark for hospitality and becoming the first choice for 
                those who seek the extraordinary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <Link href="/#rooms" className="group inline-flex items-center gap-6">
            <span className="text-champagne text-xs uppercase font-bold tracking-[0.5em]">Explore Our Rooms</span>
            <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center group-hover:bg-champagne group-hover:border-champagne transition-all duration-500">
              <MoveRight className="w-5 h-5 text-champagne group-hover:text-black transition-colors" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}

