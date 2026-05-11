import { Metadata } from "next";
import ContactContent from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact Luxuria Grand — Concierge & Inquiries",
  description: "Reach out to Hotel Luxuria Grand, Silchar. Contact our concierge for room reservations, dining inquiries, or event planning. We are here to assist you 24/7.",
  keywords: ["contact Luxuria Grand", "hotel Silchar phone number", "book hotel Silchar WhatsApp", "luxuria grand silchar email", "hotel concierge Silchar"],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
