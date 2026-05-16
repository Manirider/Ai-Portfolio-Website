# Manikanta Suryasai Sunkara — Portfolio

> Building AI-powered systems with scalable engineering.

A cinematic, production-grade portfolio built with React, Three.js, and modern web technologies. Designed to showcase AI/ML engineering, full-stack development, and blockchain projects with an immersive 3D experience.

## ✨ Features

- **Cinematic Loader** — Animated intro with gradient glow and loading bar
- **3D Hero Scene** — Particle galaxy, neural network visualization, animated grid floor, floating distorted spheres
- **Profile Image** — Gradient-bordered photo with cinematic hover effects
- **Skills Showcase** — Filterable skill categories with animated level bars
- **Experience Timeline** — Color-coded badges (Education / Experience / Achievement) with alternating layout
- **Featured Projects** — 8 projects with 3D tilt cards, cursor-following glow, and detailed modals
- **Achievements & Impact** — Animated stat counters with spotlight hover cards
- **Contact Form** — Glassmorphic form with smooth focus animations
- **Smooth Scrolling** — Lenis + GSAP ScrollTrigger integration
- **Fully Responsive** — Mobile, tablet, desktop, and ultrawide support
- **Accessibility** — ARIA labels, focus management, keyboard navigation, reduced-motion support

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | React 18, TypeScript, Vite |
| **3D/WebGL** | Three.js, React Three Fiber, Drei |
| **Animation** | Framer Motion, GSAP, ScrollTrigger, Lenis |
| **Styling** | Tailwind CSS, CSS Variables, Custom Shaders |
| **Utilities** | clsx, tailwind-merge, class-variance-authority |
| **Icons** | Lucide React, Iconify |
| **Interaction** | react-intersection-observer, Splitting.js, Shery.js |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── animations/    # Framer Motion variants and wrappers
├── assets/        # Static assets
├── components/    # Reusable UI components (Scene3D, Navbar, TiltCard, etc.)
├── constants/     # App-wide constants (nav items, social links, roles)
├── data/          # Data files (projects, skills, experience)
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── lib/           # GSAP effects, scroll initialization
├── sections/      # Page sections (Hero, About, Skills, etc.)
├── styles/        # Global CSS and design tokens
├── types/         # TypeScript type definitions
├── utils/         # Helper utilities
├── App.tsx        # Root component with loader + lazy loading
└── main.tsx       # Entry point
```

## 📊 Performance

- **Code Splitting** — All below-the-fold sections are lazy-loaded
- **GPU Acceleration** — Animations use only `transform` and `opacity`
- **Image Optimization** — SVG project thumbnails, lazy loading
- **Reduced Motion** — Full `prefers-reduced-motion` support
- **Font Loading** — Preloaded critical fonts (Inter, Space Grotesk)

## 👤 Contact

- **GitHub**: [github.com/Manirider](https://github.com/Manirider)
- **LinkedIn**: [Manikanta Suryasai Sunkara](https://www.linkedin.com/in/manikanta-suryasai-sunkara-60955b27b/)
- **Email**: smanikanta713@gmail.com

## 📄 License

MIT © Manikanta Suryasai Sunkara
