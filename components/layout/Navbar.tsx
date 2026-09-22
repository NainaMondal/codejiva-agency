"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 glass border-b-0 border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <Code2 className="text-purple-500" /> CodeJiva
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#process" className="hover:text-white transition">Process</a>
          </div>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 shadow-lg shadow-purple-500/25 text-white px-5 py-2 rounded-lg text-sm font-medium hidden md:block transition-all"
          >
            Start Project
          </button>
        </div>
      </nav>

      {/* Renders the modal specifically for the Navbar button */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}