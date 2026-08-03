"use client";

import { motion } from "framer-motion";
import {
  Coins,
  FileCheck,
  Crown,
  Zap,
  Gift,
  Trophy,
  Sparkles,
} from "lucide-react";
import { michroma } from "@/app/fonts";
import { REWARDS_DATA } from "@/constants/landing";
import { SpiderWebBackground } from "@/components/UI/SpiderWebBackground";

const ICON_MAP = {
  Coins,
  FileCheck,
  Crown,
  Zap,
  Gift,
};

export function RewardsSection() {
  return (
    <section
      id="rewards"
      className="relative min-h-screen w-full bg-[#030305] py-24 sm:py-32 overflow-hidden flex items-center"
    >
      <SpiderWebBackground />

      {/* Floating Red Ambient Glow Orbs */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E50914]/[0.04] rounded-full blur-[170px]" />

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
              [ 04 // REWARDS & PRIZES ]
            </span>
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
          </div>

          <h2
            className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight`}
          >
            EXCELLENCE <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-[#E50914] bg-clip-text text-transparent">
              REWARDED & RECOGNIZED
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
            More than prizes—HeatCode celebrates innovation, technical excellence, and the determination to solve real-world machine learning challenges.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* CENTERPIECE: LARGE GLOWING PRIZE CARD */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          {/* Animated Ambient Outer Pulse Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#E50914]/30 via-white/10 to-[#E50914]/30 blur-2xl opacity-75 animate-pulse" />

          <div className="relative rounded-3xl border border-[#E50914]/40 bg-gradient-to-b from-[#081524]/95 via-[#05070B]/95 to-[#030305]/98 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_20px_70px_rgba(229,9,20,0.25)]">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#E50914]/50 bg-[#E50914]/15 text-[#E50914] text-xs uppercase tracking-widest font-semibold mb-6">
              <Sparkles className="h-4 w-4 animate-spin" />
              <span>COMPETITION REWARDS</span>
            </div>

            <h3
  className={`${michroma.className} text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]`}
>
  Competition
  <br />
  Rewards
</h3>

            <p className="mt-5 max-w-2xl mx-auto text-[16px] leading-8 text-white/70">
  Cash prizes will be awarded to the <span className="font-semibold text-white">Winner</span> and{" "}
  <span className="font-semibold text-white">Runner-up</span>. Every eligible participant who successfully completes the competition will receive an{" "}
  <span className="font-semibold text-[#E50914]">
    Official Participation Certificate
  </span>{" "}
  from FODSE.
</p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

  <div className="flex items-center gap-2 rounded-xl border border-[#E50914]/30 bg-white/[0.04] px-5 py-3">
    <Trophy className="h-4 w-4 text-yellow-400" />
    <span className="text-xs uppercase tracking-wider font-semibold text-white">
      Winner
    </span>
  </div>

  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3">
    <Trophy className="h-4 w-4 text-gray-300" />
    <span className="text-xs uppercase tracking-wider font-semibold text-white">
      Runner-up
    </span>
  </div>

  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3">
    <Sparkles className="h-4 w-4 text-[#E50914]" />
    <span className="text-xs uppercase tracking-wider font-semibold text-white">
      Participation Certificate
    </span>
  </div>

</div>

          </div>
        </motion.div>

        

      </div>
    </section>
  );
}
