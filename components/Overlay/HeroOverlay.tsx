"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SCENES } from "@/constants/frames";

interface HeroOverlayProps {
  currentFrame: number;
}

export function HeroOverlay({ currentFrame }: HeroOverlayProps) {
  const isScene1 =
    currentFrame >= SCENES.SCENE_1.startFrame &&
    currentFrame <= SCENES.SCENE_1.endFrame;

  const isScene2 =
    currentFrame >= SCENES.SCENE_2.startFrame &&
    currentFrame <= SCENES.SCENE_2.endFrame;

  const isScene3 =
    currentFrame >= SCENES.SCENE_3.startFrame &&
    currentFrame <= SCENES.SCENE_3.endFrame;

  return (
    <div
  className="
    pointer-events-none
    fixed
    inset-0
    z-10

    flex

    items-start
    justify-center

    px-5
    sm:px-6

    pt-44
    sm:pt-36
    lg:items-center
    lg:pt-0

    text-center
  "
>

      <AnimatePresence mode="wait">

        {/* ===================================================== */}
        {/* SCENE 1 */}
        {/* ===================================================== */}

        {isScene1 && (
          <motion.div
            key="scene-1"
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(12px)",
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(12px)",
              scale: 1.05,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
  flex
  w-full
  max-w-7xl
  flex-col
  items-center
  justify-center

  space-y-5

  sm:space-y-6
"
          >

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E50914] sm:text-xs sm:tracking-[0.55em]">
              FODSE PRESENTS
            </span>

            <h1 className="max-w-6xl text-5xl font-black uppercase tracking-tight leading-none text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.85)]
                           sm:text-7xl
                           md:text-8xl
                           lg:text-9xl">
              HEATCODE
            </h1>

            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#E50914] to-transparent sm:w-28" />

            <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-white/70
                          sm:max-w-3xl
                          sm:text-lg
                          sm:tracking-[0.35em]">
              24-HOUR MACHINE LEARNING CHALLENGE
            </p>

          </motion.div>
        )}

        {/* ===================================================== */}
        {/* SCENE 2 */}
        {/* ===================================================== */}

        {isScene2 && (
          <motion.div
            key="scene-2"
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(12px)",
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(12px)",
              scale: 1.05,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
  flex
  w-full
  max-w-7xl
  flex-col
  items-center
  justify-center

  space-y-5

  sm:space-y-6
"
          >

            <span className="text-[10px] uppercase tracking-[0.30em] text-[#E50914] sm:text-xs sm:tracking-[0.45em]">
              BUILD • TRAIN • OPTIMIZE
            </span>

            <h2 className="max-w-6xl text-5xl font-bold uppercase leading-none text-white
                           drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]
                           sm:text-6xl
                           md:text-7xl
                           lg:text-8xl">
              COMPETE
              <br />
              ON KAGGLE
            </h2>

            <p className="max-w-sm px-2 text-sm leading-relaxed text-white/75
                          sm:max-w-3xl
                          sm:px-0
                          sm:text-lg">
              Team up with one partner, solve a real-world machine learning
              challenge, and climb the leaderboard before time runs out.
            </p>

          </motion.div>
        )}

        {/* ===================================================== */}
        {/* SCENE 3 */}
        {/* ===================================================== */}

        {isScene3 && (
          <motion.div
            key="scene-3"
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(12px)",
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(12px)",
              scale: 1.05,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
  flex
  w-full
  max-w-7xl
  flex-col
  items-center
  justify-center

  space-y-5

  sm:space-y-6
"
          >

            <span className="text-[10px] uppercase tracking-[0.30em] text-[#E50914] sm:text-xs sm:tracking-[0.45em]">
              THE FINAL COUNTDOWN
            </span>

            <h2 className="max-w-6xl text-4xl font-black uppercase leading-none tracking-tight text-white
                           drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]
                           sm:text-7xl
                           md:text-8xl
                           lg:text-9xl">
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