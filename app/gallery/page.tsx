import { Metadata } from "next";
import GalleryContent from "@/components/pages/gallery-content";

export const metadata: Metadata = {
  title: "A Visual Journey",
  description: "Take a visual tour of Hotel Luxuria Grand. Explore our luxury suites, elegant dining venues, and grand event spaces through our curated photo gallery.",
  keywords: ["hotel gallery Silchar", "Luxuria Grand photos", "luxury hotel interiors Silchar", "hotel exterior Silchar"],
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
