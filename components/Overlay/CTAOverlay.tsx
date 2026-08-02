"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { michroma } from "@/app/fonts";
import { SCENES } from "@/constants/frames";

interface CTAOverlayProps {
  currentFrame: number;
}

const NAV_ITEMS = [
  "About",
  "Why Participate",
  "Schedule",
  "Rewards",
];

export function CTAOverlay({
  currentFrame,
}: CTAOverlayProps) {

  const [mobileOpen, setMobileOpen] = useState(false);

  const isScene4 =
    currentFrame >= SCENES.SCENE_4.startFrame &&
    currentFrame <= SCENES.SCENE_4.endFrame;

  return (
    <>
      {/* ====================================================== */}
      {/* SPIDER-MAN NAVBAR */}
      {/* ====================================================== */}

      <AnimatePresence>

        {isScene4 && (

          <>
            <motion.header
              initial={{
                opacity: 0,
                y: -24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -24,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                top-0
                left-0
                right-0
                z-[60]
                pointer-events-auto

                border-b
                border-[#E50914]/15

                bg-gradient-to-r
                from-[#08131F]/95
                via-[#050608]/95
                to-[#08131F]/95

                backdrop-blur-2xl

                shadow-[0_6px_28px_rgba(0,0,0,.55)]
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-[54px]
                  w-full
                  max-w-[1800px]
                  items-center
                  justify-between

                  px-4
                  sm:px-5
                  lg:px-10
                  xl:px-14
                "
              >                {/* ================================================= */}
                {/* DESKTOP NAVBAR */}
                {/* ================================================= */}

                <div className="hidden w-full items-center lg:flex">

                  {/* ===================== */}
                  {/* LEFT : LOGO */}
                  {/* ===================== */}

                  <div className="flex shrink-0 items-center">

                    <Image
                      src="/fodse-logo.png"
                      alt="FODSE Logo"
                      width={64}
                      height={64}
                      priority
                      className="
                        h-11
                        w-auto
                        object-contain
                        transition-all
                        duration-300
                        hover:scale-105
                        drop-shadow-[0_0_16px_rgba(255,255,255,.18)]
                      "
                    />

                  </div>

                  {/* ===================== */}
                  {/* RIGHT SECTION */}
                  {/* ===================== */}

                  <div className="ml-auto flex items-center gap-9">

                    {/* Navigation */}

                    <nav
                      className={`${michroma.className} flex items-center gap-8`}
                    >

                      {NAV_ITEMS.map((item) => (

                        <button
                          key={item}
                          className={`
                            ${michroma.className}
                            group
                            relative
                            text-[13px]
                            uppercase
                            tracking-[0.05em]
                            text-white/85
                            transition-all
                            duration-300
                            hover:text-white
                          `}
                        >

                          {item}

                          <span
                            className="
                              absolute
                              -bottom-[7px]
                              left-0
                              h-[2px]
                              w-0
                              rounded-full
                              bg-gradient-to-r
                              from-[#E50914]
                              via-[#ff4b57]
                              to-[#E50914]
                              transition-all
                              duration-300
                              group-hover:w-full
                            "
                          />

                        </button>

                      ))}

                    </nav>

                    {/* Register Button */}

                    <button
                      className={`
                        ${michroma.className}
                        group
                        relative
                        overflow-hidden
                        rounded-md

                        border
                        border-[#E50914]/35

                        bg-gradient-to-r
                        from-[#E50914]
                        to-[#c40812]

                        px-5
                        py-[8px]

                        text-[12px]
                        uppercase
                        tracking-[0.05em]

                        text-white

                        transition-all
                        duration-300

                        hover:scale-[1.03]
                        hover:shadow-[0_0_22px_rgba(229,9,20,.45)]
                      `}
                    >

                      <span className="relative z-10">
                        Register Now
                      </span>

                      <span
                        className="
                          absolute
                          inset-0
                          -translate-x-full
                          bg-gradient-to-r
                          from-transparent
                          via-white/30
                          to-transparent
                          transition-transform
                          duration-700
                          group-hover:translate-x-full
                        "
                      />

                    </button>

                  </div>

                </div>                {/* ================================================= */}
                {/* MOBILE NAVBAR */}
                {/* ================================================= */}

                <div className="flex w-full items-center justify-between lg:hidden">

                  {/* Logo */}

                  <Image
                    src="/fodse-logo.png"
                    alt="FODSE Logo"
                    width={48}
                    height={48}
                    priority
                    className="
                      h-10
                      w-auto
                      object-contain
                      drop-shadow-[0_0_12px_rgba(255,255,255,.15)]
                    "
                  />

                  {/* Hamburger */}

                  <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-md

                      border
                      border-white/10

                      bg-white/5

                      text-white

                      transition-all
                      duration-300

                      hover:bg-white/10
                      active:scale-95
                    "
                  >

                    <motion.div
                      animate={{
                        rotate: mobileOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      {mobileOpen ? (
                        <X size={20} />
                      ) : (
                        <Menu size={20} />
                      )}
                    </motion.div>

                  </button>

                </div>

              </div>

            </motion.header>

            {/* ================================================= */}
            {/* MOBILE DROPDOWN */}
            {/* ================================================= */}

            <AnimatePresence>

              {mobileOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.28,
                  }}
                  className="
                    fixed
                    top-[54px]
                    left-0
                    right-0

                    z-[55]

                    overflow-hidden

                    border-b
                    border-[#E50914]/15

                    bg-[#08111B]/98

                    backdrop-blur-2xl

                    shadow-[0_12px_40px_rgba(0,0,0,.45)]

                    lg:hidden
                  "
                >

                  <div className="px-6 py-4">

                    <nav className="flex flex-col">

                      {NAV_ITEMS.map((item, index) => (

                        <motion.button
                          key={item}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                          onClick={() => setMobileOpen(false)}
                          className={`
                            ${michroma.className}

                            border-b
                            border-white/5

                            py-4

                            text-left

                            text-[13px]
                            uppercase
                            tracking-[0.05em]

                            text-white

                            transition-all
                            duration-300

                            hover:pl-2
                            hover:text-[#ff5555]
                          `}
                        >
                          {item}
                        </motion.button>

                      ))}

                    </nav>

                    <button
                      className={`
                        ${michroma.className}

                        mt-5

                        w-full

                        rounded-md

                        bg-gradient-to-r
                        from-[#E50914]
                        to-[#c40812]

                        py-3

                        text-[13px]
                        uppercase
                        tracking-[0.05em]

                        text-white

                        transition-all
                        duration-300

                        hover:shadow-[0_0_18px_rgba(229,9,20,.45)]
                      `}
                    >
                      Register Now
                    </button>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </>

        )}

      </AnimatePresence>      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-20

          flex
          items-center
          justify-center

          px-6
          text-center
        "
      >

        <AnimatePresence mode="wait">

          {isScene4 && (

            <motion.div
              key="scene4-hero"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
                filter: "blur(14px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: 35,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                flex
                w-full
                max-w-7xl
                flex-col
                items-center
                justify-center

                pt-32
                sm:pt-28
                lg:pt-12
              "
            >

              {/* Registration */}

              <motion.span
                initial={{
                  opacity: 0,
                  letterSpacing: "0.2em",
                }}
                animate={{
                  opacity: 1,
                  letterSpacing: "0.55em",
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                }}
                className="
                  mb-5

                  text-[10px]
                  font-semibold
                  uppercase

                  tracking-[0.55em]

                  text-[#E50914]

                  sm:text-[11px]
                "
              >
                REGISTRATION OPEN
              </motion.span>

              {/* Heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                }}
                className="
                  select-none

                  text-[3rem]
                  font-black
                  uppercase

                  leading-[0.88]
                  tracking-tight

                  text-white

                  drop-shadow-[0_18px_60px_rgba(0,0,0,.95)]

                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-9xl
                "
              >
                CODE.
                <br />
                COMPETE.
                <br />
                CONQUER.
              </motion.h2>

              {/* Spider Accent */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 170,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                className="
                  mt-9

                  h-[2px]

                  rounded-full

                  bg-gradient-to-r
                  from-transparent
                  via-[#E50914]
                  to-transparent

                  shadow-[0_0_18px_rgba(229,9,20,.55)]
                "
              />

            </motion.div>

          )}

        </AnimatePresence>

      </div>    </>
  );
}