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
      {/* NAVBAR */}
      {/* ====================================================== */}

      <AnimatePresence>

        {isScene4 && (

          <>
            <motion.header
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{
                duration: 0.6,
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
                border-red-500/20
                bg-gradient-to-r
                from-[#07131F]/95
                via-[#050608]/95
                to-[#07131F]/95
                backdrop-blur-xl
                shadow-[0_6px_30px_rgba(0,0,0,.55)]
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
                  px-5
                  lg:px-8
                  xl:px-10
                "
              >

                {/* ================================================= */}
                {/* DESKTOP */}
                {/* ================================================= */}

                <div className="hidden w-full items-center lg:flex">

                  {/* LEFT LOGO */}

                  <div className="flex shrink-0 items-center">

                    <Image
                      src="/fodse-logo.png"
                      alt="FODSE Logo"
                      width={58}
                      height={58}
                      priority
                      className="
                        h-11
                        w-auto
                        object-contain
                        transition-all
                        duration-300
                        hover:scale-105
                        drop-shadow-[0_0_14px_rgba(255,255,255,.18)]
                      "
                    />

                  </div>

                  {/* RIGHT */}

                  <div className="ml-auto flex items-center gap-8">

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
                            text-[14px]
                            uppercase
                            tracking-[0.04em]
                            text-white
                            transition-all
                            duration-300
                            hover:text-[#ff4545]
                          `}
                        >

                          {item}

                          <span
                            className="
                              absolute
                              -bottom-[6px]
                              left-0
                              h-[2px]
                              w-0
                              rounded-full
                              bg-[#E50914]
                              transition-all
                              duration-300
                              group-hover:w-full
                            "
                          />

                        </button>

                      ))}

                    </nav>

                    <button
                      className={`
                        ${michroma.className}
                        rounded-md
                        border
                        border-[#E50914]/40
                        bg-white
                        px-5
                        py-[9px]
                        text-[13px]
                        uppercase
                        tracking-[0.04em]
                        text-black
                        transition-all
                        duration-300
                        hover:bg-[#E50914]
                        hover:text-white
                        hover:shadow-[0_0_20px_rgba(229,9,20,.45)]
                      `}
                    >
                      Register Now
                    </button>

                  </div>

                </div>

                {/* ================================================= */}
                {/* MOBILE */}
                {/* ================================================= */}

                <div className="flex w-full items-center justify-between lg:hidden">

                  <Image
                    src="/fodse-logo.png"
                    alt="FODSE Logo"
                    width={46}
                    height={46}
                    priority
                    className="h-9 w-auto object-contain"
                  />

                  <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-white/10
                      bg-white/5
                      text-white
                      transition-all
                      hover:bg-white/10
                    "
                  >

                    {mobileOpen ? (
                      <X size={20} />
                    ) : (
                      <Menu size={20} />
                    )}

                  </button>

                </div>

              </div>

            </motion.header>

            {/* ================================================= */}
            {/* MOBILE MENU */}
            {/* ================================================= */}

            <AnimatePresence>

              {mobileOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    fixed
                    top-[54px]
                    left-0
                    right-0
                    z-[55]
                    border-b
                    border-red-500/20
                    bg-[#07101A]/98
                    backdrop-blur-xl
                    lg:hidden
                  "
                >

                  <div className="flex flex-col py-3">

                    {NAV_ITEMS.map((item) => (

                      <button
                        key={item}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          ${michroma.className}
                          border-b
                          border-white/5
                          py-4
                          text-center
                          text-[13px]
                          uppercase
                          tracking-[0.05em]
                          text-white
                          transition-colors
                          hover:bg-[#E50914]
                        `}
                      >
                        {item}
                      </button>

                    ))}

                    <div className="p-4">

                      <button
                        className={`
                          ${michroma.className}
                          w-full
                          rounded-md
                          bg-[#E50914]
                          py-3
                          text-[13px]
                          uppercase
                          text-white
                          transition-all
                          hover:bg-red-600
                        `}
                      >
                        Register Now
                      </button>

                    </div>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </>

        )}

      </AnimatePresence>
            {/* ====================================================== */}
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
                y: 55,
                scale: 0.95,
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
                scale: 0.97,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
                pt-10
              "
            >

              {/* Registration */}

              <span
                className="
                  mb-6
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.65em]
                  text-[#E50914]
                "
              >
                REGISTRATION OPEN
              </span>

              {/* Main Heading */}

              <h2
                className="
                  text-5xl
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
              </h2>

              {/* Spider-Man Accent */}

              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: 140,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.8,
                }}
                className="
                  mt-10
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

      </div>

    </>
  );
}