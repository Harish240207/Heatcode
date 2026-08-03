"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Brain,
  Trophy,
  Users,
  TrendingUp,
  Database,
  Coins,
} from "lucide-react";
import { michroma } from "@/app/fonts";
import { ABOUT_METRICS } from "@/constants/landing";
import { SpiderWebBackground } from "@/components/UI/SpiderWebBackground";

const ICON_MAP = {
  Clock,
  Brain,
  Trophy,
  Users,
  TrendingUp,
  Database,
  Coins,
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#030305]
        py-24
        sm:py-32
        flex
        items-center
      "
    >
      <SpiderWebBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">

          {/* ========================================================= */}
          {/* LEFT CONTENT */}
          {/* ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6 flex flex-col"
          >

            {/* Section Label */}

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-[#E50914] shadow-[0_0_12px_#E50914]" />

              <span
                className={`
                  ${michroma.className}
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.45em]
                  text-[#E50914]
                `}
              >
                [ 01 // ABOUT HEATCODE ]
              </span>

            </div>

            {/* Heading */}

            <h2
              className={`
                ${michroma.className}
                text-3xl
                font-black
                uppercase
                leading-[1.08]
                tracking-tight
                text-white

                sm:text-4xl
                md:text-5xl
              `}
            >
              WHERE DATA
              <br />

              <span className="bg-gradient-to-r from-white via-white to-[#E50914] bg-clip-text text-transparent">
                MEETS INTELLIGENCE
              </span>

            </h2>

            {/* Accent Line */}

            <div
  className="
    mt-8
    mb-2
    h-[2px]
    w-28
    rounded-full
    bg-gradient-to-r
    from-[#E50914]
    via-white/80
    to-transparent
    shadow-[0_0_22px_rgba(229,9,20,.55)]
  "
/>

            {/* Paragraph 1 */}

            <p
  className="
    mt-8
    max-w-[760px]
    text-[17px]
    font-[350]
    leading-[2.05]
    tracking-[0.015em]
    text-white/78

    sm:text-[18px]
    lg:text-[19px]
  "
>
  <span className="font-semibold text-white">
    HeatCode 2026
  </span>{" "}
  is an{" "}
<span className="font-medium text-[#E50914]">
  online Machine Learning challenge  
</span>{" "}
    organized by the{" "}
  <span className="font-semibold text-white">
    Forum of Data Science Engineers (FODSE)
  </span>
  , Artificial Intelligence and Data Science, Department of Computer Science & Engineering,
  Sri Venkateswara College of Engineering.

  The competition brings together students from
  Computer Science,
  Artificial Intelligence & Data Science,
  Information Technology,
  and allied disciplines to solve practical machine learning
  problems through innovation and teamwork.
</p>

            {/* Paragraph 2 */}

            <p
  className="
    mt-8
    max-w-[760px]
    text-[15px]
    font-[340]
    leading-[2]
    tracking-[0.02em]
    text-white/62

    sm:text-[16px]
    lg:text-[17px]
  "
>
  Participants collaborate in{" "}
  <span className="font-semibold text-white">
    teams of two
  </span>{" "}
  to design efficient machine learning models,
  analyze real-world datasets,
  engineer meaningful features,
  and develop intelligent solutions for
  challenging problem statements within the
  official HeatCode competition timeline.
</p>

            {/* Paragraph 3 */}

            <p
  className="
    mt-8
    max-w-[760px]
    text-[15px]
    font-[340]
    leading-[2]
    tracking-[0.02em]
    text-white/62

    sm:text-[16px]
    lg:text-[17px]
  "
>
  Beyond competition,
  HeatCode promotes analytical thinking,
  collaborative learning,
  technical excellence,
  and hands-on experience with modern
  Artificial Intelligence and Machine Learning
  workflows—encouraging participants to transform
  theoretical knowledge into practical solutions
  for real-world challenges.
</p>

            {/* Bottom Badges */}

            <div className="mt-12 flex flex-wrap items-center gap-4">

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">

                <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">

                  <span className="h-2 w-2 rounded-full bg-[#E50914] animate-pulse" />

                  ONLINE ML CHALLENGE

                </span>

              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">

                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">
                  TEAMS OF TWO
                </span>

              </div>

            </div>

          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT EVENT HIGHLIGHTS */}
          {/* (Continue in Chunk 2) */}
          {/* ========================================================= */}
                    {/* ========================================================= */}
          {/* RIGHT : EVENT HIGHLIGHTS */}
          {/* ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6"
          >

            <div
              className="
                group
                relative
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-b
                from-[#07131F]/90
                via-[#05080E]/90
                to-[#030305]/95
                p-6
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(0,0,0,.7)]

                sm:p-8
              "
            >

              {/* Spider Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-48
                  w-48
                  rounded-full
                  bg-[#E50914]/15
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#E50914]/25
                "
              />

              {/* Card Header */}

              <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">

                <div>

                  <h3
                    className={`
                      ${michroma.className}
                      text-xl
                      uppercase
                      tracking-wider
                      text-white
                    `}
                  >
                    EVENT HIGHLIGHTS
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.30em]
                      text-white/45
                    "
                  >
                    HEATCODE 2026 OVERVIEW
                  </p>

                </div>

                <div
                  className="
                    rounded-md
                    border
                    border-[#E50914]/30
                    bg-[#E50914]/10
                    px-3
                    py-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#E50914]
                  "
                >
                  FODSE × SVCE
                </div>

              </div>

              {/* Cards */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {ABOUT_METRICS.map((metric, idx) => {

                  const Icon = ICON_MAP[metric.iconName];

                  const isLast =
                    idx === ABOUT_METRICS.length - 1;

                  return (

                    <motion.div
                      key={metric.id}
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.05,
                      }}
                      className={`
                        group/item
                        relative
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#E50914]/40
                        hover:bg-white/[0.05]
                        hover:shadow-[0_8px_30px_rgba(229,9,20,.15)]

                        ${
                          isLast
                            ? "sm:col-span-2"
                            : ""
                        }
                      `}
                    >

                      <div className="flex items-start gap-4">

                        {/* Icon */}

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[#E50914]/30
                            bg-[#E50914]/10
                            text-[#E50914]
                            transition-all
                            duration-300

                            group-hover/item:scale-110
                            group-hover/item:border-[#E50914]
                            group-hover/item:bg-[#E50914]
                            group-hover/item:text-white
                          "
                        >

                          {Icon && (
                            <Icon className="h-5 w-5" />
                          )}

                        </div>

                        {/* Content */}

                        <div className="min-w-0 flex-1">

                          <span
                            className="
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.24em]
                              text-white/45
                            "
                          >
                            {metric.label}
                          </span>

                          <h4
                            className={`
                              ${michroma.className}
                              mt-1
                              text-base
                              text-white

                              sm:text-lg
                            `}
                          >
                            {metric.value}
                          </h4>

                          <p
                            className="
                              mt-2
                              text-xs
                              leading-6
                              text-white/60
                            "
                          >
                            {metric.description}
                          </p>

                        </div>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </div>

          </motion.div>
                  </div>
      </div>
    </section>
  );
}