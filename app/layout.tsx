import type { Metadata } from "next";
import { Playfair_Display, Lora, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppChat } from "@/components/whatsapp-chat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Hotel Luxuria Grand — Silchar's Premier Luxury Destination",
    template: "%s — Hotel Luxuria Grand, Silchar",
  },
  description: "Experience refined luxury on Ghungoor Kuarpar Road. Silchar's No. 1 destination for premium rooms, grand banquets, and signature dining at Hotel Luxuria Grand.",
  keywords: ["hotels in Silchar", "luxury hotel Silchar", "Silchar wedding venue", "banquet hall Silchar", "best hotel in Silchar", "Hotel Luxuria Grand Silchar", "luxuria grand silchar", "luxury grand hotel silchar", "silcoorie grant", "best hotel in silchar assam", "top luxury stay silchar", "hotel near NIT Silchar", "accommodation near NIT Silchar", "best place to stay near NIT Silchar"],
  metadataBase: new URL("https://www.hotelluxuriagrand.com"),
  openGraph: {
    title: "Hotel Luxuria Grand — Elite Luxury Hotel in Silchar",
    description: "Discover Silchar's most refined sanctuary. Premium suites, signature dining, and unforgettable events at Hotel Luxuria Grand.",
    url: "https://www.hotelluxuriagrand.com",
    siteName: "Hotel Luxuria Grand",
    images: [
      {
        url: "/og_image.webp",
        width: 1200,
        height: 630,
        alt: "Hotel Luxuria Grand Silchar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Luxuria Grand — Silchar's Premier Luxury Destination",
    description: "Experience the art of grand living in the heart of Silchar.",
    images: ["/og_image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Luxuria Grand",
  "description": "An upscale hotel in Silchar, Assam offering refined accommodations across seven categories, with banquet, dining, and event facilities.",
  "image": "https://www.hotelluxuriagrand.com/og_image.webp",
  "url": "https://www.hotelluxuriagrand.com",
  "telephone": "+919181043994",
  "priceRange": "₹2200-₹6500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ghungoor Kuarpar Road, Near Saint Capitanio School",
    "addressLocality": "Silchar",
    "addressRegion": "Assam",
    "postalCode": "788015",
    "addressCountry": "IN"
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "checkinTime": "12:00",
  "checkoutTime": "11:00"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${cormorant.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://s.ytimg.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-onyx text-champagne font-jakarta" suppressHydrationWarning>
        <Navbar />
        <SmoothScroll>
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
        <WhatsAppChat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

