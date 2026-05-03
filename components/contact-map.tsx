"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactMap = () => {
  return (
    <section id="contact" className="py-16 md:py-28 bg-onyx relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                viewport={{ once: true }}
                className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
              >
                Find Us
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-jakarta font-extrabold text-ivory uppercase leading-tight tracking-tighter"
              >
                Visit <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">the Grand</span>
              </motion.h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-champagne/20 flex items-center justify-center shrink-0 group-hover:bg-champagne/10 transition-colors">
                  <MapPin className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <p className="font-jakarta font-bold text-[10px] uppercase tracking-widest text-champagne/60 mb-1">Address</p>
                  <p className="text-ivory font-medium leading-relaxed">
                    Ghungoor Kuarpar Road, Near Saint Capitanio School, <br />
                    Silchar-788015, Assam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-champagne/20 flex items-center justify-center shrink-0 group-hover:bg-champagne/10 transition-colors">
                  <Phone className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <p className="font-jakarta font-bold text-[10px] uppercase tracking-widest text-champagne/60 mb-1">Inquiries</p>
                  <a href="tel:+919181043994" className="text-ivory font-medium hover:text-champagne transition-colors block">+91 91810 43994</a>
                  <a href="tel:+919181099018" className="text-ivory font-medium hover:text-champagne transition-colors block">+91 91810 99018</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-champagne/20 flex items-center justify-center shrink-0 group-hover:bg-champagne/10 transition-colors">
                  <Clock className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <p className="font-jakarta font-bold text-[10px] uppercase tracking-widest text-champagne/60 mb-1">Check-in / Out</p>
                  <p className="text-ivory font-medium">12:00 PM / 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed Placeholder / Visual */}
          <div className="w-full lg:w-2/3 min-h-[500px] relative border border-white/5 overflow-hidden group/map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5662.650353246465!2d92.78985312119059!3d24.76380951217689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49000752b3a5%3A0x4d32406b06eb446!2sLuxuria%20Grand!5e0!3m2!1sen!2sin!4v1777781079925!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Overlay to dim map and handle smooth transition without flickering */}
            <div className="absolute inset-0 bg-onyx/40 group-hover/map:opacity-0 transition-opacity duration-700 pointer-events-none" />
            
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-onyx via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 pointer-events-none border border-champagne/10" />
          </div>
        </div>
      </div>
    </section>
  );
};
