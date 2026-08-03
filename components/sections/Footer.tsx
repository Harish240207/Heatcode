"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { michroma } from "@/app/fonts";

const FOOTER_LINKS = [
  { name: "About", href: "#about" },
  { name: "Why Participate", href: "#why-participate" },
  { name: "Schedule", href: "#schedule" },
  { name: "Rewards", href: "#rewards" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#020203] text-white overflow-hidden border-t border-white/10 select-none">
      
      {/* Animated Glowing Red Top Border Light Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent shadow-[0_0_15px_#E50914] animate-pulse" />

      {/* Subtle Spider Web Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#E50914]/[0.025] rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10 items-start">
          
          {/* Column 1: Logo & Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/fodse-logo.png"
                alt="FODSE Logo"
                width={56}
                height={56}
                priority
                className="h-11 w-auto object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.2)]"
              />
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#E50914] font-semibold block">
                  FODSE × SVCE
                </span>
                <h3 className={`${michroma.className} text-xl font-black text-white tracking-wider`}>
                  HEATCODE 2026
                </h3>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              The premier 24-hour machine learning hackathon hosted by the Faculty of Data Science and Engineering (FODSE) at Sri Venkateswara College of Engineering.
            </p>

            <div className="pt-2 text-[11px] text-white/40 tracking-wider">
              <span>VENUE: SVCE CAMPUS, PENNALUR</span>
            </div>
          </div>

        

          {/* Column 2: Scroll Back to Top Button & Organizers (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6 md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/80 transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914] hover:text-white hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="h-4 w-4" />
            </button>

            <div className="md:text-right text-xs text-white/50 space-y-1">
              <p className="font-semibold text-white/80">
                ORGANIZED BY FODSE
              </p>
              <p>FACULTY OF DATA SCIENCE & ENGINEERING</p>
              <p className="text-[10px] text-[#E50914]">HEATCODE 2026 ARENA</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 HeatCode. All rights reserved.</p>

          <p className="flex items-center space-x-1.5 text-white/60">
            <span>Designed & Developed by</span>
            <span className="font-bold text-white tracking-wider">FODSE</span>
            <span className="text-[#E50914]">★</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
