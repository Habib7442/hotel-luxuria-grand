import { Metadata } from "next";
import OffersContent from "@/components/pages/offers-content";

export const metadata: Metadata = {
  title: "Exclusive Offers — Hotel Luxuria Grand Silchar",
  description: "Discover exclusive hotel offers and seasonal packages at Hotel Luxuria Grand, Silchar. Best rates guaranteed when you book directly with us.",
  keywords: ["hotel deals Silchar", "Luxuria Grand offers", "luxury hotel packages Assam", "book direct hotel Silchar", "seasonal hotel discounts"],
};

export default function OffersPage() {
  return <OffersContent />;
}
