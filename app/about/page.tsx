import { Metadata } from "next";
import AboutContent from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "The Legacy of Grandeur",
  description: "Discover the heritage of luxury at Hotel Luxuria Grand. Located in Silchar, we redefine hospitality with signature service and elite accommodations.",
  keywords: ["about Luxuria Grand", "best hotel Silchar story", "luxury hospitality Assam", "Hotel Luxuria Grand address"],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
