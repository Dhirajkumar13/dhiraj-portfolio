"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    index: "01",
    client: "Western Union",
    title: "Lisa",
    year: "2022 — Present",
    statement:
      "Enterprise chatbot platform integrating WhatsApp, Salesforce, Genesys Cloud, and OpenAI.",
    impact:
      "Built scalable real-time communication workflows supporting global customer engagement.",
    tech: ["Node.js", "MongoDB", "OpenAI", "Socket.IO"],
    details:
      "Node.js microservices with Socket.IO for real-time messaging. Salesforce CRM integration for customer data, Genesys Cloud for live agent handoff, and OpenAI for conversation summarization and multilingual responses. JWT auth and Google reCAPTCHA secured the public-facing APIs.",
  },
  {
    index: "02",
    client: "Skil.AI",
    title: "Docubaat",
    year: "2021 — 2023",
    statement:
      "Document intelligence platform with AI-powered semantic search and automated workflows.",
    impact:
      "Replaced manual document review with intelligent search across large enterprise corpora.",
    tech: ["Node.js", "AWS S3", "OpenAI", "React"],
    details:
      "Node.js backend ingesting documents via AWS S3 and FTP. OpenAI embeddings powered semantic search and summarization. React admin dashboards handled workflow configuration. Multi-tenant architecture served multiple enterprise clients with significant backend performance gains.",
  },
  {
    index: "03",
    client: "Itech",
    title: "Document Processing",
    year: "2020 — 2021",
    statement:
      "Automated extraction and report generation for high-volume document pipelines.",
    impact:
      "Eliminated manual data entry across thousands of documents with reliable cloud automation.",
    tech: ["Node.js", "AWS S3", "AWS SES", "MongoDB"],
    details:
      "Backend automation extracting structured data from uploaded documents. REST APIs orchestrated workflows and report generation. AWS S3 provided secure storage with access controls; SES handled automated notifications across the processing pipeline.",
  },
  {
    index: "04",
    client: "Online Visas",
    title: "Immigration Platform",
    year: "2019 — 2020",
    statement:
      "Immigration automation with intelligent document extraction and email workflows.",
    impact:
      "Reduced visa application processing time through end-to-end form handling automation.",
    tech: ["Node.js", "MongoDB", "AWS S3", "Email APIs"],
    details:
      "Backend services for document data extraction and validation. Excel processing pipelines handled application data, email integration drove applicant notifications, and AWS S3 managed cloud storage with automated operations.",
  },
];

function ProjectBlock({ project, i }: { project: (typeof projects)[number]; i: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [open, setOpen] = useState(false);
  const flip = i % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease }}
      className="divider py-20 lg:py-32"
    >
      <div
        className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Visual side — oversized number */}
        <div className={`flex ${flip ? "lg:justify-end" : "lg:justify-start"}`}>
          <span className="font-semibold tracking-tighter leading-none text-[clamp(6rem,18vw,16rem)] text-black/[0.06] dark:text-white/[0.06] select-none">
            {project.index}
          </span>
        </div>

        {/* Text side */}
        <div>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-base font-mono text-neutral-400 dark:text-neutral-500">
              {project.client}
            </span>
            <span className="text-base font-mono text-neutral-300 dark:text-neutral-600">
              {project.year}
            </span>
          </div>

          <h3 className="font-semibold tracking-tighter leading-none text-[clamp(2.75rem,7vw,5.5rem)] text-black dark:text-white mb-8">
            {project.title}
          </h3>

          <p className="text-xl sm:text-2xl leading-snug text-neutral-700 dark:text-neutral-200 max-w-xl">
            {project.statement}
          </p>

          <p className="mt-5 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl">
            {project.impact}
          </p>

          {/* Tech line */}
          <p className="mt-8 text-base font-mono text-neutral-500 dark:text-neutral-400">
            {project.tech.join("  ·  ")}
          </p>

          {/* Expand */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 text-base font-medium border-b border-current pb-0.5 hover:text-[#B8892A] dark:hover:text-[#D4A574] hover:border-[#D4A574] transition-colors duration-200"
            aria-expanded={open}
          >
            {open ? "Hide technical details" : "Technical details"}
            <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>↓</span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                className="overflow-hidden"
              >
                <p className="mt-6 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl">
                  {project.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <section id="work" className="divider py-28 lg:py-40">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">03 — Selected Work</span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black dark:text-white max-w-2xl leading-tight">
            Enterprise platforms, built in production.
          </h2>
        </motion.div>

        <div className="mt-8">
          {projects.map((project, i) => (
            <ProjectBlock key={project.index} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
