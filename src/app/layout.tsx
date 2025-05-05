import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bill's Personal Site",
  description: "Data Analyst and Climate Technologist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen">
          <main className="min-h-screen relative">
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="relative z-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
