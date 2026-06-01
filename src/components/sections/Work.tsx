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
    year: "2021 — Present",
    roles: ["Node.js Developer", "JavaScript Developer", "jQuery Developer"],
    statement:
      "Intelligent chatbot platform integrating real-time socket communication, Salesforce CRM, and a machine learning engine for automated customer support.",
    impact:
      "Automated routine customer interactions at global scale while seamlessly escalating complex tasks — such as money transfers — to live Salesforce agents, reducing handling time and improving engagement.",
    tech: ["Node.js", "Socket.IO", "jQuery", "Salesforce", "REST APIs", "MongoDB"],
    details:
      "Led a cross-functional team from requirement gathering through to delivery, working directly with the Western Union stakeholders to translate business needs into technical tasks. Implemented socket communication on the backend for real-time chatbot interactions. Built the chatbot interface in jQuery for a smooth, responsive user experience. Managed the full request/response cycle between the chatbot and the ML engine. Designed RESTful APIs for chatbot services and external integrations, and optimised database queries to ensure system reliability under production load.",
  },
  {
    index: "02",
    client: "Itech",
    title: "Document Processing",
    year: "2019 — 2024",
    roles: ["Node.js Developer"],
    statement:
      "Automated extraction pipeline for structured and semi-structured documents — invoices, bills of lading — using ML server integration and multi-format file processing.",
    impact:
      "Eliminated manual document handling by building an end-to-end pipeline that ingests, converts, processes via ML, and delivers structured data back to clients in Excel format.",
    tech: ["Node.js", "AWS S3", "REST APIs", "TIFF/PDF/PNG", "FTP", "Excel"],
    details:
      "Developed backend workflows for extracting data from invoices and bills of lading. Integrated with ML servers to send document payloads and handle structured results. Implemented file format conversions across TIFF, PDF, and PNG using Node.js. Automated file fetching from FTP servers followed by processing and transformation. Managed secure document storage and retrieval on AWS S3. Built logic to receive inbound emails, extract attachments, and route them into S3 for further processing. Programmatically generated structured Excel reports and built dynamic HTML pages for internal tooling.",
  },
  {
    index: "03",
    client: "Skil.AI",
    title: "Docubaat",
    year: "2023 — 2025",
    roles: ["Node.js Developer"],
    statement:
      "Web-based intelligent automation platform for document digitisation, high-accuracy data extraction, and omnichannel virtual assistants powered by unsupervised machine learning.",
    impact:
      "Significantly reduced document indexing costs and improved ROI for shared services through an ML engine that parses large email datasets, applies probabilistic models, and classifies content against business rules.",
    tech: ["Node.js", "AWS S3", "Angular", "REST APIs", "FTP", "MongoDB"],
    details:
      "Developed and enhanced core backend functionalities for the platform. Implemented file conversion utilities for TIFF, PDF, and PNG formats. Designed REST APIs for service requests and external integrations. Managed secure file storage and video recording retrieval on AWS S3. Automated file ingestion from FTP servers with full processing and transformation workflows. Created data-driven visualisations in Angular, rendering dynamic graphs per user profile. Generated backend service reports tailored to different user types. Designed and maintained database schemas, optimising queries for performance and scalability at production load.",
  },
  {
    index: "04",
    client: "Online Visas",
    title: "Immigration Automation",
    year: "2019 — 2020",
    roles: ["Node.js Developer"],
    statement:
      "Intelligent automation solution for extracting and structuring data from immigration documents — LCAs, I-129 forms, passports — using ML processing pipelines.",
    impact:
      "Reduced manual processing time for immigration document workflows by automating ingestion, ML-driven extraction, and structured report delivery to clients.",
    tech: ["Node.js", "AWS S3", "REST APIs", "FTP", "Excel", "TIFF/PDF/PNG"],
    details:
      "Built backend features supporting automated data extraction from LCAs, I-129 forms, and passports. Integrated with ML servers to submit documents and handle returned structured results. Performed file format conversions across TIFF, PDF, and PNG. Implemented REST APIs for service handling and system integration. Managed document storage on AWS S3 with automated FTP ingestion pipelines. Handled inbound email processing — extracting attachments and routing them to S3. Programmatically generated Excel reports from processed data and built responsive HTML pages for internal tools.",
  },
];

function ProjectBlock({ project, i }: { project: (typeof projects)[number]; i: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
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
        {/* Visual side — oversized index number */}
        <div className={`flex ${flip ? "lg:justify-end" : "lg:justify-start"}`}>
          <span className="font-bold tracking-tighter leading-none select-none
                           text-[clamp(8rem,22vw,20rem)]
                           text-black/[0.06] dark:text-white/[0.12]">
            {project.index}
          </span>
        </div>

        {/* Text side */}
        <div>
          {/* Year — quaternary, very small */}
          <div className="mb-4">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
              {project.year}
            </span>
          </div>

          {/* Client — primary identifier, large and bold */}
          <h3 className="font-bold tracking-tighter leading-none mb-3
                         text-[clamp(2.75rem,7vw,5.5rem)]
                         text-black dark:text-white">
            {project.client}
          </h3>

          {/* Project name — secondary, smaller subtitle */}
          <p className="text-lg sm:text-xl font-medium text-neutral-500 dark:text-neutral-300
                        tracking-tight mb-6">
            {project.title}
          </p>

          {/* Roles */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8">
            {project.roles.map((role, ri) => (
              <span key={role} className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {role}
                </span>
                {ri < project.roles.length - 1 && (
                  <span className="text-neutral-300 dark:text-neutral-600">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Statement */}
          <p className="text-xl sm:text-2xl leading-snug text-neutral-700 dark:text-neutral-100 max-w-xl mb-5">
            {project.statement}
          </p>

          {/* Impact */}
          <p className="text-lg leading-relaxed text-neutral-500 dark:text-neutral-300 max-w-xl">
            {project.impact}
          </p>

          {/* Tech */}
          <p className="mt-8 text-sm font-mono text-neutral-500 dark:text-neutral-400">
            {project.tech.join("  ·  ")}
          </p>

          {/* Expand / collapse */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 text-base font-medium
                       border-b border-current pb-0.5
                       hover:text-[#B8892A] dark:hover:text-[#D4A574]
                       hover:border-[#D4A574] transition-colors duration-200"
            aria-expanded={open}
          >
            {open ? "Hide details" : "Full responsibilities"}
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
                <p className="mt-6 text-base leading-relaxed text-neutral-500 dark:text-neutral-300 max-w-xl">
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
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight
                         text-black dark:text-white max-w-2xl leading-tight">
            Enterprise platforms, built in production.
          </h2>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectBlock key={project.index} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
