import type { Metadata } from "next";
export const revalidate = 300;
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
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
        className={`${lato.variable} antialiased bg-surface text-charcoal font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
