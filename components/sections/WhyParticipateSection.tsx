"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Flame,
  Users2,
  Briefcase,
  Network,
  Award,
} from "lucide-react";
import { michroma, manrope } from "@/app/fonts";
import { WHY_PARTICIPATE_CARDS } from "@/constants/landing";
import { SpiderWebBackground } from "@/components/UI/SpiderWebBackground";

const ICON_MAP = {
  Cpu,
  Flame,
  Users2,
  Briefcase,
  Network,
  Award,
};

export function WhyParticipateSection() {
  return (
    <section
      id="why-participate"
      className="relative min-h-screen w-full bg-[#030305] py-24 sm:py-32 overflow-hidden flex items-center"
    >
      <SpiderWebBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        
        {/* ========================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.99, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
            <span
              className={`${michroma.className} text-[11px] uppercase tracking-[0.45em] text-[#E50914] font-semibold`}
            >
              [ 02 // ADVANTAGES ]
            </span>
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
          </div>

          <h2
            className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight`}
          >
            WHY ENTER THE <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-[#E50914] bg-clip-text text-transparent">
              HEATCODE ARENA
            </span>
          </h2>

          <p
  className={`
    ${manrope.className}
    mt-5
    max-w-3xl
    text-[16px]
    leading-8
    font-medium
    tracking-[0.01em]
    text-white/72
  `}
>
            Designed for engineers who crave authentic data complexity, real-time leaderboard thrills, and high-impact machine learning credentials.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* 6 FEATURE CARDS GRID (3x2 Desktop, 2 col Tablet, 1 col Mobile) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_PARTICIPATE_CARDS.map((card, index) => {
            const Icon = ICON_MAP[card.iconName];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative h-full flex flex-col"
              >
                {/* Outer Glass Card Container with Hover Lift & Red Glow */}
                <div className="relative h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#07131F]/80 via-[#05080E]/90 to-[#030305]/95 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#E50914]/50 group-hover:shadow-[0_12px_40px_rgba(229,9,20,0.22)]">
                  
                  {/* Subtle Top Red Accent Line on Hover */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Icon & Badge Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E50914] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <span className="px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded border border-white/10 bg-white/[0.04] text-white/70 group-hover:border-[#E50914]/40 group-hover:text-[#E50914] transition-colors">
                        {card.badge}
                      </span>
                    </div>

                    {/* Subtitle / Category */}
                    <span className="text-xs uppercase tracking-widest text-[#E50914] font-medium block mb-1">
                      {card.subtitle}
                    </span>

                    {/* Card Title */}
                    <h3
                      className={`${michroma.className} text-xl font-bold uppercase text-white tracking-wide mb-3`}
                    >
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p
  className={`
    ${manrope.className}
    text-[15px]
    leading-7
    font-medium
    tracking-[0.01em]
    text-white/70
  `}
>
    {card.description}
</p>
                  </div>

                  {/* Bottom Spider Web Strand Line Divider */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                    <span
  className={`
    ${manrope.className}
    text-[13px]
    font-semibold
    tracking-wide
    text-white/45
    group-hover:text-white/80
    transition-colors
  `}
>
    HEATCODE 2026
</span>
                    <span className="text-[#E50914] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
