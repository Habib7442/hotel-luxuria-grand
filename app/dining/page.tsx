import { Metadata } from "next";
import DiningContent from "@/components/pages/dining-content";

export const metadata: Metadata = {
  title: "Fine Dining & Signature Flavors",
  description: "Experience Silchar's finest dining. From the cozy Café Cove to grand feasts at Anaaya's Restaurant, discover culinary excellence at Hotel Luxuria Grand.",
  keywords: ["best restaurant in Silchar", "fine dining Silchar", "Café Cove Silchar", "Anaaya's Restaurant Silchar", "hotel dining Silchar", "cafe near me", "restaurants near me", "burger in silchar", "chicken fried rice silchar", "best cafe silchar", "food delivery silchar", "best restaurant near NIT Silchar", "cafe near NIT Silchar", "food near NIT Silchar", "NIT Silchar hangout places"],
  alternates: {
    canonical: "/dining",
  },
  openGraph: {
    title: "Fine Dining & Signature Flavors — Hotel Luxuria Grand",
    description: "Experience Silchar's finest dining. From the cozy Café Cove to grand feasts at Anaaya's Restaurant.",
  },
};

export default function DiningPage() {
  return <DiningContent />;
}
