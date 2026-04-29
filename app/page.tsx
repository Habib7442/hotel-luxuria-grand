import { Hero } from "@/components/hero";
import { FeaturedRooms } from "@/components/featured-rooms";
import { BrandStory } from "@/components/brand-story";
import { MapPin, Star, Hotel } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-midnight-purple">
      <Hero />
      
      {/* Welcome Strip - High End Data Bar */}
      <section className="py-24 bg-deep-maroon border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 bg-royal-gold/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal-gold/20 transition-all duration-500 border border-royal-gold/10">
                <MapPin className="w-6 h-6 text-royal-gold" />
              </div>
              <p className="font-jakarta font-bold text-[10px] uppercase tracking-[0.4em] text-royal-gold/60">Location</p>
              <p className="font-playfair text-2xl text-champagne mt-2 font-semibold">NIT Road, Silchar</p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 bg-royal-gold/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal-gold/20 transition-all duration-500 border border-royal-gold/10">
                <Star className="w-6 h-6 text-royal-gold" />
              </div>
              <p className="font-jakarta font-bold text-[10px] uppercase tracking-[0.4em] text-royal-gold/60">Rating</p>
              <p className="font-playfair text-2xl text-champagne mt-2 font-semibold">Excellent 4.5 / 5</p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 bg-royal-gold/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal-gold/20 transition-all duration-500 border border-royal-gold/10">
                <Hotel className="w-6 h-6 text-royal-gold" />
              </div>
              <p className="font-jakarta font-bold text-[10px] uppercase tracking-[0.4em] text-royal-gold/60">Experience</p>
              <p className="font-playfair text-2xl text-champagne mt-2 font-semibold">Luxury Redefined</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedRooms />
      <BrandStory />
    </main>
  );
}
