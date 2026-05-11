"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Home, MessageSquare, MoveRight, Utensils, PartyPopper, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const roomTypes = [
  "Standard",
  "Deluxe",
  "Super Deluxe",
  "Executive",
  "Suite",
  "Executive Suite",
  "President Suite"
];

const occasions = [
  "Casual Dining",
  "Birthday Celebration",
  "Anniversary",
  "Corporate Meeting",
  "Family Gathering",
  "Private Event"
];

const venues = [
  "Anaaya's Restaurant",
  "Cafe Cove",
  "Banquet Hall"
];

export default function BookingContent() {
  const searchParams = useSearchParams();
  const preSelectedRoom = searchParams.get("room");
  const typeParam = searchParams.get("type");
  const preSelectedType: "room" | "dining" = (typeParam === "dining" || typeParam === "event") ? "dining" : "room";

  const [activeTab, setActiveTab] = useState<"room" | "dining">(preSelectedType);
  const [roomData, setRoomData] = useState({
    checkIn: "",
    checkOut: "",
    roomType: preSelectedRoom && roomTypes.includes(preSelectedRoom) ? preSelectedRoom : "Standard",
    guests: "1",
    message: ""
  });

  const [diningData, setDiningData] = useState({
    date: "",
    time: "",
    occasion: "Casual Dining",
    guests: "2",
    venue: "Anaaya's Restaurant",
    message: ""
  });

  const handleRoomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919181043994";
    const message = `*New Room Reservation*

*Room:* ${roomData.roomType}
*Check-in:* ${roomData.checkIn}
*Check-out:* ${roomData.checkOut}
*Guests:* ${roomData.guests}${roomData.message ? `
*Message:* ${roomData.message}` : ""}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleDiningWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919181043994";
    const message = `*New Dining/Event Reservation*

*Occasion:* ${diningData.occasion}
*Venue:* ${diningData.venue}
*Date:* ${diningData.date}
*Time:* ${diningData.time}
*Guests:* ${diningData.guests}${diningData.message ? `
*Requests:* ${diningData.message}` : ""}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            
            {/* Left Side: Info */}
            <div className="w-full lg:w-2/5">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
                animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
                className="font-jakarta text-[10px] text-champagne uppercase font-bold mb-6"
              >
                Plan Your Journey
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-7xl font-jakarta font-extrabold text-ivory uppercase leading-[0.9] tracking-tighter mb-10"
              >
                Book Your Stay at <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Hotel Luxuria Grand</span>
              </motion.h1>

              {/* Tab Toggles */}
              <div className="flex flex-col space-y-4 mt-12">
                <button 
                  onClick={() => setActiveTab("room")}
                  className={cn(
                    "flex items-center gap-6 p-6 transition-all duration-500 border-l-2 text-left group",
                    activeTab === "room" ? "bg-white/5 border-champagne" : "border-white/5 hover:bg-white/[0.02] grayscale opacity-50"
                  )}
                >
                  <Home className={cn("w-6 h-6 transition-colors", activeTab === "room" ? "text-champagne" : "text-ivory/20")} />
                  <div>
                    <h3 className="text-ivory font-bold uppercase text-[10px] tracking-widest mb-1">Stay with Us</h3>
                    <p className="text-ivory/40 text-[9px] uppercase tracking-wider">Rooms & Luxury Suites</p>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveTab("dining")}
                  className={cn(
                    "flex items-center gap-6 p-6 transition-all duration-500 border-l-2 text-left group",
                    activeTab === "dining" ? "bg-white/5 border-champagne" : "border-white/5 hover:bg-white/[0.02] grayscale opacity-50"
                  )}
                >
                  <Utensils className={cn("w-6 h-6 transition-colors", activeTab === "dining" ? "text-champagne" : "text-ivory/20")} />
                  <div>
                    <h3 className="text-ivory font-bold uppercase text-[10px] tracking-widest mb-1">Dine & Celebrate</h3>
                    <p className="text-ivory/40 text-[9px] uppercase tracking-wider">Tables, Birthdays & Events</p>
                  </div>
                </button>
              </div>

              <div className="mt-8 p-8 border border-white/5">
                <p className="text-ivory/40 text-[10px] uppercase tracking-widest font-jakarta italic leading-loose">
                  Select your service type to proceed. All bookings are finalized via our premium WhatsApp concierge.
                </p>
              </div>
            </div>

            {/* Right Side: Dynamic Form */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-3/5 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-16 relative"
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-champagne/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-champagne/30" />

              {activeTab === "room" ? (
                <form onSubmit={handleRoomWhatsApp} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label htmlFor="check-in" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-3 h-3 text-white" /> Check-in
                      </label>
                      <input 
                        id="check-in"
                        type="date"
                        required
                        value={roomData.checkIn}
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-ivory focus:border-champagne outline-none transition-colors font-jakarta block [color-scheme:dark]"
                        onChange={(e) => setRoomData({...roomData, checkIn: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="check-out" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-3 h-3 text-white" /> Check-out
                      </label>
                      <input 
                        id="check-out"
                        type="date"
                        required
                        value={roomData.checkOut}
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-ivory focus:border-champagne outline-none transition-colors font-jakarta block [color-scheme:dark]"
                        onChange={(e) => setRoomData({...roomData, checkOut: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label htmlFor="room-type" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <Home className="w-3 h-3 text-white" /> Room Type
                      </label>
                      <div className="relative group/select">
                        <select 
                          id="room-type"
                          className="w-full bg-transparent border-b border-white/20 py-4 pr-8 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer block"
                          value={roomData.roomType}
                          onChange={(e) => setRoomData({...roomData, roomType: e.target.value})}
                        >
                          {roomTypes.map(room => (
                            <option key={room} value={room} className="bg-onyx">{room}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-champagne/50 group-focus-within/select:text-champagne group-focus-within/select:rotate-180 transition-all pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="guests" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <Users className="w-3 h-3 text-white" /> Guests
                      </label>
                      <div className="relative group/select">
                        <select 
                          id="guests"
                          className="w-full bg-transparent border-b border-white/20 py-4 pr-8 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer block"
                          value={roomData.guests}
                          onChange={(e) => setRoomData({...roomData, guests: e.target.value})}
                        >
                          {[1,2,3,4].map(n => (
                            <option key={n} value={n} className="bg-onyx">{n} Guest{n > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-champagne/50 group-focus-within/select:text-champagne group-focus-within/select:rotate-180 transition-all pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="room-requests" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                      <MessageSquare className="w-3 h-3 text-white" /> Special Requests
                    </label>
                    <textarea 
                      id="room-requests"
                      rows={3}
                      placeholder="Special requests..."
                      value={roomData.message}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta resize-none"
                      onChange={(e) => setRoomData({...roomData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-champagne text-black hover:bg-brass rounded-none py-8 text-[10px] md:text-xs font-bold uppercase tracking-widest md:tracking-[0.4em] h-auto group flex items-center justify-center px-4">
                    <span className="truncate">Confirm Stay on WhatsApp</span> <MoveRight className="ml-4 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform shrink-0" />
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleDiningWhatsApp} className="space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label htmlFor="occasion" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <PartyPopper className="w-3 h-3 text-white" /> Occasion
                      </label>
                      <div className="relative group/select">
                        <select 
                          id="occasion"
                          className="w-full bg-transparent border-b border-white/20 py-4 pr-8 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer block"
                          value={diningData.occasion}
                          onChange={(e) => setDiningData({...diningData, occasion: e.target.value})}
                        >
                          {occasions.map(occ => (
                            <option key={occ} value={occ} className="bg-onyx">{occ}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-champagne/50 group-focus-within/select:text-champagne group-focus-within/select:rotate-180 transition-all pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="venue" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <Utensils className="w-3 h-3 text-white" /> Venue
                      </label>
                      <div className="relative group/select">
                        <select 
                          id="venue"
                          className="w-full bg-transparent border-b border-white/20 py-4 pr-8 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer block"
                          value={diningData.venue}
                          onChange={(e) => setDiningData({...diningData, venue: e.target.value})}
                        >
                          {venues.map(v => (
                            <option key={v} value={v} className="bg-onyx">{v}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-champagne/50 group-focus-within/select:text-champagne group-focus-within/select:rotate-180 transition-all pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label htmlFor="dining-date" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-3 h-3 text-white" /> Date
                      </label>
                      <input 
                        id="dining-date"
                        type="date"
                        required
                        value={diningData.date}
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-ivory focus:border-champagne outline-none transition-colors font-jakarta block [color-scheme:dark]"
                        onChange={(e) => setDiningData({...diningData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="dining-time" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                        <Clock className="w-3 h-3 text-white" /> Time
                      </label>
                      <input 
                        id="dining-time"
                        type="time"
                        required
                        value={diningData.time}
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-ivory focus:border-champagne outline-none transition-colors font-jakarta block [color-scheme:dark]"
                        onChange={(e) => setDiningData({...diningData, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="dining-guests" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                      <Users className="w-3 h-3 text-white" /> Guests
                    </label>
                    <div className="relative group/select">
                      <select 
                        id="dining-guests"
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-8 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer block"
                        value={diningData.guests}
                        onChange={(e) => setDiningData({...diningData, guests: e.target.value})}
                      >
                        {[1,2,3,4,5,6,8,10,12,15,20].map(n => (
                          <option key={n} value={n} className="bg-onyx">{n} Person{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-champagne/50 group-focus-within/select:text-champagne group-focus-within/select:rotate-180 transition-all pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="dining-requests" className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2 cursor-pointer">
                      <MessageSquare className="w-3 h-3 text-white" /> Message
                    </label>
                    <textarea 
                      id="dining-requests"
                      rows={3}
                      placeholder="Special requests..."
                      value={diningData.message}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta resize-none"
                      onChange={(e) => setDiningData({...diningData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-champagne text-black hover:bg-brass rounded-none py-8 text-[10px] md:text-xs font-bold uppercase tracking-widest md:tracking-[0.4em] h-auto group flex items-center justify-center px-4">
                    <span className="truncate">Reserve Table on WhatsApp</span> <MoveRight className="ml-4 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform shrink-0" />
                  </Button>
                </form>
              )}

              <p className="mt-8 text-center text-[8px] text-ivory/20 uppercase tracking-widest font-bold">
                Immediate Confirmation via WhatsApp Concierge
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/5">
                <section>
                  <h2 className="text-ivory font-jakarta font-bold uppercase text-sm tracking-[0.3em] mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-champagne"></span> Direct Benefits
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Best Price Guarantee",
                      "Priority Suite Upgrades",
                      "Early Check-in",
                      "Free High-Speed Wi-Fi",
                      "Direct Concierge Support",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-ivory/60 text-[10px] uppercase tracking-widest font-medium">
                        <MoveRight className="w-3 h-3 text-champagne" /> {benefit}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-ivory font-jakarta font-bold uppercase text-sm tracking-[0.3em] mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-champagne"></span> Why WhatsApp?
                  </h2>
                  <p className="text-ivory/50 text-[10px] leading-relaxed font-jakarta uppercase tracking-wider">
                    Our premium WhatsApp concierge provides a personalized booking experience. Speak directly with our reservation team to secure specific room requests, arrange transport, or customize your stay in real-time.
                  </p>
                </section>

                <section>
                  <h2 className="text-ivory font-jakarta font-bold uppercase text-sm tracking-[0.3em] mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-champagne"></span> Stay FAQ
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-champagne text-[9px] font-bold uppercase tracking-widest mb-1">Check-in / Out</h3>
                      <p className="text-ivory/40 text-[9px] leading-relaxed uppercase">12:00 PM / 11:00 AM</p>
                    </div>
                    <div>
                      <h3 className="text-champagne text-[9px] font-bold uppercase tracking-widest mb-1">Cancellations</h3>
                      <p className="text-ivory/40 text-[9px] leading-relaxed uppercase">Flexible up to 24 hours before arrival.</p>
                    </div>
                  </div>
                </section>
          </div>

        </div>
      </div>
    </main>
  );
}
