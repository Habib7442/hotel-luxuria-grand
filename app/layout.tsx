import type { Metadata } from "next";
import { Playfair_Display, Lora, Cormorant_Upright, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const cormorant = Cormorant_Upright({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Luxuria Grand | Silchar's Premier Luxury Hotel",
  description: "Experience grand luxury at Hotel Luxuria Grand, NIT Road, Silchar. The most desirable and glamorous destination in Barak Valley.",
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
      <body className="min-h-full flex flex-col bg-cream text-espresso" suppressHydrationWarning>{children}</body>
    </html>
  );
}
