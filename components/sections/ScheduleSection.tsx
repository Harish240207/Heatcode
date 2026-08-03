"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { michroma } from "@/app/fonts";
import { SCHEDULE_TIMELINE } from "@/constants/landing";
import { SpiderWebBackground } from "@/components/UI/SpiderWebBackground";

export function ScheduleSection() {
  return (
    <section
      id="schedule"
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
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
            <span
              className={`${michroma.className} text-[11px] uppercase tracking-[0.45em] text-[#E50914] font-semibold`}
            >
              [ 03 // EVENT TIMELINE ]
            </span>
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
          </div>

          <h2
            className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight`}
          >
            COMPETITION <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-[#E50914] bg-clip-text text-transparent">
              SCHEDULE & MILESTONES
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
            Follow the complete HeatCode journey—from the competition launch and dataset release to final submissions, evaluation, and winner announcement.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* DESKTOP HORIZONTAL TIMELINE (Hidden on mobile/tablet) */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative my-8">
          
          {/* Glowing Red Web Connector Line Across Desktop */}
          <div className="absolute top-[60px] left-8 right-8 h-[3px] bg-gradient-to-r from-[#E50914]/20 via-[#E50914] to-[#E50914]/20 rounded-full shadow-[0_0_15px_#E50914]" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {SCHEDULE_TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Milestone Spider Web Node Dot */}
                <div className="relative mb-8 flex items-center justify-center">
                  <div
                    className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      item.isHighlight
                        ? "border-[#E50914] bg-[#07131F] text-[#E50914] shadow-[0_0_25px_#E50914]"
                        : "border-white/20 bg-[#030305] text-white/60 group-hover:border-[#E50914] group-hover:text-white"
                    }`}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  {item.isHighlight && (
                    <span className="absolute inset-0 rounded-full bg-[#E50914]/30 animate-ping" />
                  )}
                </div>

                {/* Glass Milestone Card */}
                <div
                  className={`w-full rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1.5 flex flex-col justify-between h-[245px] ${
                    item.isHighlight
                      ? "border-[#E50914]/50 bg-gradient-to-b from-[#07131F] via-[#050608] to-[#030305] shadow-[0_10px_30px_rgba(229,9,20,0.2)]"
                      : "border-white/10 bg-white/[0.03] group-hover:border-white/30 group-hover:bg-white/[0.06]"
                  }`}
                >
                  <div>
                    <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold rounded border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914] inline-block mb-3">
                      {item.tag}
                    </span>

                    <h3
                      className={`${michroma.className} text-sm font-bold uppercase text-white tracking-wide leading-snug line-clamp-2`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-white/60 mt-2 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-col space-y-1 text-[11px] text-white/70">
                    <div className="flex items-center justify-center space-x-1.5 text-[#E50914] font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1.5 text-white/60">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================= */}
        {/* MOBILE & TABLET VERTICAL TIMELINE (Visible on <lg screens) */}
        {/* ========================================================= */}
        <div className="lg:hidden relative pl-6 sm:pl-10">
          
          {/* Vertical Glowing Red Web Strand Line */}
          <div className="absolute top-0 bottom-0 left-[15px] sm:left-[23px] w-[2px] bg-gradient-to-b from-[#E50914] via-[#E50914]/60 to-transparent shadow-[0_0_12px_#E50914]" />

          <div className="space-y-8">
            {SCHEDULE_TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Node Icon on Timeline Line */}
                <div
                  className={`absolute left-[-23px] sm:left-[-31px] top-1.5 h-8 w-8 rounded-full border-2 flex items-center justify-center z-10 transition-colors ${
                    item.isHighlight
                      ? "border-[#E50914] bg-[#07131F] text-[#E50914] shadow-[0_0_15px_#E50914]"
                      : "border-white/20 bg-[#030305] text-white/60"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                {/* Mobile Milestone Card */}
                <div
                  className={`rounded-2xl border p-5 backdrop-blur-xl transition-all ${
                    item.isHighlight
                      ? "border-[#E50914]/50 bg-gradient-to-br from-[#07131F] via-[#050608] to-[#030305]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold rounded border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914]">
                      {item.tag}
                    </span>

                    <div className="flex items-center space-x-3 text-xs text-white/70">
                      <span className="flex items-center space-x-1 text-[#E50914]">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-white/50">
                        <Clock className="h-3 w-3" />
                        <span>{item.time}</span>
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`${michroma.className} text-base sm:text-lg font-bold uppercase text-white tracking-wide mt-1`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/65 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
