"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhatsAppChat() {
  const phoneNumber = "919181043994";
  const message = "Hello! I'd like to inquire about a reservation at Hotel Luxuria Grand.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 2 
      }}
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-16 h-16 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all group overflow-hidden"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-onyx text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-champagne/20">
        Chat with us
      </div>
      <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
        <Image
          src="/social-icons/whatsapp.png"
          alt="WhatsApp"
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
}
