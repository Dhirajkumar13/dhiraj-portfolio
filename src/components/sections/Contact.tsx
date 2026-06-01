"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  {
    label: "Email",
    value: "dhirajkumarvandrangi@gmail.com",
    href: "mailto:dhirajkumarvandrangi@gmail.com",
    external: false,
    icon: null,
  },
  {
    label: "GitHub",
    value: "github.com/Dhirajkumar13",
    href: "https://github.com/Dhirajkumar13",
    external: true,
    icon: "↗",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhiraj-kumar",
    href: "https://www.linkedin.com/in/dhiraj-kumar-2450a6106/",
    external: true,
    icon: "↗",
  },
  {
    label: "Phone",
    value: "+91 96524 85082",
    href: "tel:+919652485082",
    external: false,
    icon: null,
  },
  {
    label: "Resume",
    value: "Dhiraj_resume.pdf",
    href: "/resume/Dhiraj_resume.pdf",
    external: false,
    icon: "↓",
    download: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="divider py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-4"
        >
          <span className="section-label">08 — Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black dark:text-white leading-tight">
              Open to new roles,
              <br />
              technical consulting,
              <br />
              and collaboration.
            </h2>
            <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
              If you&apos;re building something interesting in backend engineering, cloud
              infrastructure, or AI — I&apos;d like to hear about it.
            </p>
            <div className="mt-8">
              <a
                href="mailto:dhirajkumarvandrangi@gmail.com"
                className="btn-primary"
              >
                Send a message
              </a>
            </div>
          </motion.div>

          {/* Right: Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="flex flex-col justify-center"
          >
            <div>
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
                  className="border-b border-neutral-200 dark:border-neutral-800 first:border-t"
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    {...("download" in link && link.download ? { download: true } : {})}
                    className="flex items-center justify-between py-5 hover:opacity-50 transition-opacity duration-200"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 w-16 shrink-0">
                        {link.label}
                      </span>
                      <span className="text-base text-black dark:text-white">{link.value}</span>
                    </div>
                    {link.icon && (
                      <span className="text-neutral-300 dark:text-neutral-700 text-sm shrink-0">{link.icon}</span>
                    )}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
