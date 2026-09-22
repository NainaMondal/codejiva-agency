import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeJiva | Professional Website Development & SEO Agency",
  description: "End-to-end website development and digital growth partner for businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        
        {/* Your new functional Navbar */}
        <Navbar />
        
        <main className="min-h-screen flex flex-col">{children}</main>

        <footer className="border-t border-white/10 pt-16 pb-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-600 text-sm">&copy; 2026 CodeJiva. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}