"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

const techLabels = ["Node.js", "AWS", "OpenAI", "MongoDB", "Microservices"];

export function Introduction() {
  return (
    <section
      id="introduction"
      className="relative min-h-screen overflow-hidden bg-[#FAFAFA] text-[#050505] dark:bg-[#050505] dark:text-[#FAFAFA]"
    >
      {/* Ghost word — depth layer, intentionally behind portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease, delay: 0.4 }}
          className="font-semibold tracking-tighter leading-none whitespace-nowrap text-[28vw]
                     text-black/[0.03] dark:text-white/[0.07]"
        >
          SYSTEMS
        </motion.span>
      </div>

      {/* Portrait — absolutely positioned right side, tall, overlapping SYSTEMS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.3 }}
        className="group absolute right-0 lg:right-[4%] xl:right-[6%]
                   top-20 z-20
                   w-[140px] sm:w-[180px] lg:w-[215px]
                   h-[48vh] sm:h-[54vh]
                   overflow-hidden
                   border-l border-b border-neutral-200 dark:border-[#1F1F1F]"
      >
        <Image
          src="/images/dhiraj.jpg"
          alt="Dhiraj Kumar Vandrangi"
          fill
          priority
          className="object-cover object-[center_10%] saturate-[0.75]
                     transition-all duration-700 ease-out
                     group-hover:saturate-100 group-hover:scale-[1.03]"
        />
        {/* Subtle bottom fade so it bleeds into content below */}
        <div className="absolute inset-x-0 bottom-0 h-32
                        bg-gradient-to-t from-[#FAFAFA] dark:from-[#050505] to-transparent" />
        {/* Hover reveal */}
        <div className="absolute inset-0 flex flex-col justify-end p-4
                        bg-gradient-to-t from-black/75 via-black/10 to-transparent
                        opacity-0 translate-y-2
                        transition-all duration-500 ease-out
                        group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-[11px] font-medium text-white leading-snug">Senior Software Engineer</p>
          <p className="text-[11px] font-medium text-white leading-snug">Team Lead</p>
          <p className="text-[11px] font-mono text-[#D4A574] leading-snug mt-1">7+ Years</p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 lg:px-12 min-h-screen flex flex-col justify-between pt-28 pb-12">

        {/* ── TOP: Role label + Name ── */}
        <div className="max-w-[60%] lg:max-w-[55%]">
          {/* Quaternary — role label */}
          <motion.div {...fade(0.1)} className="flex items-center gap-2.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] shrink-0" />
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 dark:text-[#A1A1AA]">
              Senior Software Engineer / Team Lead
            </span>
          </motion.div>

          {/* Secondary — name */}
          <motion.h2
            {...fade(0.2)}
            className="font-bold uppercase tracking-tight leading-[1.0]
                       text-[clamp(1.6rem,4vw,3rem)]"
          >
            Dhiraj Kumar
            <br />
            Vandrangi
          </motion.h2>
        </div>

        {/* ── CENTRE: Main headline — dominates viewport ── */}
        <div className="py-10 lg:py-14 max-w-[75%] lg:max-w-[68%]">
          <motion.h1
            {...fade(0.38)}
            className="font-semibold tracking-tighter leading-[0.87]
                       text-[clamp(2.75rem,8.5vw,7.5rem)]"
          >
            Architecting
            <br />
            Scalable
            <br />
            Backend Systems<span className="text-[#D4A574]">.</span>
          </motion.h1>
        </div>

        {/* ── BOTTOM: Description + role + tech ── */}
        <div>
          <motion.div
            {...fade(0.55)}
            className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-20 items-end"
          >
            {/* Tertiary — description */}
            <div className="max-w-sm">
              <p className="text-base leading-relaxed text-neutral-500 dark:text-[#A1A1AA]">
                Senior Software Engineer and Team Lead specializing in cloud-native
                architectures, AI-powered platforms, distributed systems, and
                enterprise integrations.
              </p>
              <div className="mt-7 flex items-center gap-7 flex-wrap">
                <button
                  onClick={() => document.querySelector("#architecture")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm font-medium border-b border-current pb-0.5
                             hover:text-[#D4A574] hover:border-[#D4A574] transition-colors duration-200"
                >
                  View Architecture Case Studies ↓
                </button>
                <a
                  href="/resume/Dhiraj_resume.pdf"
                  download
                  className="text-sm text-neutral-400 dark:text-[#A1A1AA]
                             hover:text-[#050505] dark:hover:text-[#FAFAFA] transition-colors duration-200"
                >
                  Download Resume ↗
                </a>
              </div>
            </div>

            {/* Quaternary — role block */}
            <div className="flex flex-col gap-1 font-mono text-xs text-neutral-400 dark:text-[#A1A1AA] lg:text-right shrink-0">
              <span className="text-neutral-600 dark:text-neutral-300">
                Senior Software Engineer / Team Lead
              </span>
              <span>Kairos Technologies Inc.</span>
              <span>2018 — Present</span>
            </div>
          </motion.div>

          {/* Quaternary — tech labels */}
          <motion.div
            {...fade(0.7)}
            className="mt-10 pt-6 border-t border-neutral-200 dark:border-[#1F1F1F]
                       flex items-center justify-between gap-6"
          >
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {techLabels.map((label, i) => (
                <span key={label} className="flex items-center gap-5">
                  <span className="text-xs font-mono text-neutral-400 dark:text-[#A1A1AA]">
                    {label}
                  </span>
                  {i < techLabels.length - 1 && (
                    <span className="text-neutral-200 dark:text-[#1F1F1F] hidden sm:inline">
                      /
                    </span>
                  )}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#impact")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll down"
              className="text-neutral-300 dark:text-neutral-600
                         hover:text-[#D4A574] dark:hover:text-[#D4A574]
                         transition-colors shrink-0"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
