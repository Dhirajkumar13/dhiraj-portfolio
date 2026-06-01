"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ease = [0.22, 1, 0.36, 1] as const;

interface ArchNode {
  name: string;
  tag: string;
  shared?: boolean;
}

interface ArchLayer {
  label: string;
  nodes: ArchNode[];
}

interface Architecture {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  layers: ArchLayer[];
}

const architectures: Architecture[] = [
  {
    id: "whatsapp",
    title: "WhatsApp Bot",
    subtitle: "01",
    description:
      "AI-powered conversational support through WhatsApp, integrating business workflows, intelligent response generation, persistent conversation storage, and centralised monitoring.",
    layers: [
      {
        label: "Channel Layer",
        nodes: [
          { name: "WhatsApp User", tag: "End User" },
          { name: "WhatsApp Business API", tag: "Meta Platform" },
        ],
      },
      {
        label: "API Layer",
        nodes: [
          { name: "AWS Lambda", tag: "Serverless Compute" },
        ],
      },
      {
        label: "AI Layer",
        nodes: [
          { name: "Internal ML API", tag: "Intelligence Engine", shared: true },
        ],
      },
      {
        label: "Data Layer",
        nodes: [
          { name: "Amazon DocumentDB", tag: "Conversation Storage", shared: true },
        ],
      },
      {
        label: "Monitoring",
        nodes: [
          { name: "CloudWatch", tag: "AWS Observability" },
        ],
      },
    ],
  },
  {
    id: "web",
    title: "Web Bot",
    subtitle: "02",
    description:
      "Serverless AI-powered web chatbot hosted entirely on AWS. Frontend assets served through CloudFront and S3, while API Gateway and Lambda handle business logic, AI interactions, and response delivery.",
    layers: [
      {
        label: "Channel Layer",
        nodes: [
          { name: "Web User", tag: "Browser Client" },
          { name: "CloudFront", tag: "CDN / Edge Delivery" },
          { name: "Amazon S3", tag: "HTML · CSS · JS · jQuery" },
        ],
      },
      {
        label: "API Layer",
        nodes: [
          { name: "API Gateway", tag: "HTTP Routing" },
          { name: "AWS Lambda", tag: "Serverless Compute" },
        ],
      },
      {
        label: "AI Layer",
        nodes: [
          { name: "Internal ML API", tag: "Intelligence Engine", shared: true },
        ],
      },
      {
        label: "Data Layer",
        nodes: [
          { name: "Amazon DocumentDB", tag: "Conversation Storage", shared: true },
        ],
      },
      {
        label: "Monitoring",
        nodes: [
          { name: "CloudWatch", tag: "AWS Observability" },
        ],
      },
    ],
  },
  {
    id: "docubaat",
    title: "Docubaat",
    subtitle: "04",
    description:
      "AI-powered document intelligence platform. Users upload files, which are processed and indexed so they can ask natural language questions and receive accurate, context-aware answers.",
    layers: [
      {
        label: "Upload Layer",
        nodes: [
          { name: "User", tag: "Browser Client" },
          { name: "Document Upload", tag: "PDF · Word · Excel" },
        ],
      },
      {
        label: "Storage Layer",
        nodes: [
          { name: "AWS S3", tag: "Secure Document Storage" },
        ],
      },
      {
        label: "Processing Layer",
        nodes: [
          { name: "Node.js APIs", tag: "Content Extraction" },
        ],
      },
      {
        label: "Data Layer",
        nodes: [
          { name: "MongoDB", tag: "Metadata · Indexed Content" },
        ],
      },
      {
        label: "AI Layer",
        nodes: [
          { name: "Q&A Engine", tag: "Context Retrieval" },
          { name: "Answer Generation", tag: "Natural Language Response" },
        ],
      },
    ],
  },
  {
    id: "itech",
    title: "iTECH OCR Platform",
    subtitle: "03",
    description:
      "Enterprise document-processing platform for shipping bills, bills of lading, and logistics invoices. Files arrive via email and FTP, land in S3, and are processed through PM2-managed OCR workers with metadata tracked in MongoDB.",
    layers: [
      {
        label: "Channel Layer",
        nodes: [
          { name: "Shipping Documents", tag: "Bills · Slips · Invoices" },
          { name: "AWS WorkMail", tag: "Email Ingestion" },
          { name: "FTP Uploads", tag: "File Transfer" },
        ],
      },
      {
        label: "Storage Layer",
        nodes: [
          { name: "AWS S3", tag: "S3 Event Trigger" },
        ],
      },
      {
        label: "API Layer",
        nodes: [
          { name: "ECS Node.js API", tag: "Landing Service" },
          { name: "MongoDB", tag: "Metadata Records" },
        ],
      },
      {
        label: "Processing Layer",
        nodes: [
          { name: "PM2 OCR Workers", tag: "Fetch Pending Documents" },
          { name: "OCR / ML Extraction", tag: "Document Intelligence" },
        ],
      },
      {
        label: "Delivery Layer",
        nodes: [
          { name: "Structured Data Output", tag: "JSON · Validation" },
          { name: "Reports & Delivery", tag: "Excel · FTP · Reconciliation" },
        ],
      },
    ],
  },
];

