import { Hero } from "@/components/hero";
import { FeaturedRooms } from "@/components/featured-rooms";
import { BrandStory } from "@/components/brand-story";
import { HomeSections } from "@/components/home-sections";
import { WelcomeStrip } from "@/components/welcome-strip";
import { Metadata } from "next";
import Preloader from "@/components/preloader";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => mod.Testimonials), { 
  ssr: false,
  loading: () => <div className="h-96 bg-onyx animate-pulse" />
});

const ContactMap = dynamic(() => import("@/components/contact-map").then(mod => mod.ContactMap), { 
  ssr: false,
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
      <main className="flex-1 bg-onyx">
      <Hero />
      
      <WelcomeStrip />

      <FeaturedRooms />
      <BrandStory />
      <HomeSections />
      <Testimonials />
      <ContactMap />
    </main>
    </>
  );
}
