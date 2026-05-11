"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText, AlertCircle, RefreshCw } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  shield: Shield,
  fileText: FileText,
  alertCircle: AlertCircle,
  refreshCw: RefreshCw
};

interface LegalContentProps {
  title: string;
  lastUpdated: string;
  content: string;
  icon: string;
}

export default function LegalContent({ title, lastUpdated, content, icon }: LegalContentProps) {
  const Icon = ICON_MAP[icon] || Shield;
  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-full bg-champagne/10 flex items-center justify-center mb-8 mx-auto lg:mx-0 border border-champagne/20"
          >
            <Icon className="w-6 h-6 text-champagne" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="font-jakarta text-[10px] text-champagne uppercase font-bold mb-6"
          >
            Trust & Compliance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter mb-6"
          >
            {title}
          </motion.h1>
          <p className="text-ivory/40 font-jakarta text-[10px] uppercase tracking-widest font-bold">Last Updated: {lastUpdated}</p>
          <div className="w-20 h-[1px] bg-champagne mt-8 mx-auto lg:mx-0" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-jakarta prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-ivory
              prose-p:text-ivory/60 prose-p:font-jakarta prose-p:leading-relaxed prose-p:text-base
              prose-li:text-ivory/60 prose-li:font-jakarta prose-li:text-base
              prose-strong:text-champagne prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-32 p-10 bg-white/[0.02] border border-white/5 text-center">
            <p className="text-ivory/40 font-jakarta text-xs leading-relaxed max-w-2xl mx-auto italic">
              Should you have any questions regarding our policies, please contact our legal department at 
              <span className="text-champagne ml-2">luxuriagrand2025@gmail.com</span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
