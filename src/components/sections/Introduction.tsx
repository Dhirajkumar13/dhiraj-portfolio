"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

// Subtle staggered reveal
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
      {/* Oversized ghost word — depth layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.3 }}
          className="font-semibold tracking-tighter leading-none whitespace-nowrap text-[26vw] text-black/[0.04] dark:text-white/[0.04]"
        >
          SYSTEMS
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 lg:px-12 min-h-screen flex flex-col justify-between pt-28 pb-10">

        {/* TOP — name + portrait */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <motion.div
              {...fade(0.1)}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] inline-block" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-[#A1A1AA]">
                Senior Software Engineer / Team Lead
              </span>
            </motion.div>

            <motion.h2
              {...fade(0.2)}
              className="text-[clamp(1.25rem,3.2vw,2.4rem)] font-bold uppercase tracking-tight leading-[1.05]"
            >
              Dhiraj Kumar
              <br />
              Vandrangi
            </motion.h2>
          </div>

          {/* Portrait — secondary, monochrome, hover reveals role */}
          <motion.div
            {...fade(0.35)}
            className="group relative shrink-0 w-[150px] sm:w-[190px] aspect-[4/5] overflow-hidden border border-neutral-200 dark:border-[#1F1F1F]"
          >
            <Image
              src="/images/dhiraj.jpg"
              alt="Dhiraj Kumar Vandrangi"
              fill
              priority
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-[11px] font-medium text-white leading-tight">Senior Software Engineer</p>
              <p className="text-[11px] font-medium text-white leading-tight">Team Lead</p>
              <p className="text-[11px] font-mono text-[#D4A574] leading-tight mt-1">7+ Years Experience</p>
            </div>
          </motion.div>
        </div>

        {/* CENTER — giant headline */}
        <div className="py-8">
          <motion.h1
            {...fade(0.4)}
            className="font-semibold tracking-tighter leading-[0.82] text-[clamp(3.25rem,14vw,12rem)]"
          >
            Backend
            <br />
            <span className="inline-flex items-baseline gap-[0.1em]">
              Architect
              <span className="text-[#D4A574] text-[0.18em] font-mono tracking-normal align-super hidden sm:inline">
                ®
              </span>
            </span>
          </motion.h1>
        </div>

        {/* BOTTOM — subtext, role, tech */}
        <div>
          <motion.div
            {...fade(0.55)}
            className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end"
          >
            <div className="max-w-xl">
              <p className="text-base sm:text-lg text-neutral-600 dark:text-[#A1A1AA] leading-relaxed">
                Designing scalable backend systems, AI-powered platforms and cloud-native
                architectures for enterprise organizations.
              </p>
              <div className="mt-6 flex items-center gap-6 flex-wrap">
                <button
                  onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm font-medium border-b border-current pb-0.5 hover:text-[#D4A574] hover:border-[#D4A574] transition-colors duration-200"
                >
                  View Work ↓
                </button>
                <a
                  href="/resume/Dhiraj_resume.pdf"
                  download
                  className="text-sm text-neutral-500 dark:text-[#A1A1AA] hover:text-[#050505] dark:hover:text-[#FAFAFA] transition-colors duration-200"
                >
                  Download Resume ↗
                </a>
              </div>
            </div>

            {/* Current role — mono block */}
            <div className="flex flex-col gap-1 text-xs font-mono text-neutral-400 dark:text-[#A1A1AA] lg:text-right shrink-0">
              <span className="text-neutral-600 dark:text-[#FAFAFA]">Senior Software Engineer / Team Lead</span>
              <span>Kairos Technologies Inc.</span>
              <span>2018 — Present</span>
            </div>
          </motion.div>

          {/* Tech labels — minimal, hairline-separated */}
          <motion.div
            {...fade(0.7)}
            className="mt-10 pt-6 border-t border-neutral-200 dark:border-[#1F1F1F] flex items-center justify-between gap-6"
          >
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {techLabels.map((label, i) => (
                <span key={label} className="flex items-center gap-5">
                  <span className="text-xs font-mono text-neutral-500 dark:text-[#A1A1AA]">
                    {label}
                  </span>
                  {i < techLabels.length - 1 && (
                    <span className="text-neutral-300 dark:text-[#1F1F1F] hidden sm:inline">/</span>
                  )}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#impact")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll down"
              className="text-neutral-300 dark:text-[#A1A1AA] hover:text-[#D4A574] dark:hover:text-[#D4A574] transition-colors shrink-0"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
