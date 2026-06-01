"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: "7+",
    label: "Years Experience",
    detail: "Building production systems",
  },
  {
    number: "50+",
    label: "APIs Shipped",
    detail: "REST, WebSocket, Serverless",
  },
  {
    number: "3",
    label: "Industry Awards",
    detail: "Including Excellence 2024",
  },
  {
    number: "4",
    label: "Enterprise Platforms",
    detail: "Financial, AI, Immigration",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Impact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="impact" className="divider py-28 lg:py-40">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="section-label">02 — Engineering Impact</span>
        </motion.div>

        {/* Stats grid — bordered cells */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-neutral-200 dark:border-neutral-800"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="border-r border-b border-neutral-200 dark:border-neutral-800 p-8 lg:p-14"
            >
              <p className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white leading-none">
                {stat.number}
              </p>
              <p className="mt-6 text-base font-medium text-black dark:text-white">
                {stat.label}
              </p>
              <p className="mt-1.5 text-sm text-neutral-400 dark:text-neutral-500">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Context line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-16 max-w-3xl text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed"
        >
          Since August 2018 at Kairos Technologies Inc., building systems that handle millions
          of transactions across fintech, immigration, and AI automation sectors. Specializing
          in backend architecture, cloud-native infrastructure, and generative AI integration.
        </motion.p>
      </div>
    </section>
  );
}
