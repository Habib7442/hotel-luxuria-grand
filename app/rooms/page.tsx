import { Metadata } from "next";
import RoomsContent from "@/components/pages/rooms-content";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Refined luxury in Silchar. Explore our suites from the royal President Suite to sophisticated Executive rooms. Book your luxury stay at Hotel Luxuria Grand.",
  keywords: ["luxury suites Silchar", "hotel rooms Silchar", "President Suite Silchar", "best place to stay in Silchar"],
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    title: "Luxury Rooms & Suites — Hotel Luxuria Grand",
    description: "Explore our seven categories of refined accommodations in Silchar. From the royal President Suite to sophisticated Executive rooms.",
  },
};

export default function RoomsPage() {
  return <RoomsContent />;
}
