import { Hero } from "@/components/hero";
import { WelcomeStrip } from "@/components/welcome-strip";
import { Metadata } from "next";
import Preloader from "@/components/preloader";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => mod.Testimonials), { 
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

const ContactMap = dynamic(() => import("@/components/contact-map").then(mod => mod.ContactMap), { 
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

const FeaturedRooms = dynamic(() => import("@/components/featured-rooms").then(mod => mod.FeaturedRooms), { 
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

const BrandStory = dynamic(() => import("@/components/brand-story").then(mod => mod.BrandStory), { 
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

const HomeSections = dynamic(() => import("@/components/home-sections").then(mod => mod.HomeSections), { 
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

const MenuFlipbook = dynamic(() => import("@/components/menu-flipbook").then(mod => mod.MenuFlipbook), {
  ssr: false,
  loading: () => <div className="h-[600px] flex items-center justify-center text-champagne uppercase tracking-widest text-xs">Loading Menu...</div>
});

export const metadata: Metadata = {
  title: "Hotel Luxuria Grand — Silchar's Premier Luxury Destination",
  description: "Experience the pinnacle of luxury at Hotel Luxuria Grand, Silchar. Featuring elite suites, fine dining, and grand event spaces. Book your stay at the best hotel in Silchar today.",
};


export default function Home() {
  return (
    <>
      <Preloader />
      <main className="flex-1 bg-onyx">
      <Hero />
      
      <WelcomeStrip />

      <FeaturedRooms />
      <BrandStory />
      <HomeSections />
      
      {/* Menu Showcase Section */}
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

      <Testimonials />
      <ContactMap />
    </main>
    </>
  );
}
