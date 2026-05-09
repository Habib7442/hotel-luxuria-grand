"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videoAssets = [
  {
    title: "Grand Entrance",
    src: "/assets/new_assets_2/video Hotel Entry Gate .mov",
    tag: "Welcome"
  },
  {
    title: "Cafe Cove",
    src: "/assets/new_assets_2/video cafe entry.mov",
    tag: "Dining"
  },
  {
    title: "President Suite",
    src: "/assets/new_assets_2/video prezident suit.mov",
    tag: "Luxury"
  },
  {
    title: "Grand Reception",
    src: "/assets/new_assets_2/video of recption .mov",
    tag: "Hospitality"
  }
];

export function VideoShowcase() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;

    if (playingIdx === idx) {
      video.pause();
      setPlayingIdx(null);
    } else {
      // Pause others
      videoRefs.current.forEach((v, i) => {
        if (v && i !== idx) v.pause();
      });
      video.play();
      setPlayingIdx(idx);
    }
  };

  return (
    <section className="py-24 bg-onyx relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-10 left-0 text-[15vw] font-jakarta font-black text-white/[0.02] uppercase leading-none pointer-events-none select-none">
        Experience
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-jakarta text-[10px] text-champagne uppercase font-bold tracking-[0.4em] mb-4">
            Cinematic Preview
          </p>
          <h2 className="text-4xl md:text-6xl font-jakarta font-extrabold text-ivory uppercase tracking-tighter">
            The <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Atmosphere</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {videoAssets.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative aspect-video bg-black rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-champagne/50 transition-all duration-500"
            >
              <video
                ref={(el) => { videoRefs.current[idx] = el; }}
                src={video.src}
                className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105"
                loop
                muted
                playsInline
                preload="metadata"
              />
              
              {/* Refined Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">
                      {video.tag}
                    </span>
                    <h3 className="text-ivory font-jakarta font-bold text-2xl uppercase tracking-tighter">
                      {video.title}
                    </h3>
                  </div>
                  
                  <button
                    onClick={() => togglePlay(idx)}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 hover:bg-champagne hover:border-champagne transition-all duration-500 group/btn"
                  >
                    {playingIdx === idx ? (
                      <Pause className="w-5 h-5 text-ivory group-hover/btn:text-black fill-current" />
                    ) : (
                      <Play className="w-5 h-5 text-ivory group-hover/btn:text-black fill-current translate-x-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Progress Bar (Visual only) */}
              <div className="absolute bottom-0 left-0 h-1 bg-champagne/30 w-full overflow-hidden">
                <motion.div 
                  className="h-full bg-champagne"
                  initial={{ x: "-100%" }}
                  animate={playingIdx === idx ? { x: "0%" } : { x: "-100%" }}
                  transition={playingIdx === idx ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
