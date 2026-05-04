import { Metadata } from "next";
import AboutContent from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "The Legacy of Grandeur",
  description: "Learn about Hotel Luxuria Grand, Silchar's newest landmark of hospitality. Discover our story, our commitment to excellence, and our vision for luxury in the Barak Valley.",
  keywords: ["about Luxuria Grand", "best hotel Silchar story", "luxury hospitality Assam", "Hotel Luxuria Grand address"],
};

export default function AboutPage() {
  return <AboutContent />;
}
