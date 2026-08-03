"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Building2,
  Send,
  Instagram,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

import { michroma, manrope } from "@/app/fonts";
import { CONTACT_DETAILS } from "@/constants/landing";
import { SpiderWebBackground } from "@/components/UI/SpiderWebBackground";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        bg-[#030305]
        py-24
        sm:py-32
      "
    >
      {/* Register Anchor */}
      <div
        id="register"
        className="absolute left-0 top-0"
      />

      <SpiderWebBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">

        {/* ====================================================== */}
        {/* SECTION HEADER */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            mb-16
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-20
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />

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
              [ 05 // CONNECT ]
            </span>

            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
          </div>

          <h2
            className={`
              ${michroma.className}
              text-3xl
              font-black
              uppercase
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            `}
          >
            GET IN TOUCH
            <br />

            <span className="bg-gradient-to-r from-white via-white/90 to-[#E50914] bg-clip-text text-transparent">
              WITH THE ORGANIZERS
            </span>
          </h2>

          <p
            className={`
              ${manrope.className}
              mt-6
              max-w-3xl
              text-[16px]
              font-medium
              leading-8
              tracking-[0.01em]
              text-white/72
            `}
          >
            Whether you have questions regarding registration,
            competition guidelines, eligibility, or event logistics,
            our organizing committee is here to help. Reach out to us,
            and we'll be happy to assist you throughout your HeatCode
            2026 journey.
          </p>
        </motion.div>

        {/* ====================================================== */}
        {/* MAIN GRID */}
        {/* ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            lg:grid-cols-12
            lg:gap-16
          "
        >

          {/* ====================================================== */}
          {/* LEFT CONTACT DETAILS */}
          {/* ====================================================== */}
          {/* ====================================================== */}
{/* LEFT CONTACT DETAILS */}
{/* ====================================================== */}

<motion.div
  initial={{
    opacity: 0,
    x: -30,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    margin: "-80px",
  }}
  transition={{
    duration: 0.65,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="lg:col-span-5"
>
  <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#07131F]/90 via-[#05080E]/90 to-[#030305]/95 p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

    <h3
      className={`
        ${michroma.className}
        mb-8
        border-b
        border-white/10
        pb-5
        text-xl
        font-bold
        uppercase
        tracking-wider
        text-white
      `}
    >
      CONTACT DETAILS
    </h3>

    <div className="space-y-8">

      {/* ORGANIZER */}

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914]">
          <Building2 className="h-5 w-5" />
        </div>

        <div>

          <p
            className={`
              ${manrope.className}
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white/50
            `}
          >
            ORGANIZER
          </p>

          <p
            className={`
              ${manrope.className}
              mt-1
              text-[16px]
              font-semibold
              leading-7
              text-white
            `}
          >
            {CONTACT_DETAILS.organizer}
          </p>

          <p
            className={`
              ${manrope.className}
              text-[15px]
              leading-7
              text-white/65
            `}
          >
            {CONTACT_DETAILS.institution}
          </p>

        </div>

      </div>

      {/* EMAIL */}

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914]">
          <Mail className="h-5 w-5" />
        </div>

        <div>

          <p
            className={`
              ${manrope.className}
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white/50
            `}
          >
            OFFICIAL EMAIL
          </p>

          <a
            href={`mailto:${CONTACT_DETAILS.email}`}
            className={`
              ${manrope.className}
              mt-1
              inline-block
              text-[16px]
              font-semibold
              leading-7
              text-white
              transition-colors
              hover:text-[#E50914]
            `}
          >
            {CONTACT_DETAILS.email}
          </a>

        </div>

      </div>

      {/* VENUE */}

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914]">
          <MapPin className="h-5 w-5" />
        </div>

        <div>

          <p
            className={`
              ${manrope.className}
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white/50
            `}
          >
            EVENT VENUE
          </p>

          <p
            className={`
              ${manrope.className}
              mt-1
              text-[16px]
              font-semibold
              leading-7
              text-white
            `}
          >
            {CONTACT_DETAILS.location}
          </p>

        </div>

      </div>

    </div>

    {/* SOCIAL */}

    <div className="mt-10 border-t border-white/10 pt-8">

      <p
        className={`
          ${manrope.className}
          mb-4
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.12em]
          text-white/50
        `}
      >
        CONNECT WITH US
      </p>

      <div className="flex gap-3">

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914] hover:text-white hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]"
        >
          <Instagram className="h-5 w-5" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914] hover:text-white hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]"
        >
          <Linkedin className="h-5 w-5" />
        </a>

      </div>

    </div>

  </div>