/* ── Animated connector (line + arrow) ── */
function Connector({
  inView,
  delay,
  prominent = false,
}: {
  inView: boolean;
  delay: number;
  prominent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ height: 0 }}
        animate={inView ? { height: prominent ? 36 : 24 } : {}}
        transition={{ duration: 0.35, delay, ease: "easeOut" }}
        className={`w-px origin-top ${
          prominent
            ? "bg-neutral-400 dark:bg-neutral-600"
            : "bg-neutral-300 dark:bg-neutral-700"
        }`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: delay + 0.3 }}
        className="w-0 h-0
          border-l-[3px] border-r-[3px] border-t-[5px]
          border-l-transparent border-r-transparent
          border-t-neutral-300 dark:border-t-neutral-700"
      />
    </div>
  );
}

/* ── Single node box ── */
function NodeBox({
  node,
  inView,
  delay,
}: {
  node: ArchNode;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease }}
      className={`w-full px-4 py-3 border text-left
        ${
          node.shared
            ? "border-[#B8892A]/50 dark:border-[#D4A574]/50 bg-[#B8892A]/5 dark:bg-[#D4A574]/8"
            : "border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900"
        }`}
    >
      <p className="text-sm font-medium text-black dark:text-white leading-tight">
        {node.name}
      </p>
      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
        {node.tag}
      </p>
      {node.shared && (
        <span className="mt-1.5 inline-block text-[10px] font-mono tracking-widest uppercase text-[#B8892A] dark:text-[#D4A574]">
          Shared
        </span>
      )}
    </motion.div>
  );
}

