"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ease = [0.22, 1, 0.36, 1] as const;

const statements = [
  { title: "Technical Leadership", line: "Owning architecture and delivery end-to-end since 2018." },
  { title: "Code Reviews", line: "Every review a teaching moment — not a gate." },
  { title: "Mentorship", line: "Helping engineers move from tasks to ownership." },
  { title: "Architecture Decisions", line: "Trading off consistency, performance, and cost in production." },
  { title: "Production Ownership", line: "On-call, incident response, and post-mortems as a discipline." },
  { title: "Agile Delivery", line: "Sprint planning and backlog ownership that ships." },
  { title: "Cross-Functional Collaboration", line: "Translating engineering constraints for product and clients." },
];

export function Leadership() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="leadership" className="divider py-28 lg:py-40" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">05 — Leadership</span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black dark:text-white max-w-3xl leading-tight">
            Great engineering leadership is what makes consistent delivery possible.
          </h2>
        </motion.div>

        <div className="mt-20 lg:mt-28 space-y-0">
          {statements.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group py-8 lg:py-10 border-b border-neutral-200 dark:border-neutral-800 first:border-t grid lg:grid-cols-[1fr_auto] gap-3 lg:gap-12 items-baseline"
            >
              <h3 className="font-semibold tracking-tighter leading-none text-[clamp(2rem,5.5vw,4rem)] text-black dark:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 lg:text-right max-w-sm leading-snug">
                {s.line}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
