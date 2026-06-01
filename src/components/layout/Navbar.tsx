"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      {/* Increased height h-14 → h-[68px], font text-sm → text-[17px], gap-8 → gap-12 */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">

        {/* Logo / name — brand anchor */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-semibold tracking-tight hover:opacity-50 transition-opacity"
        >
          Dhiraj Kumar
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[17px] text-neutral-500 dark:text-neutral-400
                         hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume/Dhiraj_resume.pdf"
            download
            className="text-[17px] text-neutral-500 dark:text-neutral-400
                       hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            Resume ↗
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-hidden"
          >
            <nav className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[17px] text-neutral-500 dark:text-neutral-400
                             hover:text-black dark:hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume/Dhiraj_resume.pdf"
                download
                className="text-[17px] text-neutral-500 dark:text-neutral-400"
              >
                Download Resume ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
