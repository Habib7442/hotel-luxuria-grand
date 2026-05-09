"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, Utensils, Coffee, Wine, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const MenuFlipbook = dynamic(() => import("@/components/menu-flipbook").then(mod => mod.MenuFlipbook), {
  ssr: false,
  loading: () => <div className="h-[600px] flex items-center justify-center text-champagne uppercase tracking-widest text-xs">Loading Menu...</div>
});

export default function DiningContent() {
  return (
    <main className="min-h-screen bg-onyx overflow-hidden relative z-0">

      {/* Cinematic Dining Hero */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/new_assets_2/CAFE.webp"
            alt="Café Cove Ambiance"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.4]"
            priority
          />
        </motion.div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-transparent to-onyx z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)] z-10" />

        <div className="relative z-20 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
            animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
            transition={{ duration: 1 }}
            className="font-jakarta text-[10px] md:text-xs text-champagne uppercase font-bold mb-6"
          >
            A Symphony of Flavors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10vw] md:text-[100px] lg:text-[150px] font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter"
          >
            Culinary <br />
            <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal block mt-4">Heritage</span>
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-4"
        >
          <span className="text-champagne/40 text-[10px] uppercase tracking-[0.4em] font-bold vertical-text">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-champagne/40 to-transparent" />
        </motion.div>
      </section>

      {/* Introduction Section - The Spirit of Dining */}
      <section className="py-24 md:py-48 relative">
        {/* Decorative Background Text */}
        <div className="absolute top-20 right-0 text-[20vw] font-jakarta font-black text-white/[0.02] uppercase leading-none pointer-events-none select-none overflow-hidden">
          Taste
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <p className="font-jakarta text-xs text-champagne uppercase font-bold tracking-[0.3em] mb-8">
                Epicurean Journey
              </p>
              <h2 className="text-5xl md:text-7xl font-jakarta font-extrabold text-ivory uppercase leading-[0.9] mb-10 tracking-tighter">
                Eat Well <br />
                <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Live Better</span>
              </h2>
              <div className="w-20 h-[1px] bg-champagne mb-10" />
              <p className="text-ivory/70 font-jakarta text-lg leading-relaxed max-w-xl mb-12">
                Experience the finest culinary sanctuary in Silchar. Café Cove combines modern luxury with 
                traditional flavors, creating a vibrant space for social connection and sensory delight.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="group">
                  <div className="w-12 h-12 rounded-full border border-champagne/20 flex items-center justify-center mb-6 group-hover:bg-champagne/10 transition-colors">
                    <Utensils className="text-champagne w-5 h-5" />
                  </div>
                  <h4 className="text-ivory font-bold uppercase text-[10px] tracking-widest mb-3">Fine Dining</h4>
                  <p className="text-ivory/40 text-[11px] leading-relaxed uppercase tracking-wider">World-class cuisine prepared by our master chefs.</p>
                </div>
                <div className="group">
                  <div className="w-12 h-12 rounded-full border border-champagne/20 flex items-center justify-center mb-6 group-hover:bg-champagne/10 transition-colors">
                    <Coffee className="text-champagne w-5 h-5" />
                  </div>
                  <h4 className="text-ivory font-bold uppercase text-[10px] tracking-widest mb-3">Café Culture</h4>
                  <p className="text-ivory/40 text-[11px] leading-relaxed uppercase tracking-wider">Specially brewed coffee and artisanal pastries for your morning bliss.</p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              {/* Image Composition */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative aspect-[4/5] rounded-none overflow-hidden border border-white/5 shadow-2xl"
                >
                  <Image
                    src="/assets/new_assets_2/CAFE(1).webp"
                    alt="Cafe Area"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
                </motion.div>
                
                {/* Float Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 bg-champagne p-10 hidden md:block"
                >
                  <Star className="text-black w-8 h-8 mb-4 fill-black" />
                  <p className="text-black font-jakarta font-black text-2xl leading-none">5-Star</p>
                  <p className="text-black/60 text-[8px] uppercase tracking-widest font-black mt-2">Hospitality</p>
                </motion.div>
              </div>

              {/* Offset Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -top-12 -right-12 w-1/2 aspect-square rounded-none overflow-hidden border border-white/10 shadow-2xl z-0 hidden lg:block"
              >
                <Image
                  src="/assets/new_assets_2/BANQUET AVAANI_S .webp"
                  alt="Buffet Experience"
                  fill
                  sizes="25vw"
                  className="object-cover grayscale"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Selections - Masonry/Grid Showcase */}
      <section className="py-24 md:py-40 bg-black/40 relative">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24">
            <p className="font-jakarta text-[10px] text-champagne uppercase font-bold tracking-[0.3em] mb-6">
              Our Curated Menu
            </p>
            <h2 className="text-5xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter">
              Signature <br />
              <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal block mt-4">Masterpieces</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "Exotic Platters", 
                desc: "A fusion of local spices and international techniques featuring our signature Tandoori specialties.", 
                img: "/assets/food/tandoori_platter.webp",
                tag: "Gourmet"
              },
              { 
                title: "Anaaya's Restaurant", 
                desc: "Lavish buffet spreads and our legendary Grand Chicken Biryani, celebrating diverse world cuisines.", 
                img: "/assets/food/grand_biryani.webp",
                tag: "Signature"
              },
              { 
                title: "Artisanal Brews", 
                desc: "Premium roasted coffees and refreshing beverages designed to delight the senses at Café Cove.", 
                img: "/assets/food/premium_coffee.webp",
                tag: "Cafe Cove"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative h-[600px] overflow-hidden border border-white/5"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s] lg:grayscale group-hover:grayscale-0 lg:brightness-[0.7] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent p-10 flex flex-col justify-end">
                  <span className="text-champagne font-jakarta font-bold text-[8px] uppercase tracking-[0.3em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.tag}
                  </span>
                  <h3 className="text-3xl font-cormorant font-bold text-ivory mb-4 group-hover:text-champagne transition-colors duration-500">{item.title}</h3>
                  <p className="text-ivory/60 text-xs font-jakarta leading-relaxed max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.desc}
                  </p>
                  <div className="mt-8 w-12 h-[1px] bg-champagne group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Chef Recommendations */}
      <section className="py-24 md:py-40 bg-onyx relative overflow-hidden group/main">
        <div className="container mx-auto px-6 mb-16">
          <p className="font-jakarta text-[10px] text-champagne uppercase font-bold tracking-[0.3em] mb-6">
            Chef's Recommendations
          </p>
          <h2 className="text-5xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter">
            Must <br />
            <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal block mt-4">Try Dishes</span>
          </h2>
        </div>

        <div className="relative px-6">
          {/* Navigation Arrows - Side Positioned */}
          <div className="absolute top-1/2 -left-4 md:left-10 -translate-y-1/2 z-40 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="w-16 h-16 rounded-full border-white/10 bg-black/40 backdrop-blur-xl text-champagne hover:bg-champagne hover:text-black transition-all duration-500 shadow-2xl"
              onClick={() => {
                const container = document.getElementById('chef-scroll-container');
                if (container) container.scrollBy({ left: -450, behavior: 'smooth' });
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 md:right-10 -translate-y-1/2 z-40 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="w-16 h-16 rounded-full border-white/10 bg-black/40 backdrop-blur-xl text-champagne hover:bg-champagne hover:text-black transition-all duration-500 shadow-2xl"
              onClick={() => {
                const container = document.getElementById('chef-scroll-container');
                if (container) container.scrollBy({ left: 450, behavior: 'smooth' });
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>

          <div 
            id="chef-scroll-container"
            className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
          {[
            { title: "Masala Dosa", img: "/assets/food/masala_dosa.webp", tag: "South Indian" },
            { title: "Tandoori Platter", img: "/assets/food/tandoori_platter.webp", tag: "Tandoor" },
            { title: "Grand Biryani", img: "/assets/food/grand_biryani.webp", tag: "Main Course" },
            { title: "Premium Coffee", img: "/assets/food/premium_coffee.webp", tag: "Beverage" },
            { title: "Paneer Tikka", img: "/assets/food/paneer_tikka.webp", tag: "Appetizer" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/5] relative snap-center group overflow-hidden border border-white/5 shadow-2xl"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent p-10 flex flex-col justify-end">
                <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{item.tag}</span>
                <h3 className="text-white text-3xl md:text-4xl font-jakarta font-bold uppercase tracking-tighter transition-all duration-500 group-hover:text-champagne">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Interactive Menu Section */}
      <section className="pt-24 md:pt-40 pb-12 relative">
        <div className="container mx-auto px-6 mb-16">
          <p className="font-jakarta text-[10px] text-champagne uppercase font-bold tracking-[0.3em] mb-6">
            The Digital Experience
          </p>
          <h2 className="text-5xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase leading-[0.8] tracking-tighter">
            Flip Through <br />
            <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal block mt-4">Our Menu</span>
          </h2>
        </div>
        <MenuFlipbook />
      </section>

      {/* Call to Action - Reservations */}
      <section className="pt-12 md:pt-20 pb-24 md:pb-48 relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-jakarta font-black text-white/[0.01] uppercase pointer-events-none select-none whitespace-nowrap">
          Gourmet
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-24 md:py-32 border-x border-white/5 px-6 relative"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-champagne/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-champagne/30" />

            <h2 className="text-4xl md:text-8xl font-jakarta font-extrabold text-ivory uppercase leading-[0.8] mb-10 tracking-tighter">
              Book Your <br />
              <span className="text-champagne font-cormorant font-normal lowercase italic tracking-normal">Table</span>
            </h2>
            <p className="text-ivory/60 font-jakarta text-lg mb-16 max-w-xl mx-auto leading-relaxed">
              Indulge in a culinary escape that transcends the ordinary. Reserve your table at Café Cove or 
              Anaaya's Restaurant for a tailored gastronomic experience.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button asChild className="bg-champagne text-black hover:bg-brass transition-all duration-500 rounded-none px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em] h-auto shadow-2xl">
                <Link href="/book?type=dining" className="flex items-center gap-4">
                  Reserve a Table <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-champagne/30 text-champagne hover:bg-champagne/5 transition-all duration-500 rounded-none px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em] h-auto">
                <Link href="tel:+919181043994" className="flex items-center gap-4">Call Concierge</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

