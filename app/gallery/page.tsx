import { Metadata } from "next";
import GalleryContent from "@/components/pages/gallery-content";

export const metadata: Metadata = {
  title: "A Visual Journey",
  description: "Step into the world of Luxuria Grand through our curated gallery. Experience the elegance of our suites, the vibrancy of our dining spaces, and the grandeur of our events.",
  keywords: ["hotel gallery Silchar", "Luxuria Grand photos", "luxury hotel interiors Silchar", "hotel exterior Silchar"],
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
