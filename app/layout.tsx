import type { Metadata } from "next";
import { Playfair_Display, Lora, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

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
  title: "Hotel Luxuria Grand | Elite Luxury Hotel in Silchar",
  description: "Experience the ultimate luxury and comfort at Hotel Luxuria Grand, Silchar's premier destination for fine living, exquisite dining, and grand events.",
  metadataBase: new URL("https://hotel-luxuria-grand.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hotel Luxuria Grand | Elite Luxury Hotel in Silchar",
    description: "Experience the ultimate luxury and comfort at Hotel Luxuria Grand, Silchar's premier destination for fine living.",
    url: "https://hotel-luxuria-grand.vercel.app",
    siteName: "Hotel Luxuria Grand",
    images: [
      {
        url: "/assets/hero.jpeg",
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
    title: "Hotel Luxuria Grand | Elite Luxury Hotel in Silchar",
    description: "Silchar's premier destination for fine living and grand events.",
    images: ["/assets/hero.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Luxuria Grand",
  "description": "An upscale hotel in Silchar, Assam offering refined accommodations across seven categories, with banquet, dining, and event facilities.",
  "image": "https://hotel-luxuria-grand.vercel.app/assets/hero.jpeg",
  "url": "https://hotel-luxuria-grand.vercel.app",
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
      </body>
    </html>
  );
}
