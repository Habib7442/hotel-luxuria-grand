"use client";

import dynamic from "next/dynamic";
import React from "react";

const MenuFlipbook = dynamic(() => import("@/components/menu-flipbook").then(mod => mod.MenuFlipbook), {
  ssr: false,
  loading: () => <div className="h-[600px] flex items-center justify-center text-champagne uppercase tracking-widest text-xs">Loading Menu...</div>
});

export function HomeMenuSection() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-6 mb-16 text-center">
        <p className="font-jakarta text-[10px] text-champagne uppercase font-bold tracking-[0.3em] mb-6">
          Epicurean Excellence
        </p>
        <h2 className="text-4xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter">
          Our Digital <br />
          <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal block mt-4">Menu</span>
        </h2>
      </div>
      <MenuFlipbook />
    </section>
  );
}
