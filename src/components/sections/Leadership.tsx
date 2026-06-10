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
    <section id="leadership" className="divider py-20 lg:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">06 — Leadership</span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black dark:text-white max-w-3xl leading-tight">
            Great engineering leadership is what makes consistent delivery possible.
          </h2>
        </motion.div>

        <div className="mt-14 lg:mt-20 grid sm:grid-cols-2 gap-x-12 lg:gap-x-20">
          {statements.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="py-6 border-b border-neutral-200 dark:border-neutral-800"
            >
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black dark:text-white mb-1.5">
                {s.title}
              </h3>
              <p className="text-base text-neutral-500 dark:text-neutral-400 leading-snug">
                {s.line}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
