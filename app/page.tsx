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

const MenuFlipbook = dynamic(() => import("@/components/home-menu-section").then(mod => mod.HomeMenuSection), {
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

const VideoShowcase = dynamic(() => import("@/components/video-showcase").then(mod => mod.VideoShowcase), {
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

export const metadata: Metadata = {
  title: "Hotel Luxuria Grand — Silchar's Premier Luxury Destination",
  description: "Experience the pinnacle of luxury at Hotel Luxuria Grand, Silchar. Featuring elite suites, fine dining, and grand event spaces. Book your stay at the best hotel in Silchar today.",
};


export default function Home() {
  return (
    <>
      <Preloader />
      <main className="flex-1 bg-onyx relative z-0">
      <Hero />
      <VideoShowcase />
      
      <WelcomeStrip />

      <FeaturedRooms />
      <BrandStory />
      <HomeSections />
      <MenuFlipbook />
      <Testimonials />
      <ContactMap />
    </main>
    </>
  );
}
