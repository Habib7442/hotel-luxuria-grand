"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Users, Music, Calendar, Utensils, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventsContent() {
  return (
    <main className="min-h-screen bg-onyx overflow-hidden">

      {/* Events Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/new_assets/WhatsApp Image 2026-04-27 at 8.23.51 PM.jpeg"
          alt="Grand Events at Luxuria"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-transparent to-onyx z-10" />
        
        <div className="relative z-20 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
            animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Grand Celebrations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-[100px] lg:text-[140px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter"
          >
            Unforgettable <br />
            <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal block mt-4">Occasions</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-6xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-10">
              Host the <span className="text-champagne">Extraordinary</span>
            </h2>
            <div className="w-20 h-[1px] bg-champagne mx-auto mb-10" />
            <p className="text-ivory/70 font-jakarta text-xl leading-relaxed mb-16">
              From grand weddings that echo with joy to high-stakes corporate conferences, 
              Hotel Luxuria Grand provides the perfect canvas for your most significant moments. 
              Our versatile banquet spaces and expert planning team ensure every detail is 
              executed with precision and flair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              { icon: Star, title: "Grand Weddings", desc: "Crafting fairytale celebrations with bespoke decor and lavish catering." },
              { icon: Users, title: "Corporate Events", desc: "Professional spaces equipped with modern technology for your business success." },
              { icon: Music, title: "Social Gatherings", desc: "Vibrant venues for birthdays, anniversaries, and festive celebrations." }
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/5 p-10 group hover:border-champagne/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full border border-champagne/20 flex items-center justify-center mb-8 group-hover:bg-champagne group-hover:border-champagne transition-all duration-500">
                  <event.icon className="w-6 h-6 text-champagne group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-ivory font-jakarta font-extrabold text-xl uppercase mb-4 tracking-tighter group-hover:text-champagne transition-colors">{event.title}</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet Showcase */}
      <section className="py-24 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-[4/5] overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/new_assets/WhatsApp Image 2026-04-27 at 8.23.51 PM.jpeg"
                alt="Banquet Hall"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-onyx/20" />
            </motion.div>

            <div>
              <p className="font-jakarta text-xs text-champagne uppercase font-bold tracking-[0.3em] mb-8">Premium Venue</p>
              <h2 className="text-5xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase leading-[0.9] mb-10 tracking-tighter">
                The Grand <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Ballroom</span>
              </h2>
              <p className="text-ivory/70 font-jakarta text-lg leading-relaxed mb-12 max-w-xl">
                Our flagship venue offers an expansive, pillar-less space designed to accommodate large 
                gatherings with ease. Featuring state-of-the-art acoustics, elegant lighting, and 
                versatile seating arrangements.
              </p>

              <div className="space-y-6">
                {[
                  "Capacity: Up to 500 Guests",
                  "High-Speed AV Equipment",
                  "Dedicated Pre-function Area",
                  "Customizable Gourmet Catering"
                ].map(feature => (
                  <div key={feature} className="flex items-center gap-4 group">
                    <div className="w-6 h-[1px] bg-champagne group-hover:w-12 transition-all duration-500" />
                    <span className="text-ivory/60 text-xs uppercase tracking-widest font-bold group-hover:text-ivory transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Inquiry CTA */}
      <section className="py-24 md:py-48 relative overflow-hidden">
         {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-jakarta font-black text-white/[0.01] uppercase pointer-events-none select-none whitespace-nowrap">
          Plan
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto border border-white/10 p-12 md:p-24 bg-white/[0.02] backdrop-blur-xl"
          >
            <h2 className="text-5xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-8 leading-tight">
              Start Planning Your <br />
              <span className="text-champagne">Perfect Event</span>
            </h2>
            <p className="text-ivory/60 font-jakarta text-lg mb-12 max-w-xl mx-auto">
              Our expert event coordinators are ready to help you bring your vision to life. 
              Contact us today for a personalized consultation and venue tour.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button asChild className="bg-champagne text-black hover:bg-brass rounded-none py-8 text-[10px] font-bold uppercase tracking-[0.3em] h-auto w-full md:w-[280px] shadow-2xl transition-all duration-500">
                <Link href="/book?type=dining" className="flex items-center justify-center gap-4">
                  Inquire Now <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/10 text-ivory hover:bg-white/5 rounded-none py-8 text-[10px] font-bold uppercase tracking-[0.3em] h-auto w-full md:w-[280px] transition-all duration-500">
                <Link href="tel:+919181043994" className="flex items-center justify-center">Call Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
