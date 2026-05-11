import { Metadata } from "next";
import BookingContent from "@/components/pages/booking-content";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description: "Secure your luxury stay in Silchar. Use our seamless WhatsApp concierge to book your suite directly and enjoy exclusive direct-booking benefits.",
  keywords: ["hotel booking Silchar", "reserve room Luxuria Grand", "direct booking benefits Silchar", "whatsapp reservation hotel"],
  alternates: {
    canonical: "/book",
  },
};

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-onyx flex items-center justify-center"><div className="text-champagne font-jakarta animate-pulse uppercase tracking-[0.4em] text-xs">Loading Sanctuary...</div></div>}>
      <BookingContent />
    </Suspense>
  );
}