/* ── One full architecture column ── */
function ArchColumn({
  arch,
  inView,
  baseDelay,
}: {
  arch: Architecture;
  inView: boolean;
  baseDelay: number;
}) {
  return (
    <div className="flex flex-col">
      {/* Column header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: baseDelay, ease }}
        className="mb-8"
      >
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-xs font-mono text-neutral-300 dark:text-neutral-700">
            {arch.subtitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
            {arch.title}
          </h3>
        </div>
        <p className="text-base text-neutral-500 dark:text-neutral-300 leading-relaxed max-w-sm">
          {arch.description}
        </p>
      </motion.div>

      {/* Flow */}
      <div className="flex flex-col items-center w-full">
        {arch.layers.map((layer, li) => {
          const layerDelay = baseDelay + 0.15 + li * 0.12;

          return (
            <div key={layer.label} className="w-full">
              {/* Layer label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: layerDelay }}
                className="text-[10px] font-mono uppercase tracking-widest
                           text-neutral-400 dark:text-neutral-500 mb-2 pl-0.5"
              >
                {layer.label}
              </motion.p>

              {/* Nodes within layer */}
              <div className="flex flex-col items-center w-full">
                {layer.nodes.map((node, ni) => {
                  const nodeDelay = layerDelay + ni * 0.1;
                  const isLastNodeInLayer = ni === layer.nodes.length - 1;
                  const isLastLayer = li === arch.layers.length - 1;

                  return (
                    <div key={node.name} className="w-full flex flex-col items-center">
                      <NodeBox node={node} inView={inView} delay={nodeDelay} />
                      {/* Connector: between nodes within layer = short, between layers = prominent */}
                      {!(isLastNodeInLayer && isLastLayer) && (
                        <Connector
                          inView={inView}
                          delay={nodeDelay + 0.12}
                          prominent={isLastNodeInLayer && !isLastLayer}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Main section ── */
export function ArchitectureSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="architecture" className="divider py-28 lg:py-40" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">04 — Architecture</span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight
                         text-black dark:text-white max-w-2xl leading-tight">
            How the systems flow.
          </h2>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Four production systems — conversational AI channels, a document intelligence platform,
            and an enterprise OCR pipeline — all built on cloud-native AWS infrastructure.
          </p>
        </motion.div>

        {/* 2×2 architecture grid */}
        {/* Row 1: WhatsApp + Web Bot */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-2
                        lg:divide-x divide-neutral-200 dark:divide-neutral-800
                        pb-20 lg:pb-24 border-b border-neutral-200 dark:border-neutral-800">
          <div className="lg:pr-14 pb-16 lg:pb-0">
            <ArchColumn arch={architectures[0]} inView={inView} baseDelay={0.1} />
          </div>
          <div className="lg:pl-14 pt-16 lg:pt-0 border-t lg:border-t-0 border-neutral-200 dark:border-neutral-800">
            <ArchColumn arch={architectures[1]} inView={inView} baseDelay={0.2} />
          </div>
        </div>

        {/* Row 2: Docubaat + iTECH */}
        <div className="grid grid-cols-1 lg:grid-cols-2
                        lg:divide-x divide-neutral-200 dark:divide-neutral-800
                        pt-20 lg:pt-24">
          <div className="lg:pr-14 pb-16 lg:pb-0">
            <ArchColumn arch={architectures[2]} inView={inView} baseDelay={0.3} />
          </div>
          <div className="lg:pl-14 pt-16 lg:pt-0 border-t lg:border-t-0 border-neutral-200 dark:border-neutral-800">
            <ArchColumn arch={architectures[3]} inView={inView} baseDelay={0.4} />
          </div>
        </div>

        {/* Shared services callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="mt-20 pt-10 border-t border-neutral-200 dark:border-neutral-800
                     grid sm:grid-cols-3 gap-8"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-widest
                          text-[#B8892A] dark:text-[#D4A574] mb-2">
              Shared Services
            </p>
            <p className="text-sm font-medium text-black dark:text-white mb-1">
              Internal ML API + DocumentDB + MongoDB
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed">
              Chatbot architectures share DocumentDB. The OCR platform uses
              MongoDB independently for job metadata and document state tracking.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest
                          text-neutral-400 dark:text-neutral-500 mb-2">
              Scalability
            </p>
            <p className="text-sm font-medium text-black dark:text-white mb-1">
              Serverless + Container Workers
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed">
              Lambda scales chatbot compute on demand. PM2-managed ECS workers
              handle OCR batch processing at configurable concurrency.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest
                          text-neutral-400 dark:text-neutral-500 mb-2">
              Enterprise Grade
            </p>
            <p className="text-sm font-medium text-black dark:text-white mb-1">
              Multi-channel Ingestion
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed">
              Email via AWS WorkMail, FTP polling, and REST API uploads give
              the OCR platform flexible document ingestion across client systems.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
