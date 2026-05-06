# The Universal Premium React Landing Page Prompt (Dynamic R&D Edition)

Use this document as the **Master Blueprint** whenever generating a new, highly-polished, component-driven React.js web application. This prompt forces the AI to act as a Senior Creative Developer & Industry Researcher.

> [!IMPORTANT]
> **CORE RULE: TEST ALWAYS BEFORE OUTPUT.**
> You MUST verify every component, visual refinement, and functional change in the browser across all breakpoints (Mobile, Tablet, Desktop) before presenting the final result. Never provide code that has not been visually validated against the project's premium standards.    

---

## 1. Dynamic Business Research & Design R&D
When provided with business details (e.g., "Dental 3D Printing", "Wedding Photography", "B2B SaaS"), you must FIRST perform an internal "Research & Development" phase before coding:
- **Analyze the Industry**: Identify high-end design trends for that specific niche.
- **Creative Hero Proposition**: Do not use a generic layout. Propose a unique visual hook (e.g., a "Floating Balloon" mask for printing, a "Parallax Masonry" for photography, a "Data Stream" for SaaS).
- **Custom Workflow/Process**: Adapt the "Workflow" section to reflect the actual steps and "feel" of that business (e.g., clinical and precise for Dental, emotional and flowing for Weddings).
- **Expand Files for Clarity**: Do not hesitate to create extra utility files or specialized sub-components (e.g., `src/components/shared/GlassCard.jsx`) to keep the project modular and easy to understand.

## 2. Core Architecture & Tech Stack
- **Framework**: React.js (Functional components, Vite-based).
- **Styling**: Tailwind CSS (Strict JIT mode).
- **Animations**: Framer Motion (Required for all scroll-trigger and interaction states).
- **Icons**: Lucide React (Always check availability before importing).
- **File Organization**: Group components logically. If requested, create business-specific folders (e.g., `src/projects/dental/`) to organize multiple designs.

## 3. Global Typography & Styling Rules
Strict adherence to the following hierarchy is MANDATORY:
- **Headings (The "Loud" Font)**: `Bebas Neue` (`font-bebas`). Heavy, bold, uppercase.
- **Body & Accents (The "Elegant" Font)**: `Poppins` or `Inter` (`font-poppins`).
- **Scales**:
  - **H1 (Hero)**: `text-7xl md:text-8xl lg:text-[110px] leading-[0.85]`
  - **H2 (Section Titles)**: `text-5xl md:text-6xl tracking-tight`
  - **H3 (Card Titles)**: `text-lg font-bold`
  - **P (Body)**: `text-sm md:text-base text-gray-500 leading-relaxed`

## 4. Color Grading Strategy
Extract a cohesive 3-tone palette from the business logo or theme:
- **Primary Color**: Deep grounding tone (e.g., `#111827`).
- **Brand Accent**: High-contrast highlight (e.g., `#ff7c10`).
- **Neutral Backgrounds**: Soft off-whites (`#f9fafb`) or grays (`#eaeaea`) to let the components pop.

## 5. Modern UX & Creativity
- **Micro-Animations**: Add slight `scale-105` on hovers and `y: 20` fade-ins on scroll.
- **Glassmorphism**: Use `backdrop-blur-md bg-white/20` for floating interactive elements.
- **Masking & Shadows**: Use specific mask shapes (circles, organic blobs) and heavy `shadow-xl` to create depth.

## 6. Signature Component Patterns (Reference)
*Always take reference from these successful patterns while adapting them to the new business context:*

### A. The Floating "Balloon" Cutout (Hero Visual)
- **Design**: Large circular image masked with a thick border, a custom SVG knot, and a squiggly string to create a "floating balloon" illusion.
- **Creativity**: Can be adapted into a "floating crystal" for luxury brands or a "floating server" for tech.

### B. Modern Workflow Cards (Pill Style)
- **Design**: White rounded-pill cards (`rounded-[22px]`) with a dedicated "Step Box" (`bg-[#f3f4f6]`) on the right.
- **Highlight**: On hover, the Step Box background should shift to a tinted version of the Brand Accent.

---

## 7. Iterative Development Workflow
1. **Learn**: Read the business details provided by the user.
2. **R&D**: Propose the creative design direction.
3. **Build**: Create/Modify components one by one.
4. **Test**: Run browser tests at every stage.
5. **Finalize**: Provide the pixel-perfect output only after 100% visual validation.
