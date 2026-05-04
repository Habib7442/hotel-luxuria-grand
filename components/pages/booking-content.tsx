"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Users, Home, MessageSquare, MoveRight, Utensils, PartyPopper, Clock } from "lucide-react";
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
  "Main Restaurant",
  "The Gypsy House Cafe",
  "Private Dining Room",
  "Banquet Hall"
];

export default function BookingContent() {
  const searchParams = useSearchParams();
  const preSelectedRoom = searchParams.get("room");
  const preSelectedType = searchParams.get("type") as "room" | "dining" || "room";

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
    venue: "Main Restaurant",
    message: ""
  });

  const handleRoomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919181043994";
    const text = `*New Room Reservation*%0A%0A*Room:* ${roomData.roomType}%0A*Check-in:* ${roomData.checkIn}%0A*Check-out:* ${roomData.checkOut}%0A*Guests:* ${roomData.guests}${roomData.message ? `%0A*Message:* ${roomData.message}` : ""}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const handleDiningWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919181043994";
    const text = `*New Dining/Event Reservation*%0A%0A*Occasion:* ${diningData.occasion}%0A*Venue:* ${diningData.venue}%0A*Date:* ${diningData.date}%0A*Time:* ${diningData.time}%0A*Guests:* ${diningData.guests}${diningData.message ? `%0A*Requests:* ${diningData.message}` : ""}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
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
                Reservations <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">& Bookings</span>
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

              <div className="mt-12 p-8 border border-white/5">
                <p className="text-ivory/40 text-[10px] uppercase tracking-widest font-jakarta italic leading-loose">
                  Select your service type to proceed with your reservation. All bookings are finalized via our premium WhatsApp concierge.
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
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> Check-in
                      </label>
                      <input 
                        type="date"
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none"
                        onChange={(e) => setRoomData({...roomData, checkIn: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> Check-out
                      </label>
                      <input 
                        type="date"
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none"
                        onChange={(e) => setRoomData({...roomData, checkOut: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <Home className="w-3 h-3" /> Room Type
                      </label>
                      <select 
                        className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                        value={roomData.roomType}
                        onChange={(e) => setRoomData({...roomData, roomType: e.target.value})}
                      >
                        {roomTypes.map(room => (
                          <option key={room} value={room} className="bg-onyx">{room}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <Users className="w-3 h-3" /> Guests
                      </label>
                      <select 
                        className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                        value={roomData.guests}
                        onChange={(e) => setRoomData({...roomData, guests: e.target.value})}
                      >
                        {[1,2,3,4].map(n => (
                          <option key={n} value={n} className="bg-onyx">{n} Guest{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Special Requests
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Special requests..."
                      className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta resize-none"
                      onChange={(e) => setRoomData({...roomData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-champagne text-black hover:bg-brass rounded-none py-8 text-xs font-bold uppercase tracking-[0.4em] h-auto group">
                    Confirm Stay on WhatsApp <MoveRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleDiningWhatsApp} className="space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <PartyPopper className="w-3 h-3" /> Occasion
                      </label>
                      <select 
                        className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                        value={diningData.occasion}
                        onChange={(e) => setDiningData({...diningData, occasion: e.target.value})}
                      >
                        {occasions.map(occ => (
                          <option key={occ} value={occ} className="bg-onyx">{occ}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <Utensils className="w-3 h-3" /> Venue
                      </label>
                      <select 
                        className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                        value={diningData.venue}
                        onChange={(e) => setDiningData({...diningData, venue: e.target.value})}
                      >
                        {venues.map(v => (
                          <option key={v} value={v} className="bg-onyx">{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> Date
                      </label>
                      <input 
                        type="date"
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none"
                        onChange={(e) => setDiningData({...diningData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                        <Clock className="w-3 h-3" /> Time
                      </label>
                      <input 
                        type="time"
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none"
                        onChange={(e) => setDiningData({...diningData, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                      <Users className="w-3 h-3" /> Guests
                    </label>
                    <select 
                      className="w-full bg-onyx border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta appearance-none cursor-pointer"
                      value={diningData.guests}
                      onChange={(e) => setDiningData({...diningData, guests: e.target.value})}
                    >
                      {[1,2,3,4,5,6,8,10,12,15,20].map(n => (
                        <option key={n} value={n} className="bg-onyx">{n} Person{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-[10px] uppercase tracking-widest text-champagne font-bold flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Message
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Special requests..."
                      className="w-full bg-transparent border-b border-white/20 py-4 text-ivory focus:border-champagne outline-none transition-colors font-jakarta resize-none"
                      onChange={(e) => setDiningData({...diningData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-champagne text-black hover:bg-brass rounded-none py-8 text-xs font-bold uppercase tracking-[0.4em] h-auto group">
                    Reserve Table on WhatsApp <MoveRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </form>
              )}

              <p className="mt-8 text-center text-[8px] text-ivory/20 uppercase tracking-widest font-bold">
                Immediate Confirmation via WhatsApp Concierge
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </main>
  );
}
