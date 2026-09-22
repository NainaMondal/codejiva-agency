"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    whileHover={{ y: -5 }}
    className="glass p-8 rounded-2xl hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 group relative overflow-hidden"
  >
    {/* Subtle animated background glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-blue-500 mb-6 inline-block"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
      <a href="#" className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-2 group/link">
        Learn More 
        <motion.span 
          initial={{ x: 0 }} 
          whileHover={{ x: 5 }}
          className="inline-block"
        >
          <ArrowRight size={16} />
        </motion.span>
      </a>
    </div>
  </motion.div>
);