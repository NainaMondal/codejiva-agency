"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "ai-agent",
    details: ""
  });

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // PASTE YOUR WEB3FORMS ACCESS KEY HERE
    const accessKey = "e06c3fd4-30d6-43ee-a3d7-1e40a0aaa4f0";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Consultation Request - CodeJiva",
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          service_requested: formData.service,
          message: formData.details,
        }),
      });

      if (response.ok) {
        setStatus("success");
        // Reset form and close modal after 2 seconds
        setTimeout(() => {
          setFormData({ firstName: "", lastName: "", email: "", service: "ai-agent", details: "" });
          setStatus("idle");
          onClose();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg glass bg-[#09090b]/90 p-8 rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-500/10 z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1"
            >
              <X size={24} />
            </button>

            {status === "success" ? (
              <div className="text-center py-10">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                <p className="text-slate-400">We will be in touch with you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Book a Free Consultation</h3>
                <p className="text-slate-400 mb-6 text-sm">Tell us what you need, and we'll get back to you to schedule a call.</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                      placeholder="john@company.com" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Service Interested In</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#09090b] border border-purple-500/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none"
                    >
                      <option value="ai-agent">End-to-End AI Agents / Chatbots</option>
                      <option value="appointment">Doctor Appointment Booking AI</option>
                      <option value="social">Social Media Automation</option>
                      <option value="web-dev">Website Development</option>
                      <option value="landing-page">Landing Page Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Project Details (Optional)</label>
                    <textarea 
                      rows={3} 
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" 
                      placeholder="Briefly describe your goals..."
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <Button 
                    variant="primary" 
                    className="w-full mt-4 flex items-center justify-center disabled:opacity-70" 
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Request Consultation"}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};