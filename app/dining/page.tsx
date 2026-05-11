import { Metadata } from "next";
import DiningContent from "@/components/pages/dining-content";

export const metadata: Metadata = {
  title: "Fine Dining & Signature Flavors",
  description: "Discover the pinnacle of culinary excellence at Hotel Luxuria Grand. From the cozy ambiance of Café Cove to the grand feasts at Anaaya's Restaurant, experience Silchar's finest dining.",
  keywords: ["best restaurant in Silchar", "fine dining Silchar", "Café Cove Silchar", "Anaaya's Restaurant Silchar", "hotel dining Silchar"],
  alternates: {
    canonical: "/dining",
  },
};

export default function DiningPage() {
  return <DiningContent />;
}
