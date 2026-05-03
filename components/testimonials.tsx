"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Said Anowar Barbhuiya",
    text: "Had a pleasant stay at Hotel Luxuria Grand. The staff were very polite and helpful, making the experience smooth and comfortable. The food was tasty and well-prepared, and the ambiance was clean and relaxing. Overall, a satisfying stay.",
    time: "4 weeks ago",
    rating: 5
  },
  {
    name: "Sayantan DasGupta",
    text: "Amazing place, great food, impeccable service... must visit for everyone...",
    time: "8 hours ago",
    rating: 5
  },
  {
    name: "Jyotishka Bhattacharjee",
    text: "The food and ambience of the place is very good with responsive and adept staff. Overall a worthwhile experience",
    time: "a month ago",
    rating: 5
  },
  {
    name: "Hana Begum",
    text: "Food quality is good & staff is very friendly &. Cooperative ...",
    time: "a month ago",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-onyx relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Guest Experiences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter"
          >
            Voices of <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Excellence</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-champagne/10" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
                  ))}
                </div>
                
                <p className="text-ivory font-cormorant text-2xl md:text-3xl italic leading-relaxed mb-10">
                  &quot;{reviews[currentIndex].text}&quot;
                </p>
                
                <div>
                  <h4 className="text-ivory font-jakarta font-bold uppercase tracking-[0.2em] text-sm mb-1">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-champagne/60 font-jakarta text-[10px] uppercase font-bold tracking-widest">
                    Verified Guest • {reviews[currentIndex].time}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-12 gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center border border-champagne/30 text-champagne rounded-full hover:bg-champagne hover:text-black transition-all duration-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center border border-champagne/30 text-champagne rounded-full hover:bg-champagne hover:text-black transition-all duration-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
