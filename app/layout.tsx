import type { Metadata } from "next";
export const revalidate = 300;
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Climate Intelligence Network",
  description: "A modern, data-driven climate-tech civic platform providing climate intelligence with civic credibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface text-charcoal`}
      >
        <Navbar />
        <div className="max-w-7xl mx-auto px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
