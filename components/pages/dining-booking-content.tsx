"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Utensils, MessageSquare, MoveRight, Clock, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const occasions = [
  "Casual Dining",
  "Birthday Celebration",
  "Anniversary",
  "Corporate Meeting",
  "Family Gathering",
  "Private Event"
];

const locations = [
  "Anaaya's Restaurant",
  "Cafe Cove",
  "Banquet Hall"
];

export default function DiningBookingContent() {
  const searchParams = useSearchParams();
  const preSelectedOccasion = searchParams.get("occasion");

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    occasion: preSelectedOccasion && occasions.includes(preSelectedOccasion) ? preSelectedOccasion : "Casual Dining",
    guests: "2",
    location: "Anaaya's Restaurant",
    message: ""
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919181043994";
    const message = `*New Dining/Event Reservation*

*Occasion:* ${formData.occasion}
*Location:* ${formData.location}
*Date:* ${formData.date}
*Time:* ${formData.time}
*Guests:* ${formData.guests}${formData.message ? `
*Requests:* ${formData.message}` : ""}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            {/* Left Side: Info */}
            <div className="w-full lg:w-2/5">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
                animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
                className="font-jakarta text-[10px] text-champagne uppercase font-bold mb-6"
              >
                Culinary Experiences
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter mb-10"
              >
                Book Your <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Table</span>
              </motion.h1>
              
              <div className="space-y-8 mt-12">
                <div className="p-8 bg-white/5 border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Utensils className="w-20 h-20 text-champagne" />
                  </div>
                  <h3 className="text-champagne font-bold uppercase text-[10px] tracking-widest mb-4">Dining Excellence</h3>
                  <ul className="space-y-4 text-ivory/60 text-sm font-jakarta">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-champagne rounded-full" /> Priority Table Allocation</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-champagne rounded-full" /> Customized Celebration Decor</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-champagne rounded-full" /> Chef's Special Recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-3/5 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-16 relative"
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-champagne/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-champagne/30" />

              <form onSubmit={handleWhatsApp} className="space-y-10">
                
                {/* Occasion & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="occasion-select" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                      <PartyPopper className="w-3 h-3" /> The Occasion
                    </label>
                    <select 
                      id="occasion-select"
                      className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                      value={formData.occasion}
                      onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    >
                      {occasions.map(occ => (
                        <option key={occ} value={occ} className="bg-onyx">{occ}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="venue-select" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                      <Utensils className="w-3 h-3" /> Preferred Venue
                    </label>
                    <select 
                      id="venue-select"
                      className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc} className="bg-onyx">{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="dining-date" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                      <Calendar className="w-3 h-3" /> Reservation Date
                    </label>
                    <input 
                      id="dining-date"
                      type="date"
                      required
                      value={formData.date}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none [color-scheme:dark]"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="dining-time" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                      <Clock className="w-3 h-3" /> Preferred Time
                    </label>
                    <input 
                      id="dining-time"
                      type="time"
                      required
                      value={formData.time}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none [color-scheme:dark]"
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-4">
                  <label htmlFor="dining-guests" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                    <Users className="w-3 h-3" /> Number of Guests
                  </label>
                  <select 
                    id="dining-guests"
                    className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8,10,15,20].map(n => (
                      <option key={n} value={n} className="bg-onyx">{n} {n === 1 ? 'Person' : 'People'}{n >= 10 ? ' (Group)' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Requests */}
                <div className="space-y-4">
                  <label htmlFor="dining-requests" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                    <MessageSquare className="w-3 h-3" /> Special Requests / Dietary Notes
                  </label>
                  <textarea 
                    id="dining-requests"
                    rows={3}
                    placeholder="E.g. Cake for anniversary, corner table, high chair, window seat..."
                    value={formData.message}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta resize-none placeholder:text-white/10"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-champagne text-black hover:bg-brass rounded-none py-8 text-xs font-bold uppercase tracking-[0.4em] h-auto shadow-2xl transition-all duration-500 group"
                >
                  Reserve Table on WhatsApp <MoveRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>

                <p className="text-center text-[8px] text-ivory/20 uppercase tracking-widest font-bold">
                  Immediate Confirmation via WhatsApp Concierge
                </p>

              </form>
            </motion.div>

          </div>

        </div>
      </div>
    </main>
  );
}
