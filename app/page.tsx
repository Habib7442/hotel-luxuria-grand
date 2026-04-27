import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedRooms } from "@/components/featured-rooms";
import { BrandStory } from "@/components/brand-story";
import { MapPin, Star, Hotel } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 bg-cream">
      <Navbar />
      <Hero />
      
      {/* Welcome Strip */}
      <section className="py-20 bg-cream border-y border-taupe/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-12 h-12 bg-marigold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-marigold/20 transition-colors">
                <MapPin className="w-6 h-6 text-marigold" />
              </div>
              <p className="font-jakarta font-semibold text-[10px] uppercase tracking-[0.2em] text-taupe">Location</p>
              <p className="font-lora text-lg text-tobacco mt-1">NIT Road, Silchar</p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-12 h-12 bg-marigold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-marigold/20 transition-colors">
                <Star className="w-6 h-6 text-marigold" />
              </div>
              <p className="font-jakarta font-semibold text-[10px] uppercase tracking-[0.2em] text-taupe">Rating</p>
              <p className="font-lora text-lg text-tobacco mt-1">Excellent 4.5 / 5</p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-12 h-12 bg-marigold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-marigold/20 transition-colors">
                <Hotel className="w-6 h-6 text-marigold" />
              </div>
              <p className="font-jakarta font-semibold text-[10px] uppercase tracking-[0.2em] text-taupe">Experience</p>
              <p className="font-lora text-lg text-tobacco mt-1">Premium Rooms & Suites</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedRooms />
      <BrandStory />
      
      {/* Footer Placeholder for now */}
      <div className="h-32 bg-tobacco flex items-center justify-center">
        <p className="text-white font-playfair tracking-widest uppercase text-xs">© 2026 Hotel Luxuria Grand</p>
      </div>
    </main>
  );
}
