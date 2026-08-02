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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#030305] px-8 py-10 text-white select-none"
        >
          {/* ================= TOP ================= */}

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.45em] text-[#E50914]">
                FODSE × SVCE
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                HEATCODE 2026
              </h1>

            </div>

            <div className="text-right">

              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                Hosted On
              </p>

              <h2 className="mt-2 text-2xl font-bold">
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
              className="flex items-end"
            >

              <span className="text-7xl font-light text-[#E50914] sm:text-8xl md:text-9xl">
                {percentage}
              </span>

              <span className="mb-3 ml-3 text-3xl font-light text-white/40">
                %
              </span>

            </motion.div>

          </div>

          {/* ================= BOTTOM ================= */}

          <div className="mx-auto w-full max-w-2xl">

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
              className="mt-6 text-center text-[11px] uppercase tracking-[0.45em] text-white/35"
            >
              Initializing HeatCode Experience...
            </motion.p>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}