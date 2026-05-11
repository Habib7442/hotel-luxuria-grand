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
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(201,169,110,0.2)] transition-all group border border-champagne/20 bg-onyx"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-onyx text-champagne text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-none border border-champagne/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-2xl backdrop-blur-md">
        Concierge Chat
      </div>
      
      <div className="relative z-10 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          className="w-full h-full fill-champagne transition-transform duration-500 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.131.574-.072 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.55 4.197 1.592 6.023L0 24l6.135-1.61a11.757 11.815 0 005.91 1.586h.005c6.637 0 12.05-5.414 12.05-12.05a11.752 11.752 0 00-3.41-8.523z" />
        </svg>
      </div>

      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brass/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-champagne animate-ping opacity-15 pointer-events-none group-hover:animate-none" />
    </motion.a>
  );
}
