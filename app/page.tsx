"use client";

import { motion } from "framer-motion";
import { CanvasPlayer } from "@/components/Canvas/CanvasPlayer";
import { CTAOverlay } from "@/components/Overlay/CTAOverlay";
import { HeroOverlay } from "@/components/Overlay/HeroOverlay";
import { PlaybackController } from "@/components/Playback/PlaybackController";
import { LoadingScreen } from "@/components/UI/LoadingScreen";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyParticipateSection } from "@/components/sections/WhyParticipateSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { RewardsSection } from "@/components/sections/RewardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
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
    <main className="relative min-h-screen w-full bg-[#030305] text-white select-none overflow-x-hidden">
      {/* ===================================================== */}
      {/* HERO SECTION (SCENES 1 - 4 FRAME ENGINE & OVERLAYS) */}
      {/* ===================================================== */}
      <section className="relative h-screen w-full shrink-0 overflow-hidden">
        <LoadingScreen
          percentage={percentage}
          isStage2Ready={isStage2Ready}
        />

        <PlaybackController
          isStage2Ready={isStage2Ready}
          isPlaying={isPlaying}
          isEnded={isEnded}
          onAutoStart={play}
        />

        {isReplaying && (
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="pointer-events-none absolute inset-0 z-40 bg-black"
          />
        )}

        <CanvasPlayer currentFrame={currentFrame} />

        {/* MOBILE TOP INFO */}
        <motion.div
          animate={{
            opacity: isScene4 ? 0 : 1,
            y: isScene4 ? -15 : 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            absolute
            top-5
            left-5
            right-5
            z-30

            flex
            items-start
            justify-between

            sm:hidden
          "
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#E50914]">
              FODSE × SVCE
            </p>
            <h1 className="mt-2 text-[30px] font-black leading-none">
              HEATCODE
              <br />
              2026
            </h1>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              EVENT DATE
            </p>
            <p className="mt-2 text-[13px] font-semibold">
              8 Aug 2026
            </p>
            <p className="text-[11px] text-white/60">
              9:00 AM
            </p>
            <p className="mt-2 text-[13px] font-semibold">
              9 Aug 2026
            </p>
            <p className="text-[11px] text-white/60">
              6:00 PM
            </p>
          </div>
        </motion.div>

        {/* DESKTOP LEFT */}
        <motion.div
          animate={{
            top: isScene4 ? "6.8rem" : "1.5rem",
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            pointer-events-none
            absolute
            left-8
            z-30

            hidden
            sm:block
          "
        >
          <p className="text-xs uppercase tracking-[0.45em] text-[#E50914]">
            FODSE × SVCE
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">
            HEATCODE 2026
          </h1>
        </motion.div>

        {/* DESKTOP RIGHT */}
        <motion.div
          animate={{
            top: isScene4 ? "6.8rem" : "1.5rem",
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            pointer-events-none
            absolute
            right-8
            z-30
            text-right

            hidden
            sm:block
          "
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            EVENT DATE
          </p>
          <p className="mt-2 text-lg font-semibold">
            8 Aug 2026 • 9:00 AM
          </p>
          <p className="text-sm text-white/60">
            to
          </p>
          <p className="mt-2 text-lg font-semibold">
            9 Aug 2026 • 6:00 PM
          </p>
        </motion.div>

        {/* BOTTOM PILLS */}
        {!isScene4 && (
          <div
            className="
              pointer-events-none
              absolute
              bottom-4
              left-1/2
              z-30

              flex
              -translate-x-1/2
              flex-wrap
              justify-center
              gap-2

              w-[92%]

              sm:w-auto
              sm:bottom-8
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
                  sm:text-xs
                "
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <HeroOverlay currentFrame={currentFrame} />
        <CTAOverlay currentFrame={currentFrame} />
      </section>

      {/* ===================================================== */}
      {/* EXTENDED LANDING PAGE SECTIONS (AFTER HERO / SCENE 4) */}
      {/* ===================================================== */}
      <AboutSection />
      <WhyParticipateSection />
      <ScheduleSection />
      <RewardsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}