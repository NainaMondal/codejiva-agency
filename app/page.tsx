"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BookingModal } from "@/components/ui/BookingModal";
// Added Mail and Phone icons to the import
import { LayoutTemplate, Search, Code, ShieldCheck, Smartphone, Bot, CalendarCheck, Share2, Globe, Mail, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

// Animation variants for staggered hero elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <>
      {/* 1. Animated Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] -z-10"
        />
        
        <div className="container mx-auto px-6 relative text-center max-w-4xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              We Build Websites That <br className="hidden md:block" />
              <span className="text-gradient">Help Businesses Grow.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              From high-converting landing pages to complete business websites and SEO, CodeJiva helps businesses build a powerful online presence that attracts customers.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="primary" onClick={() => setIsBookingOpen(true)}>
                Get a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Services
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
              {[
                { icon: ShieldCheck, text: "Custom-designed" },
                { icon: Smartphone, text: "Mobile-first" },
                { icon: Search, text: "SEO-ready architecture" }
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <item.icon size={16} className="text-purple-500"/> {item.text}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-24 container mx-auto px-6 scroll-mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Premium Digital & AI Solutions</h2>
          <p className="text-slate-400">Everything you need to automate workflows and scale your business online.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            title="End-to-End AI Agents" 
            description="Intelligent conversational chatbots designed to handle customer support and query resolution 24/7."
            icon={<Bot size={40} />}
            delay={0.1}
          />
          <ServiceCard 
            title="Smart Appointment Booking" 
            description="Automated scheduling agents tailored for healthcare clinics, professionals, and service businesses."
            icon={<CalendarCheck size={40} />}
            delay={0.2}
          />
          <ServiceCard 
            title="Social Media Automation" 
            description="Custom workflows and AI integrations to schedule, manage, and scale your social media presence."
            icon={<Share2 size={40} />}
            delay={0.3}
          />
          <ServiceCard 
            title="Website Development" 
            description="Professional, fast, and fully responsive websites designed specifically around your business goals."
            icon={<Code size={40} />}
            delay={0.4}
          />
          <ServiceCard 
            title="Custom Webpages" 
            description="Dedicated, high-converting single pages and corporate web profiles built with modern tech."
            icon={<Globe size={40} />}
            delay={0.5}
          />
          <ServiceCard 
            title="Landing Pages" 
            description="Focused, conversion-optimized landing pages designed to turn your ad traffic into qualified leads."
            icon={<LayoutTemplate size={40} />}
            delay={0.6}
          />
        </div>
      </section>

      {/* 3. The Process Section */}
      <section id="process" className="py-24 bg-white/[0.02] border-y border-purple-500/10 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-slate-400">A streamlined process to launch your digital presence.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { step: "01", title: "Discover & Strategize", desc: "We analyze your business, competitors, and goals to build a custom AI and web strategy." },
              { step: "02", title: "Design & Develop", desc: "We build your website and program your AI agents using secure, scalable technology." },
              { step: "03", title: "Launch & Optimize", desc: "We deploy your solutions, ensure SEO visibility, and provide long-term maintenance." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-2xl flex gap-6 items-start"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section id="portfolio" className="py-24 container mx-auto px-6 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Results</h2>
          <p className="text-slate-400">Recent projects and digital solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
            <div className="h-48 bg-purple-900/20 border-b border-purple-500/20 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
               <Code className="text-purple-500/50 w-24 h-24 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Healthcare</span>
              <h3 className="text-2xl font-semibold text-white mt-2 mb-3">Clinic AI Receptionist</h3>
              <p className="text-slate-400 mb-4">Automated WhatsApp appointment booking bot integrated with a custom clinic landing page.</p>
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
            <div className="h-48 bg-purple-900/20 border-b border-purple-500/20 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
               <LayoutTemplate className="text-purple-500/50 w-24 h-24 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">E-Commerce</span>
              <h3 className="text-2xl font-semibold text-white mt-2 mb-3">Retail Growth Platform</h3>
              <p className="text-slate-400 mb-4">High-converting SEO optimized web platform with integrated social media automation workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Animated Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass rounded-3xl p-12 lg:p-24 border border-purple-500/20 text-center max-w-5xl mx-auto relative overflow-hidden"
          >
            {/* CTA Background Orbs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build a Better Online Presence?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Tell us about your business and we'll help you find the right website and growth strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button variant="primary" onClick={() => setIsBookingOpen(true)}>Start Your Project</Button>
                <Button variant="secondary" onClick={() => setIsBookingOpen(true)}>
                  Book a Free Consultation
                </Button>
              </div>

              {/* Added Contact Info Section Here */}
              <div className="pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row justify-center items-center gap-8 text-slate-300">
                <a href="mailto:codejiva6@gmail.com" className="flex items-center gap-3 hover:text-purple-400 transition-colors bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-purple-500/50">
                  <Mail size={18} className="text-purple-400" />
                  codejiva6@gmail.com
                </a>
                <a href="tel:+918609644948" className="flex items-center gap-3 hover:text-purple-400 transition-colors bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-purple-500/50">
                  <Phone size={18} className="text-purple-400" />
                  +91 8609644948
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* This renders the actual modal popup when the state is true */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}