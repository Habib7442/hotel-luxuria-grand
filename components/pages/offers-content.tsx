"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, Tag, Zap, ShieldCheck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: "offer-1",
    title: "Sweet Indulgence",
    description: "Indulge your sweet side at Café Cove. Experience handcrafted desserts where every bite feels like a little celebration in our premium coffee lounge.",
    image: "/assets/offers/cafe-cove-dessert.jpg",
    validTill: "Limited time offer",
    link: "/book?type=dining"
  },
  {
    id: "offer-2",
    title: "Weekday Luxury Special",
    description: "Weekends are cool, but weekdays just got better. Exclusive weekday packages starting from 18th May for the perfect business or leisure stay.",
    image: "/assets/offers/weekday-special.jpg",
    validTill: "Starts 18th May",
    link: "/book?type=dining"
  },
  {
    id: "offer-3",
    title: "Grand Combo Feast",
    description: "When one dish isn't enough, go for the Grand Combo Feast at Anaaya's. A massive spread of our signature delicacies starting from 18th May.",
    image: "/assets/offers/grand-combo-feast.jpg",
    validTill: "Starts 18th May",
    link: "/book?type=dining"
  },
];

export default function OffersContent() {
  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Exclusive Benefits
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter"
          >
            Offers & <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Packages</span>
          </motion.h1>
          <div className="w-20 h-[1px] bg-champagne mx-auto mt-8" />
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-7xl mx-auto py-12 border-y border-white/5">
          {[
            { icon: ShieldCheck, text: "Best Rate Guaranteed" },
            { icon: Zap, text: "Instant Confirmation" },
            { icon: Gift, text: "Welcome Amenities" },
            { icon: Tag, text: "Exclusive Discounts" }
          ].map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 group">
              <benefit.icon className="w-5 h-5 text-champagne transition-transform group-hover:scale-110" />
              <span className="text-ivory/60 text-[9px] uppercase tracking-widest font-bold">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/5 overflow-hidden group hover:border-champagne/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-black/40">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[10px] text-champagne uppercase font-bold tracking-[0.3em] mb-4">{offer.validTill}</p>
                <h2 className="text-2xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-6 group-hover:text-champagne transition-colors">
                  {offer.title}
                </h2>
                <p className="text-ivory/50 text-xs leading-relaxed font-jakarta mb-8 flex-grow">
                  {offer.description}
                </p>
                <Button asChild className="w-full bg-white/5 hover:bg-champagne text-ivory hover:text-black border border-white/10 hover:border-champagne rounded-none py-6 text-[10px] font-bold uppercase tracking-[0.3em] h-auto transition-all">
                  <Link href={offer.link} className="flex items-center justify-center gap-3">
                    Claim Offer <MoveRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Inquiry */}
        <div className="mt-32 max-w-4xl mx-auto bg-white/[0.02] border border-white/5 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-8">Looking for a <span className="text-champagne">Custom Package?</span></h2>
          <p className="text-ivory/60 font-jakarta text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Planning a long stay or a multi-room group booking? Contact our reservation team for a bespoke quote tailored to your needs.
          </p>
          <Button asChild className="bg-champagne text-black hover:bg-brass rounded-none px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] h-auto shadow-2xl transition-all">
            <Link href="/contact" className="flex items-center gap-4">Contact Concierge <MoveRight className="w-4 h-4" /></Link>
          </Button>
        </div>

      </div>
    </main>
  );
}

