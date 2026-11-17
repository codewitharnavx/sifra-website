# SIFRA Website — Master Redesign & Status (v3.0)

## Overview
The SIFRA official website has undergone a complete master redesign, adopting an **Apple-inspired product design system** combined with **Linear's visual restraint** and **SIFRA's authentic technical identity**.

Unrelated 3D geometries and decorative Three.js canvases were completely removed in favor of high-craft 2D systems architecture diagrams, purposeful CSS interactions, and large, authentic high-resolution application screenshots.

---

## Visual Architecture & Design System

### 1. Light and Dark Surface Rhythm
Rather than a monotonous dark background across all sections, the website establishes an intentional editorial rhythm:
- **Section 01 (Hero):** Warm ivory (`#F5F5F2`) with crisp typography and an interactive SIFRA Neural Research Hub topology diagram.
- **Section 02 (The Problem):** Soft grey (`#F0F1EE`) with an asymmetric editorial breakdown of Cloud AI subscriptions vs. Isolated Local LLM cutoffs, bridged by the SIFRA synthesis banner.
- **Section 03 (Meet SIFRA / Architecture):** Deep charcoal (`#101214`) featuring an interactive 4-pillar system topology inspector (Local Neural Engine, Docker SearXNG Metasearch, Offline SQLite BM25, Hardware Intelligence).
- **Section 04 (How It Works):** Warm paper (`#FAFAF7`) displaying the 5-stage research pipeline with an interactive step scrubber and live payload simulation.
- **Section 05 (Core Capabilities):** Pure white (`#FFFFFF`) with varied feature compositions, including an interactive Deep Research `<think>` reasoning accordion.
- **Section 06 (The SIFRA Application Experience):** Deep charcoal (`#101214`) showcasing authentic product screenshots inside a precision Apple Mac glass window frame.
- **Section 07 (Hardware Intelligence & Developer API):** Soft grey (`#F0F1EE`) with an interactive RAM/VRAM model recommender, tabbed syntax code viewer (cURL, Python, Node.js), and a working simulated API execution preview widget.
- **Section 08 (Privacy & Deployment):** Deep charcoal (`#101214`) presenting a transparent data boundary architecture (local vs. external SearXNG queries) and 3-step setup commands.
- **Section 09 (Closing & Technical Footer):** Deep charcoal (`#101214`) with a bold concluding statement, dual action CTAs, verified Apache-2.0 licensing, and repository resources.

### 2. Typography & Palette Tokens
- **Headings & Body:** Plus Jakarta Sans with refined letter spacing (`-0.012em`) and large editorial hierarchy.
- **Technical Metadata & Code:** JetBrains Mono for system tags, endpoints, and telemetry.
- **Color Tokens:**
  - Light Surfaces: Warm Ivory `#F5F5F2`, Pure White `#FFFFFF`, Soft Grey `#F0F1EE`, Warm Paper `#FAFAF7`.
  - Dark Surfaces: Deep Charcoal `#101214`, Graphite `#191C20`, Elevated `#22262B`.
  - Content Colors: Primary Dark `#17191C`, Secondary `#686D73`, Light Text `#F8F8F5`, Muted `#A7ABB0`.
  - Accent: Muted Warm Amber `#C27803` / `#D97706`.

---

## Engineering & Performance Optimizations
- **Unrelated 3D Pruning:** Completely uninstalled Three.js, `@react-three/fiber`, and `@react-three/drei` (74 unused packages removed).
- **Bundle Footprint:**
  - Production JS Bundle: Reduced from ~800 kB down to **202.10 kB** (**58.84 kB gzip**).
  - Production CSS Bundle: **24.48 kB** (**5.19 kB gzip**).
  - Build Duration: **1.51 seconds** on standard Node/Vite build.
- **Zero Console Errors:** Clean HTTP 200 execution across all routes.
- **Responsiveness:** Systematically validated at 1440×900 desktop and 390×844 mobile viewports with zero horizontal overflow and smooth touch drawer navigation.

---

## Live Deployment Reference
- **Previous Vercel Deployment:** [https://sifra-ai.vercel.app](https://sifra-ai.vercel.app)
- **Local Development / Preview:** `http://localhost:5174/` or `http://localhost:5175/`
- **GitHub Repository:** [https://github.com/codewitharnavx/SIFRA](https://github.com/codewitharnavx/SIFRA)
