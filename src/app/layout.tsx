import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dhiraj Kumar Vandrangi — Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years building scalable backend systems, AI-powered platforms, and cloud-native applications. Node.js · AWS · TypeScript · OpenAI.",
  keywords: [
    "Dhiraj Kumar Vandrangi",
    "Senior Software Engineer",
    "Team Lead",
    "Node.js",
    "AWS",
    "Backend Engineer",
    "TypeScript",
    "Microservices",
    "OpenAI",
    "MongoDB",
  ],
  authors: [{ name: "Dhiraj Kumar Vandrangi" }],
  creator: "Dhiraj Kumar Vandrangi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhirajkumar.dev",
    title: "Dhiraj Kumar Vandrangi — Senior Software Engineer",
    description:
      "Building scalable backend systems, AI-powered platforms, and cloud-native applications for enterprise clients.",
    siteName: "Dhiraj Kumar Vandrangi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Kumar Vandrangi — Senior Software Engineer",
    description:
      "Building scalable backend systems, AI-powered platforms, and cloud-native applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhiraj Kumar Vandrangi",
  jobTitle: "Senior Software Engineer / Team Lead",
  description:
    "Senior Software Engineer with 7+ years building scalable backend systems, AI-powered platforms, and cloud-native applications.",
  url: "https://dhirajkumar.dev",
  email: "dhirajkumarvandrangi@gmail.com",
  telephone: "+91-96524-85082",
  sameAs: [
    "https://github.com/Dhirajkumar13",
    "https://www.linkedin.com/in/dhiraj-kumar-2450a6106/",
  ],
  knowsAbout: [
    "Node.js", "TypeScript", "AWS", "Microservices", "MongoDB", "OpenAI", "React.js",
    "Express.js", "System Design", "Backend Engineering",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "GITAM University",
  },
  worksFor: {
    "@type": "Organization",
    name: "Kairos Technologies Inc.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`} style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--toast-bg, #111)",
                color: "var(--toast-color, #fff)",
                border: "1px solid var(--toast-border, #222)",
                borderRadius: "4px",
                fontSize: "13px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
