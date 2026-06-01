# Dhiraj Kumar Vandrangi — Portfolio

Premium personal portfolio for **Dhiraj Kumar Vandrangi**, Senior Software Engineer & Team Lead with 7+ years of experience.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom glassmorphism utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Sora (via Google Fonts)
- **Theme**: next-themes (dark/light mode)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata + JSON-LD
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles + CSS variables
│   └── api/
│       ├── contact/route.ts  # Contact form handler
│       └── github/route.ts   # GitHub stats proxy
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky glassmorphic navbar + command palette
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with TypeAnimation, CountUp, floating icons
│   │   ├── About.tsx       # Profile, info cards, highlight grid
│   │   ├── Skills.tsx      # Animated skill bars + tech cloud
│   │   ├── Experience.tsx  # Timeline + interactive terminal
│   │   ├── Projects.tsx    # Filterable project cards
│   │   ├── Achievements.tsx  # Award cards with animations
│   │   ├── Services.tsx    # Service offering cards
│   │   ├── GitHub.tsx      # GitHub stats via readme-stats
│   │   └── Contact.tsx     # Contact form + social links
│   └── common/
│       ├── CommandPalette.tsx  # ⌘K searchable command palette
│       ├── ThemeProvider.tsx   # next-themes provider
│       ├── ThemeToggle.tsx     # Dark/light mode button
│       ├── ScrollProgress.tsx  # Top scroll progress bar
│       ├── MouseFollower.tsx   # Custom cursor glow effect
│       └── SectionWrapper.tsx  # Reusable animated section wrapper
├── hooks/
│   ├── useMousePosition.ts
│   └── useScrollProgress.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## Features

- **Dark/Light Mode** — Defaults to dark, fully togglable
- **Command Palette** — Press `⌘K` (or `Ctrl+K`) to navigate
- **Scroll Progress Bar** — Gradient progress indicator at top
- **Mouse Glow Follower** — Premium cursor effect (desktop)
- **Animated Hero** — TypeAnimation title rotator + CountUp stats
- **Interactive Skills** — Tabbed categories with animated progress bars
- **Terminal Section** — Developer-style career showcase
- **Project Filtering** — Filter by Backend / AI / Cloud
- **GitHub Stats** — Live stats via github-readme-stats
- **Contact Form** — Working form with toast notifications
- **SEO Optimized** — Full meta tags + JSON-LD schema.org
- **Performance** — Static generation, image optimization

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Environment Variables (Optional)

Create `.env.local` for enhanced features:

```env
GITHUB_TOKEN=your_github_pat_here      # Increases GitHub API rate limits
RESEND_API_KEY=your_resend_key_here    # Enable email sending from contact form
```

## Customization

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Content**: Update data in each section component under `src/components/sections/`
- **Resume**: Replace `public/resume/Dhiraj_resume.pdf`
- **Profile Image**: Replace `public/images/dhiraj.jpg`
