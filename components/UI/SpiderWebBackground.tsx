
"use client";

import { motion } from "framer-motion";

export function SpiderWebBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      {/* Dark Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E50914]/[0.035] rounded-full blur-[160px]" />
      <div className="absolute top-3/4 left-1/3 w-[600px] h-[600px] bg-[#07131F]/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#E50914]/[0.025] rounded-full blur-[150px]" />

      {/* SVG Spider Web Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045] text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="spider-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            <path
              d="M 0 0 L 120 120"
              fill="none"
              stroke="#E50914"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
            <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="60" cy="60" r="55" fill="none" stroke="#E50914" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="spider-web-mask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#spider-grid)" />
      </svg>

      {/* Subtle Spider-Man Web Strand Lines */}
      <svg
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M600 0 C450 300 200 450 0 600 M600 150 C400 350 150 550 0 750 M600 300 C350 450 100 650 0 900"
          stroke="#E50914"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle cx="300" cy="300" r="3" fill="#E50914" className="animate-pulse" />
        <circle cx="450" cy="150" r="2" fill="#FFFFFF" />
      </svg>

      {/* Animated Subtle Red Web Node Pulsing Dots */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-[#E50914] blur-[2px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-[#E50914] blur-[3px]"
      />
    </div>
  );
}
