"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SCENES } from "@/constants/frames";

interface CTAOverlayProps {
  currentFrame: number;
}

export function CTAOverlay({ currentFrame }: CTAOverlayProps) {
  const isScene4 =
    currentFrame >= SCENES.SCENE_4.startFrame &&
    currentFrame <= SCENES.SCENE_4.endFrame;

  return (
    <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center px-5 sm:px-6 text-center">

      <AnimatePresence mode="wait">

        {isScene4 && (

          <motion.div
            key="heatcode-cta"
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(16px)",
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              filter: "blur(12px)",
              scale: 0.95,
            }}
            transition={{
              duration: 1.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex w-full max-w-7xl flex-col items-center justify-center space-y-5 sm:space-y-8"
          >

            {/* Registration Tag */}

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E50914] sm:text-xs sm:tracking-[0.55em]">

              REGISTRATION OPEN

            </span>

            {/* Main Heading */}

            <h2
              className="
                max-w-6xl
                text-4xl
                font-black
                uppercase
                leading-none
                tracking-tight
                text-white
                drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]

                sm:text-7xl
                md:text-8xl
                lg:text-9xl
              "
            >
              CODE.
              <br />
              COMPETE.
              <br />
              CONQUER.
            </h2>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}