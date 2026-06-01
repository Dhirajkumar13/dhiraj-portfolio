"use client";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} Dhiraj Kumar Vandrangi
        </p>
        <div className="flex items-center gap-6 text-xs text-neutral-400 dark:text-neutral-500">
          <a
            href="https://github.com/Dhirajkumar13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dhiraj-kumar-2450a6106/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dhirajkumarvandrangi@gmail.com"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
