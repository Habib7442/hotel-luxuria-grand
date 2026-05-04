import { Metadata } from "next";
import EventsContent from "@/components/pages/events-content";

export const metadata: Metadata = {
  title: "Weddings & Grand Events",
  description: "Host your most memorable moments at Silchar's premier event destination. From grand weddings to sophisticated corporate gatherings, our banquet halls offer the perfect backdrop.",
  keywords: ["wedding venue Silchar", "banquet hall Silchar", "best place for marriage in Silchar", "corporate events Silchar"],
};

export default function EventsPage() {
  return <EventsContent />;
}
