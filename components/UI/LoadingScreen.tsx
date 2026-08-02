"use client";

import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  percentage: number;
  isStage2Ready: boolean;
}

export function LoadingScreen({
  percentage,
  isStage2Ready,
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {!isStage2Ready && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-50 bg-[#030305] text-white select-none"
        >
          {/* ================= LAYOUT ================= */}

          <div className="flex h-full flex-col px-5 pt-8 pb-10 sm:px-8 sm:pt-10">

            {/* ================= TOP ================= */}

            <div className="flex items-start justify-between">

              {/* Left */}

              <div>

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#E50914] sm:text-xs sm:tracking-[0.45em]">
                  FODSE × SVCE
                </p>

                <h1 className="mt-3 text-[44px] font-black leading-[0.95] tracking-tight sm:text-4xl">
                  <span className="block sm:inline">HEATCODE</span>
                  <span className="block sm:ml-2 sm:inline">2026</span>
                </h1>

              </div>

              {/* Right */}

              <div className="text-right">

                <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.28em] text-white/35 sm:text-xs sm:tracking-[0.35em]">
                  HOSTED ON
                </p>

                <h2 className="mt-2 text-[24px] font-bold sm:text-2xl">
                  Kaggle
                </h2>

              </div>

            </div>

            {/* ================= CENTER ================= */}

            <div className="flex flex-1 items-center justify-center">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="-mt-10 flex items-end sm:mt-0"
              >

                <span className="text-7xl font-light leading-none text-[#E50914] sm:text-8xl md:text-9xl">
                  {percentage}
                </span>

                <span className="mb-2 ml-2 text-3xl font-light leading-none text-white/40 sm:mb-3 sm:ml-3">
                  %
                </span>

              </motion.div>

            </div>

            {/* ================= BOTTOM ================= */}

            <div className="mx-auto mb-2 w-full max-w-xl">

              <div className="h-[3px] overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: `${percentage}%`,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="h-full rounded-full bg-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.8)]"
                />

              </div>

              <motion.p
                animate={{
                  opacity: [0.35, 1, 0.35],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-5 text-center text-[10px] uppercase tracking-[0.35em] text-white/35 sm:mt-6 sm:text-[11px] sm:tracking-[0.45em]"
              >
                Initializing HeatCode Experience...
              </motion.p>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}