</motion.div>
{/* ====================================================== */}
{/* RIGHT CONTACT FORM */}
{/* ====================================================== */}

<motion.div
  initial={{
    opacity: 0,
    x: 30,
  }}
  whileInView={{
    opacity: 0.99,
    x: 0,
  }}
  viewport={{
    once: true,
    margin: "-80px",
  }}
  transition={{
    duration: 0.65,
    delay: 0.15,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="lg:col-span-7"
>
  <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#07131F]/90 via-[#05080E]/90 to-[#030305]/95 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

    <h3
      className={`
        ${michroma.className}
        text-xl
        font-bold
        uppercase
        tracking-wider
        text-white
        mb-2
      `}
    >
      SEND US A MESSAGE
    </h3>

    <p
      className={`
        ${manrope.className}
        mb-8
        text-[14px]
        uppercase
        tracking-[0.08em]
        text-white/55
      `}
    >
      We'll get back to you as soon as possible.
    </p>

    <form
      action="https://formsubmit.co/fodse@svce.ac.in"
      method="POST"
      className="space-y-6"
    >
      {/* FormSubmit Configuration */}

      <input
        type="hidden"
        name="_subject"
        value="New HeatCode 2026 Contact Form Submission"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />

      {/* Optional: Change after deployment */}
      <input
        type="hidden"
        name="_next"
        value="http://localhost:3000"
      />

      {/* Name */}

      <div>

        <label
          htmlFor="name"
          className={`
            ${manrope.className}
            mb-2
            block
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-white/70
          `}
        >
          Full Name
        </label>

        <input
          id="name"
          name="Name"
          type="text"
          required
          placeholder="Enter your full name"
          className={`
            ${manrope.className}
            w-full
            rounded-xl
            border
            border-white/15
            bg-white/[0.04]
            px-4
            py-3.5
            text-[15px]
            text-white
            placeholder:text-white/35
            backdrop-blur-md
            outline-none
            transition-all
            focus:border-[#E50914]
            focus:bg-white/[0.08]
            focus:shadow-[0_0_15px_rgba(229,9,20,0.25)]
          `}
        />

      </div>

      {/* Email */}

      <div>

        <label
          htmlFor="email"
          className={`
            ${manrope.className}
            mb-2
            block
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-white/70
          `}
        >
          Email Address
        </label>

        <input
          id="email"
          name="Email"
          type="email"
          required
          placeholder="Enter your email"
          className={`
            ${manrope.className}
            w-full
            rounded-xl
            border
            border-white/15
            bg-white/[0.04]
            px-4
            py-3.5
            text-[15px]
            text-white
            placeholder:text-white/35
            backdrop-blur-md
            outline-none
            transition-all
            focus:border-[#E50914]
            focus:bg-white/[0.08]
            focus:shadow-[0_0_15px_rgba(229,9,20,0.25)]
          `}
        />

      </div>

      {/* Message */}

      <div>

        <label
          htmlFor="message"
          className={`
            ${manrope.className}
            mb-2
            block
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-white/70
          `}
        >
          Message
        </label>

        <textarea
          id="message"
          name="Message"
          rows={5}
          required
          placeholder="Type your message..."
          className={`
            ${manrope.className}
            w-full
            resize-none
            rounded-xl
            border
            border-white/15
            bg-white/[0.04]
            px-4
            py-3.5
            text-[15px]
            text-white
            placeholder:text-white/35
            backdrop-blur-md
            outline-none
            transition-all
            focus:border-[#E50914]
            focus:bg-white/[0.08]
            focus:shadow-[0_0_15px_rgba(229,9,20,0.25)]
          `}
        />

      </div>

      {/* Submit Button */}

      <button
        type="submit"
        className={`
          ${michroma.className}
          group
          relative
          w-full
          overflow-hidden
          rounded-xl
          border
          border-[#E50914]/40
          bg-gradient-to-r
          from-[#E50914]
          to-[#b80610]
          py-4
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-white
          transition-all
          duration-300
          hover:scale-[1.01]
          hover:shadow-[0_0_30px_rgba(229,9,20,0.45)]
          active:scale-[0.99]
        `}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          SEND MESSAGE
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>

        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>

    </form>

  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}