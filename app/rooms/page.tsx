import { Metadata } from "next";
import RoomsContent from "@/components/pages/rooms-content";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Explore our seven categories of refined accommodations in Silchar, from the royal President Suite to our sophisticated Executive rooms. Book your luxury stay at Hotel Luxuria Grand today.",
  keywords: ["luxury suites Silchar", "hotel rooms Silchar", "President Suite Silchar", "best place to stay in Silchar"],
  alternates: {
    canonical: "/rooms",
  },
};

export default function RoomsPage() {
  return <RoomsContent />;
}
