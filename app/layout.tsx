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
      <body className="min-h-full flex flex-col bg-midnight-purple text-champagne" suppressHydrationWarning>
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
