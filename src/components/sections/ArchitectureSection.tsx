"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stories = [
  {
    label: "Real-Time Communication",
    caption: "Western Union — Lisa",
    flow: ["WhatsApp", "Node.js Services", "OpenAI", "Salesforce"],
    takeaway:
      "Messages flow through real-time services, get enriched by AI, and sync to the CRM — live agent handoff included.",
  },
  {
    label: "Document Intelligence",
    caption: "Skil.AI — Docubaat",
    flow: ["Documents", "Parsing", "Embeddings", "Semantic Search"],
    takeaway:
      "Raw documents become searchable knowledge — parsed, embedded, and queryable in natural language.",
  },
  {
    label: "Cloud Infrastructure",
    caption: "AWS — Production",
    flow: ["Events", "Lambda", "Queues", "Storage"],
    takeaway:
      "Event-driven, serverless-first architecture that scales on demand and stays observable in production.",
  },
];

function Flow({ steps, align }: { steps: string[]; align: "left" | "right" }) {
  return (
    <div
      className={`flex flex-col gap-5 ${align === "right" ? "lg:items-end" : "lg:items-start"}`}
    >
      {steps.map((step, i) => (
        <div
          key={step}
          className={`flex flex-col gap-5 ${align === "right" ? "lg:items-end" : "lg:items-start"}`}
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.12 }}
            className={`font-semibold tracking-tight leading-none text-[clamp(1.75rem,4.5vw,3.25rem)] text-black dark:text-white ${
              align === "right" ? "lg:text-right" : ""
            }`}
          >
            {step}
          </motion.span>
          {i < steps.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
              className="text-2xl text-[#B8892A] dark:text-[#D4A574] leading-none"
              aria-hidden
            >
              ↓
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="divider py-28 lg:py-40">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">04 — Architecture</span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black dark:text-white max-w-2xl leading-tight">
            How the systems actually flow.
          </h2>
        </motion.div>

        <div className="mt-8">
          {stories.map((story, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={story.label} className="divider py-20 lg:py-28">
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Narrative side */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease }}
                    className={flip ? "lg:text-right" : ""}
                  >
                    <p className="text-base font-mono text-neutral-400 dark:text-neutral-500 mb-3">
                      {story.caption}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white mb-6">
                      {story.label}
                    </h3>
                    <p
                      className={`text-lg sm:text-xl leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-md ${
                        flip ? "lg:ml-auto" : ""
                      }`}
                    >
                      {story.takeaway}
                    </p>
                  </motion.div>

                  {/* Flow side */}
                  <Flow steps={story.flow} align={flip ? "right" : "left"} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
