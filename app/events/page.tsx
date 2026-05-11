import { Metadata } from "next";
import EventsContent from "@/components/pages/events-content";

export const metadata: Metadata = {
  title: "Weddings & Grand Events",
  description: "Silchar's premier event venue. From grand weddings to elite corporate gatherings, host your most memorable moments at Hotel Luxuria Grand's banquet hall.",
  keywords: ["wedding venue Silchar", "banquet hall Silchar", "best place for marriage in Silchar", "corporate events Silchar"],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Weddings & Grand Events — Hotel Luxuria Grand",
    description: "Silchar's premier event venue. From grand weddings to elite corporate gatherings at our banquet hall.",
  },
};

export default function EventsPage() {
  return <EventsContent />;
}
