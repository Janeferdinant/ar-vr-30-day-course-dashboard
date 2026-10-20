import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  title: "AR/VR Development Bootcamp | 30-Day Spatial Computing Dashboard",
  description:
    "Comprehensive 30-day, 56-hour Augmented and Virtual Reality curriculum dashboard. Instructor: Jane Rose, Asst. Prof, CSE. Explore interactive lessons, weekly major projects, mini-projects, progress tracking, and assessment evaluations.",
  keywords: [
    "AR",
    "VR",
    "Augmented Reality",
    "Virtual Reality",
    "Spatial Computing",
    "Unity",
    "OpenXR",
    "AR Foundation",
    "Jane Rose",
    "CSE"
  ],
  authors: [{ name: "Jane Rose, Asst. Prof, CSE" }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen font-sans bg-slate-950 text-slate-100 antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
