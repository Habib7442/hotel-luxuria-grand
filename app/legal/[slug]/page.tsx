import { Metadata } from "next";
import LegalContent from "@/components/pages/legal-content";
import { notFound } from "next/navigation";

const legalPages: Record<string, any> = {
  "privacy": {
    title: "Privacy Policy",
    lastUpdated: "May 01, 2026",
    icon: "shield",
    content: `
      <h2>1. Information We Collect</h2>
      <p>At Hotel Luxuria Grand, we are committed to protecting your personal information. We collect data necessary for room reservations, including your name, email, phone number, and identity proof as per government regulations.</p>
      
      <h2>2. How We Use Your Data</h2>
      <p>Your information is primarily used to process bookings, provide personalized services, and communicate important stay-related details. We also use aggregated data to improve our guest experience.</p>
      
      <h2>3. Data Security</h2>
      <p>We implement industry-standard security measures to safeguard your data. Online payments are processed through secure, PCI-compliant payment gateways (Razorpay), and we never store your credit card details on our servers.</p>
    `
  },
  "terms": {
    title: "Terms & Conditions",
    lastUpdated: "May 01, 2026",
    icon: "fileText",
    content: `
      <h2>1. Check-in & Check-out</h2>
      <p>Our standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.</p>
      
      <h2>2. Identity Verification</h2>
      <p>All guests are required to present a valid government-issued photo ID upon check-in. Foreign nationals must provide a valid Passport and Visa/e-FRRO.</p>
      
      <h2>3. Property Usage</h2>
      <p>Guests are expected to respect the property and other residents. Any damage to hotel property will be charged to the guest's account.</p>
    `
  },
  "cancellation-policy": {
    title: "Cancellation Policy",
    lastUpdated: "May 01, 2026",
    icon: "alertCircle",
    content: `
      <h2>1. Standard Cancellation</h2>
      <p>Cancellations made more than 48 hours prior to the check-in date will receive a full refund, subject to a 5% administrative fee.</p>
      
      <h2>2. Late Cancellation</h2>
      <p>Cancellations made within 48 hours of the check-in date will be charged for one night's stay plus taxes.</p>
      
      <h2>3. No-Show</h2>
      <p>In case of a no-show, the entire booking amount will be forfeited.</p>
    `
  },
  "refund-policy": {
    title: "Refund Policy",
    lastUpdated: "May 01, 2026",
    icon: "refreshCw",
    content: `
      <h2>1. Processing Refunds</h2>
      <p>Approved refunds will be processed back to the original payment method within 7-10 business days.</p>
      
      <h2>2. Partial Refunds</h2>
      <p>In certain cases of early check-out, partial refunds may be issued at the discretion of the management, depending on the booking type and notice period.</p>
    `
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) return { title: "Legal — Hotel Luxuria Grand" };
  
  return {
    title: `${page.title} — Hotel Luxuria Grand`,
    description: `Official ${page.title} of Hotel Luxuria Grand, Silchar. Understand our commitments, terms, and policies for a secure and transparent experience.`,
    alternates: {
      canonical: `/legal/${slug}`,
    },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) notFound();
  
  return <LegalContent {...page} />;
}
