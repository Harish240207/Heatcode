"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
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

  const isScene4 =
    currentFrame >= SCENES.SCENE_4.startFrame &&
    currentFrame <= SCENES.SCENE_4.endFrame;

  return (
    <>
      {/* ====================================================== */}
      {/* SPIDERMAN NAVBAR */}
      {/* ====================================================== */}

      <AnimatePresence>

        {isScene4 && (

          <motion.header
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.65,
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
              border-red-600/20
              bg-gradient-to-r
              from-[#07101A]/95
              via-[#050608]/98
              to-[#07101A]/95
              backdrop-blur-2xl
              shadow-[0_10px_45px_rgba(0,0,0,.65)]
            "
          >

            <div
              className="
                mx-auto
                flex
                h-16
                max-w-[1650px]
                items-center
                px-8
                xl:px-12
              "
            >

              {/* ================================================= */}
              {/* DESKTOP */}
              {/* ================================================= */}

              <div className="hidden w-full items-center lg:flex">

                {/* ================= LEFT LOGO ================= */}

                <div className="flex shrink-0 items-center">

                  <Image
                    src="/fodse-logo.png"
                    alt="FODSE Logo"
                    width={72}
                    height={72}
                    priority
                    className="
                      h-14
                      w-auto
                      object-contain
                      transition-all
                      duration-300
                      hover:scale-105
                      drop-shadow-[0_0_18px_rgba(255,255,255,.18)]
                    "
                  />

                </div>

                {/* ================= RIGHT SIDE ================= */}

                <div className="ml-auto flex items-center gap-12">

                  <nav className={`${michroma.className} flex items-center gap-10`}>

                    {NAV_ITEMS.map((item) => (

                      <button
                        key={item}
                        className={`
  ${michroma.className}
  group
  relative
  text-[15px]
  uppercase
  tracking-[0.03em]
  text-white
  transition-all
  duration-300
  hover:text-[#ff4040]
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
  rounded-xl
  border
  border-[#E50914]/40
  bg-white
  px-7
  py-2.5
  text-[14px]
  uppercase
  tracking-[0.04em]
  text-black
  transition-all
  duration-300
  hover:bg-[#E50914]
  hover:text-white
  hover:shadow-[0_0_25px_rgba(229,9,20,.45)]
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
                  width={52}
                  height={52}
                  className="h-11 w-auto object-contain"
                />

                <button
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/10
                    text-white
                  "
                >
                  <Menu size={20} />
                </button>

              </div>

            </div>

          </motion.header>

        )}

      </AnimatePresence>

      {/* ====================================================== */}
      {/* HERO SECTION CONTINUES IN PART 2 */}
      {/* ====================================================== */}
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
                scale: 0.96,
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
                pt-12
              "
            >

              {/* Registration */}

              <span
                className="
                  mb-7
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

              {/* Decorative Spider-Man Accent */}

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