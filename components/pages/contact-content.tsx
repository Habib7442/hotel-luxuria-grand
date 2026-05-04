"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919181043994";
    const text = `*New Contact Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter"
          >
            Contact <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Us</span>
          </motion.h1>
          <div className="w-20 h-[1px] bg-champagne mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 max-w-7xl mx-auto">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-16">
            <div>
              <h2 className="text-xs font-jakarta font-bold text-champagne uppercase tracking-[0.4em] mb-12">Property Locations</h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-champagne group-hover:border-champagne transition-all duration-500">
                    <MapPin className="w-5 h-5 text-champagne group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-ivory font-bold uppercase text-[10px] tracking-widest mb-3">Address</h3>
                    <p className="text-ivory/60 font-jakarta text-sm leading-relaxed">
                      Ghungoor Kuarpar Road, Near Saint Capino School,<br />
                      Silchar, Assam, 788014, India
                    </p>
                    <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 text-champagne text-[9px] uppercase font-bold tracking-widest mt-6 hover:gap-4 transition-all">
                      Get Directions <MoveRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-champagne group-hover:border-champagne transition-all duration-500">
                    <Phone className="w-5 h-5 text-champagne group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-ivory font-bold uppercase text-[10px] tracking-widest mb-3">Reservations</h3>
                    <div className="space-y-2">
                      <p className="text-ivory/60 font-jakarta text-sm leading-relaxed">+91 91810 43994</p>
                      <p className="text-ivory/60 font-jakarta text-sm leading-relaxed">+91 91810 99018</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-champagne group-hover:border-champagne transition-all duration-500">
                    <Mail className="w-5 h-5 text-champagne group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-ivory font-bold uppercase text-[10px] tracking-widest mb-3">Email Us</h3>
                    <p className="text-ivory/60 font-jakarta text-sm leading-relaxed">luxuriagrand2025@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h2 className="text-xs font-jakarta font-bold text-champagne uppercase tracking-[0.4em] mb-12">Hours of Operation</h2>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h3 className="text-ivory font-bold uppercase text-[9px] tracking-widest mb-4">Front Desk</h3>
                  <p className="text-ivory/40 text-[10px] uppercase font-black tracking-widest">24/7 Service</p>
                </div>
                <div>
                  <h3 className="text-ivory font-bold uppercase text-[9px] tracking-widest mb-4">Dining (Café Cove)</h3>
                  <p className="text-ivory/40 text-[10px] uppercase font-black tracking-widest">07:00 AM — 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="bg-white/[0.02] border border-white/5 p-10 md:p-16 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/5 blur-3xl rounded-full" />
            
            <h2 className="text-2xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-4">Send a Message</h2>
            <p className="text-ivory/40 text-xs font-jakarta tracking-widest uppercase mb-12">We typically respond within 2 hours</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-ivory/40 text-[9px] uppercase tracking-[0.3em] font-black">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/40 border border-white/5 py-5 px-6 text-ivory font-jakarta text-[11px] uppercase tracking-widest focus:outline-none focus:border-champagne/40 transition-all rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-ivory/40 text-[9px] uppercase tracking-[0.3em] font-black">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="yourname@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/40 border border-white/5 py-5 px-6 text-ivory font-jakarta text-[11px] uppercase tracking-widest focus:outline-none focus:border-champagne/40 transition-all rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-ivory/40 text-[9px] uppercase tracking-[0.3em] font-black">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-black/40 border border-white/5 py-5 px-6 text-ivory font-jakarta text-[11px] uppercase tracking-widest focus:outline-none focus:border-champagne/40 transition-all rounded-none appearance-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Room Reservation">Room Reservation</option>
                  <option value="Dining Inquiry">Dining/Table Booking</option>
                  <option value="Event Planning">Wedding/Event Planning</option>
                  <option value="Corporate Booking">Corporate Booking</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-ivory/40 text-[9px] uppercase tracking-[0.3em] font-black">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/40 border border-white/5 py-5 px-6 text-ivory font-jakarta text-[11px] uppercase tracking-widest focus:outline-none focus:border-champagne/40 transition-all rounded-none resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-champagne text-black hover:bg-brass rounded-none py-8 text-[11px] font-bold uppercase tracking-[0.4em] h-auto shadow-2xl group">
                <Send className="w-4 h-4 mr-4 group-hover:translate-x-2 transition-transform" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
}
