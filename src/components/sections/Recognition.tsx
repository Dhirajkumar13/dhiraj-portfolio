"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ease = [0.22, 1, 0.36, 1] as const;

const awards = [
  {
    year: "2024",
    title: "Exemplary Executor",
    category: "Delivery Excellence Award",
    org: "Kairos Technologies Inc.",
    detail:
      "Recognized for exceptional delivery quality, architectural excellence, and consistent on-time execution across enterprise platforms.",
  },
  {
    year: "2022",
    title: "Best Employee of the Year",
    category: "Annual Recognition",
    org: "Kairos Technologies Inc.",
    detail:
      "Awarded for outstanding contributions to team leadership, technical mentorship, and sustained delivery of high-impact backend solutions.",
  },
  {
    year: "2019",
    title: "Achiever Award",
    category: "Junior Level Excellence",
    org: "Kairos Technologies Inc.",
    detail:
      "Recognized early in career for exceptional growth, proactive ownership, and significant contributions to core platform features.",
  },
];

export function Recognition() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="recognition" className="divider py-20 lg:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="section-label">08 — Recognition</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-neutral-200 dark:border-neutral-800">
          {awards.map((award, i) => (
            <motion.div
              key={award.year}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="border-r border-b border-neutral-200 dark:border-neutral-800 p-8 lg:p-10 flex flex-col"
            >
              <span className="text-sm font-mono text-neutral-400 dark:text-neutral-500">
                {award.year}
              </span>

              <h3 className="mt-8 text-2xl lg:text-3xl font-semibold tracking-tight text-black dark:text-white leading-tight">
                {award.title}
              </h3>

              <p className="mt-3 text-xs font-mono uppercase tracking-widest text-[#B8892A] dark:text-[#D4A574]">
                {award.category}
              </p>

              <p className="mt-5 text-base text-neutral-500 dark:text-neutral-300 leading-relaxed flex-1">
                {award.detail}
              </p>

              <p className="mt-8 text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {award.org}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-24 border-t border-neutral-200 dark:border-neutral-800 pt-16"
        >
          <p className="text-2xl sm:text-3xl text-neutral-400 dark:text-neutral-500 max-w-3xl leading-snug">
            &ldquo;Three awards across five years reflect a consistent approach: ownership over
            assignment, quality over velocity, and systems thinking over line-item delivery.&rdquo;
          </p>
          <p className="mt-4 text-xs font-mono text-neutral-300 dark:text-neutral-700">
            Dhiraj Kumar Vandrangi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
