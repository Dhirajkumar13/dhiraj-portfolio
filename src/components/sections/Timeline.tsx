"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ease = [0.22, 1, 0.36, 1] as const;

const entries = [
  {
    type: "work",
    org: "Kairos Technologies Inc.",
    role: "Senior Software Engineer / Team Lead",
    period: "August 2018 — Present",
    duration: "7+ years",
    location: "India",
    highlights: [
      "Designed scalable Node.js backends following microservices and MVC patterns",
      "Led API design for secure RESTful services with JWT authentication",
      "Integrated OpenAI and Azure OpenAI for chatbot and document AI features",
      "Implemented serverless architectures on AWS Lambda, S3, API Gateway",
      "Contributed to CI/CD pipelines with Bitbucket for automated deployments",
      "Managed production support, monitoring, and incident resolution",
      "Led code reviews, mentored developers, drove Agile/Scrum practices",
    ],
  },
  {
    type: "education",
    org: "GITAM University",
    role: "B.Tech — Computer Science Engineering",
    period: "2014 — 2018",
    duration: "4 years",
    location: "India",
    highlights: [
      "Bachelor of Technology in Computer Science",
      "Foundation in data structures, algorithms, and systems programming",
    ],
  },
];

export function Timeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="timeline" className="divider py-20 lg:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="section-label">07 — Experience</span>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[calc(0px)] top-2 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 hidden lg:block" />

          <div className="space-y-0">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.org}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                className="relative grid lg:grid-cols-[220px_1fr] gap-8 pb-20 last:pb-0"
              >
                {/* Left: time */}
                <div className="relative lg:text-right">
                  {/* Dot on timeline */}
                  <div className="hidden lg:block absolute right-[-9px] top-2 w-2.5 h-2.5 rounded-full bg-black dark:bg-white border-2 border-white dark:border-black" />

                  <p className="text-base font-mono text-neutral-400 dark:text-neutral-500 leading-relaxed">
                    {entry.period}
                  </p>
                  <p className="text-sm text-neutral-300 dark:text-neutral-700 mt-1">{entry.duration}</p>
                </div>

                {/* Right: content */}
                <div className="lg:pl-12">
                  <div className="flex items-baseline gap-3 flex-wrap mb-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
                      {entry.org}
                    </h3>
                    {entry.type === "work" && (
                      <span className="text-sm font-mono text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8">
                    {entry.role}
                  </p>

                  <ul className="space-y-3">
                    {entry.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl">
                        <span className="text-neutral-300 dark:text-neutral-700 mt-2 shrink-0">—</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
