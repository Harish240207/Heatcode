"use client";

import { motion } from "framer-motion";
import { CanvasPlayer } from "@/components/Canvas/CanvasPlayer";
import { CTAOverlay } from "@/components/Overlay/CTAOverlay";
import { HeroOverlay } from "@/components/Overlay/HeroOverlay";
import { PlaybackController } from "@/components/Playback/PlaybackController";
import { LoadingScreen } from "@/components/UI/LoadingScreen";
import { useFrameLoader } from "@/hooks/useFrameLoader";
import { usePlayback } from "@/hooks/usePlayback";
import { SCENES } from "@/constants/frames";

export default function Home() {
  const { percentage, isStage2Ready } = useFrameLoader();

  const {
    currentFrame,
    isPlaying,
    isEnded,
    isReplaying,
    play,
  } = usePlayback(isStage2Ready);

  const isScene4 =
    currentFrame >= SCENES.SCENE_4.startFrame &&
    currentFrame <= SCENES.SCENE_4.endFrame;

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#030305] text-white select-none">

      {/* Loading */}

      <LoadingScreen
        percentage={percentage}
        isStage2Ready={isStage2Ready}
      />

      {/* Playback */}

      <PlaybackController
        isStage2Ready={isStage2Ready}
        isPlaying={isPlaying}
        isEnded={isEnded}
        onAutoStart={play}
      />

      {/* Replay Fade */}

      {isReplaying && (
        <motion.div
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="pointer-events-none fixed inset-0 z-40 bg-black"
        />
      )}

      {/* Canvas */}

      <CanvasPlayer currentFrame={currentFrame} />

      {/* ========================================================= */}
      {/* TOP LEFT BRANDING */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          top: isScene4 ? "6.8rem" : "1.5rem",
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="
  pointer-events-none
  fixed
  left-5
  right-5
  z-30

  top-[78px]

  flex
  flex-col

  sm:left-8
  sm:right-auto
  sm:block
"
      >

        <p className="
text-[11px]
uppercase
tracking-[0.28em]
text-[#E50914]

sm:text-xs
sm:tracking-[0.45em]
">
          FODSE × SVCE
        </p>

        <h1
className="
mt-1
text-[34px]
font-black
leading-none
tracking-tight

sm:mt-2
sm:text-3xl
"
>
          HEATCODE 2026
        </h1>

      </motion.div>

      {/* ========================================================= */}
      {/* TOP RIGHT EVENT DETAILS */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          top: isScene4 ? "6.8rem" : "1.5rem",
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="
pointer-events-none
fixed

left-5
right-5

top-[78px]

z-30

text-right

sm:left-auto
sm:right-8
"
      >

        <p
className="
text-[11px]
uppercase
tracking-[0.22em]
text-white/60

sm:text-xs
sm:tracking-[0.35em]
"
>
          EVENT DATE
        </p>

        <p
className="
mt-1
text-[17px]
font-bold
leading-tight

sm:mt-2
sm:text-lg
"
>
          8 Aug 2026 • 9:00 AM
        </p>

        <p className="text-xs text-white/70 sm:text-base">
          to
        </p>

        <p
className="
text-[17px]
font-bold
leading-tight

sm:text-lg
"
>
          9 Aug 2026 • 6:00 PM
        </p>

      </motion.div>

      {/* ========================================================= */}
      {/* BOTTOM EVENT PILLS (ONLY BEFORE SCENE 4) */}
      {/* ========================================================= */}

      {!isScene4 && (
        <div
          className="
            pointer-events-none
            fixed
            bottom-4
            left-1/2
            z-30
            flex
            w-[92%]
            max-w-5xl
            -translate-x-1/2
            flex-wrap
            items-center
            justify-center
            gap-2
            sm:bottom-8
            sm:w-auto
            sm:gap-3
          "
        >
          {[
            "24 HOURS",
            "TEAMS OF 2",
            "KAGGLE",
            "MACHINE LEARNING",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border
                border-white/15
                bg-white/10
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                backdrop-blur-xl
                sm:px-5
                sm:py-2
                sm:text-xs
                sm:tracking-[0.25em]
              "
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Hero Overlay */}

      <HeroOverlay currentFrame={currentFrame} />

      {/* Scene 4 Navbar + CTA */}

      <CTAOverlay currentFrame={currentFrame} />

    </main>
  );
}