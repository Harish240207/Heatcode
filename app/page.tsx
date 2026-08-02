"use client";

import { motion } from "framer-motion";
import { CanvasPlayer } from "@/components/Canvas/CanvasPlayer";
import { CTAOverlay } from "@/components/Overlay/CTAOverlay";
import { HeroOverlay } from "@/components/Overlay/HeroOverlay";
import { PlaybackController } from "@/components/Playback/PlaybackController";
import { LoadingScreen } from "@/components/UI/LoadingScreen";
import { useFrameLoader } from "@/hooks/useFrameLoader";
import { usePlayback } from "@/hooks/usePlayback";

export default function Home() {
  const { percentage, isStage2Ready } = useFrameLoader();

  const {
    currentFrame,
    isPlaying,
    isEnded,
    isReplaying,
    play,
  } = usePlayback(isStage2Ready);

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

      {/* Top Branding */}

      <div className="pointer-events-none fixed left-8 top-8 z-30">

        <p className="text-xs uppercase tracking-[0.45em] text-[#E50914]">
          FODSE × SVCE
        </p>

        <h1 className="mt-2 text-3xl font-black tracking-tight">
          HEATCODE 2026
        </h1>

      </div>

      {/* Event Date */}

      <div className="pointer-events-none fixed right-8 top-8 z-30 text-right">

        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          EVENT DATE
        </p>

        <p className="mt-2 text-lg font-semibold">
          8 Aug 2026 • 9:00 AM
        </p>

        <p className="text-white/70">
          to
        </p>

        <p className="text-lg font-semibold">
          9 Aug 2026 • 6:00 PM
        </p>

      </div>

      {/* Bottom Event Pills */}

      <div className="pointer-events-none fixed bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-wrap items-center justify-center gap-3">

        {[
          "24 HOURS",
          "TEAMS OF 2",
          "KAGGLE",
          "MACHINE LEARNING",
        ].map((item) => (

          <div
            key={item}
            className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-xl"
          >
            {item}
          </div>

        ))}

      </div>

      {/* Story Overlays */}

      <HeroOverlay currentFrame={currentFrame} />

      <CTAOverlay currentFrame={currentFrame} />

    </main>
  );
}