"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    index: "01",
    title: "Backend Engineering",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "Event-Driven Architecture",
      "Socket.IO",
      "JWT",
    ],
  },
  {
    index: "02",
    title: "Cloud Architecture",
    skills: ["AWS Lambda", "S3", "SES", "CloudWatch", "CI/CD"],
  },
  {
    index: "03",
    title: "Database Engineering",
    skills: ["MongoDB", "Schema Design", "Indexing", "Performance Optimization"],
  },
  {
    index: "04",
    title: "AI Engineering",
    skills: [
      "OpenAI",
      "Azure OpenAI",
      "Prompt Engineering",
      "Semantic Search",
      "Conversational AI",
    ],
  },
  {
    index: "05",
    title: "Leadership",
    skills: ["Team Management", "Code Reviews", "Mentoring", "Agile Delivery"],
  },
];

export function Expertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="expertise" className="divider py-20 lg:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">05 — Expertise</span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight
                         text-black dark:text-white max-w-2xl leading-tight">
            Five engineering pillars.
          </h2>
        </motion.div>

        {/* Pillar grid — bordered cells */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
                        border-l border-t border-neutral-200 dark:border-neutral-800">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="border-r border-b border-neutral-200 dark:border-neutral-800 p-6 lg:p-7"
            >
              <p className="text-xs font-mono text-neutral-300 dark:text-neutral-600 mb-5">
                {pillar.index}
              </p>
              <h3 className="text-base font-semibold tracking-tight text-black dark:text-white mb-6 leading-snug">
                {pillar.title}
              </h3>
              <ul className="space-y-2.5">
                {pillar.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-neutral-500 dark:text-neutral-300 leading-snug"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
