# PRD — Shaik Mohammad Javeed Ahamed · 3D Portfolio

## Original Problem Statement
Premium, highly interactive 3D personal portfolio for Shaik Mohammad Javeed Ahamed — CSE (Data Science) graduate specializing in Agentic AI, AI/ML, Full-Stack Development, React.js, TypeScript, Python. Dark futuristic cinematic aesthetic (black/charcoal, neon blue + purple, glassmorphism, particles, floating code atmosphere). Awwwards-level motion: masked line hero reveal, editorial marquee, magnetic buttons, 3D tilt, lenis smooth scroll. Recruiter-friendly, responsive, performant, prefers-reduced-motion aware. No invented facts.

## User Personas
- Recruiters / hiring managers scanning experience, projects, resume
- Technical leads evaluating craft (code section, GitHub)
- Collaborators/clients reaching out via WhatsApp

## Architecture
- Frontend: React 19 (CRA/craco) + Tailwind + Framer Motion + Lenis + Three.js / React Three Fiber / Drei
- Content: single structured data file `src/data/portfolio.js`
- 3D: `components/three/HeroScene.jsx` (particles, wireframe shapes, grid, mouse rig), `components/three/SkillsScene.jsx` (orbiting skill universe)
- Backend: not used (contact form redirects to WhatsApp by user choice)
- Resume PDF: `/frontend/public/Javeed_Ahamed_Resume.pdf`

## Implemented (2026-07-16)
- Spotlighted personal portrait in hero: green-screen background removed programmatically (chroma key + despill), holographic glass frame with rotating conic ring, scan-line sweep, floating skill chips, "javeed.exe — online" caption; circular glowing avatar variant on mobile
- About section editorial portrait: large framed figure with corner brackets, offset purple frame, desaturate-to-color hover, "fig. 01 — the developer" caption, journey write-up + mono facts table (Focus/Base/Status) beside it
- Immersive hero: R3F particle field, wireframe torus knot/icosahedron/octahedron, distort sphere, infinite grid, mouse parallax rig, masked line-by-line headline reveal, floating agentic code stream, OPEN TO OPPORTUNITIES badge, magnetic CTAs
- Global background code atmosphere (6 parallax code layers, scroll + mouse reactive, low opacity)
- Floating glass navbar (opaques on scroll) + animated mobile menu
- About with 3 tilt cards; Experience timeline (7 entries, glowing nodes, hover-expand cards)
- 6 project cards with 3D tilt, vision-scan visual, Published Research badge; View Project → GitHub
- CODE THAT BUILDS THE FUTURE: 3D tilting editor, 5 tabs (Python/TS/TSX/FastAPI/Node), live typing + syntax highlight
- 3D Skill Universe: 12 tech nodes orbiting glowing JAVEED core, hover pauses + info panel; full 22-tech stack cloud
- Certifications: professional certs cards + training marquee + campus leadership reverse marquee
- Education 3D card; Publication card (no link button per user — "available on request")
- Contact: 3D channel cards + form → WhatsApp redirect to +91 8019286186 (verified live)
- Editorial outlined marquee, cursor glow, grain overlay, lenis smooth scroll, reduced-motion + mobile fallbacks
- Real data from resume: email smjaveedahamed786@gmail.com, GitHub smjaveed786, LinkedIn, Guntur

## Backlog
- P0: none blocking
- P1: Add real publication link/DOI when available; per-project GitHub repo links
- P2: Blog/writing section; Open Graph share image; section scroll-spy in navbar

## Notes
- Built in JSX on the existing CRA/craco stack (not Vite/TS) to preserve the managed build pipeline; component structure mirrors requested src/ layout.
