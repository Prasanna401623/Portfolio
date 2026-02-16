# Prasanna Jha Portfolio — Design Document V2

## 1. Design Overview

**Project Name:** Prasanna Jha Portfolio V2  
**Type:** Personal portfolio / resume site  
**Visual Style:** Modern minimalist, dark theme, glassmorphism, smooth gradients  
**Primary Headline/Tagline:** *Building the future, one line of code at a time.*

This portfolio uses a sleek dark aesthetic with subtle gradients, glassmorphism cards, and smooth floating animations. The design emphasizes whitespace, elegant typography, and modern UI patterns.

---

## 2. Visual Identity

### Color System

Background Primary:   **#0F0F12** (deep charcoal)  
Background Secondary: **#1A1A1F** (slightly lighter charcoal for cards)  
Background Gradient:  **linear-gradient(135deg, #0F0F12 0%, #1a1a2e 50%, #16213e 100%)**  
Accent Primary:       **#6366F1** (indigo)  
Accent Secondary:     **#8B5CF6** (violet)  
Accent Gradient:      **linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)**  
Text Primary:         **#FAFAFA** (off-white)  
Text Secondary:       **#A1A1AA** (muted gray)  
Text Tertiary:        **#71717A** (subtle gray)  
Border:               **rgba(255, 255, 255, 0.08)**  
Glass Background:     **rgba(26, 26, 31, 0.6)**

### Typography

**Headings (H1/H2):** `Outfit`  
- H1: 56–72px desktop, 40–48px tablet, 32–40px mobile  
- Weight: 600–700  
- Letter-spacing: -0.02em  
- Line-height: 1.1–1.2  

**Body:** `Inter`  
- 16–18px desktop, 15–16px mobile  
- Weight: 400–500  
- Line-height: 1.6–1.8  

**Accent / Labels:** `JetBrains Mono`  
- 12–14px  
- Uppercase labels with letter-spacing: 0.1em

### Visual Elements

- **Card radius:** 20px (large), 16px (medium), 12px (small)  
- **Borders:** 1px solid `rgba(255, 255, 255, 0.08)`  
- **Glassmorphism:** `backdrop-filter: blur(20px)`, `background: rgba(26, 26, 31, 0.6)`  
- **Shadows:** `0 8px 32px rgba(0, 0, 0, 0.3)`  
- **Glow effects:** `box-shadow: 0 0 40px rgba(99, 102, 241, 0.15)` for accent elements

### Visual Consistency

1. **Dark theme throughout:** Deep charcoal backgrounds with subtle gradients  
2. **Glassmorphism cards:** Consistent frosted glass effect on all cards  
3. **Indigo/violet accent:** Used for buttons, highlights, and interactive elements  
4. **Smooth animations:** Floating, fade-in, and slide animations throughout

---

## 3. Section Structure

**Total Sections:** 7

**Section Flow**
1. **Section 1:** Hero with animated background — **Hero**  
2. **Section 2:** About with stats — **About**  
3. **Section 3:** Projects showcase — **Work**  
4. **Section 4:** Experience timeline — **Experience**  
5. **Section 5:** Skills grid — **Skills**  
6. **Section 6:** Contact form — **Contact**  
7. **Section 7:** Footer — **Closing**

### Persistent Elements
- **Top navigation:** Fixed, glassmorphism background when scrolled
- **No progress dots / page numbers**

---

## 4. Tech Stack

**Fixed Stack**
- Build Tool: **Vite**
- Framework: **React**
- Animation: **Framer Motion**

---

## 5. Section-by-Section Design

### Section 1: Hero

**Section Purpose:** Make a strong first impression with animated background and clear CTA.

#### Composition
- **Full viewport height** with gradient background
- **Animated gradient orbs** floating in background (subtle, slow movement)
- **Centered content:** Name, tagline, CTA buttons
- **Scroll indicator** at bottom

#### Content
- Headline: **"Prasanna Jha"**
- Subheadline: **"Computer Science Student & Full-Stack Developer"**
- Tagline: **"Building systems at the intersection of engineering, design, and data"**
- CTAs: **"View My Work"** | **"Get In Touch"**

#### Animations
- Background orbs: Slow floating animation (infinite loop)
- Text: Fade in + slide up on load (staggered)
- Buttons: Fade in with slight delay
- Scroll indicator: Bouncing animation

---

### Section 2: About

**Section Purpose:** Introduce yourself with key stats.

#### Composition
- Two-column layout on desktop
- Left: Large heading + paragraph
- Right: 3 stat cards in a row

#### Content
- Heading: **"About Me"**
- Body: **"I'm a Computer Science student at the University of Louisiana at Monroe with a minor in Mathematics. I specialize in full-stack development, data analysis, and applied machine learning."**
- Stats:
  - **"4+"** — Years Experience
  - **"8+"** — Projects Completed
  - **"3"** — Leadership Roles

#### Animations
- Scroll-triggered fade in + slide up
- Stats: Count-up animation when visible
- Cards: Staggered entrance

---

### Section 3: Projects

**Section Purpose:** Showcase your best work.

#### Composition
- Section heading centered
- 3 project cards in a grid (2 columns on desktop, 1 on mobile)
- Each card: Image, title, description, tags, link

#### Content
- Heading: **"Featured Projects"**
- Projects:
  1. **Carbon Horizon** — "AI-powered climate platform for emissions tracking" — Tags: React, Python, AI/ML
  2. **NoteLinkAI** — "AI learning platform with smart notes" — Tags: Next.js, TypeScript, OpenAI
  3. **Escape the Virtual Maze** — "Educational visual novel game" — Tags: Ren'Py, Game Dev

#### Animations
- Cards: Fade in + scale up on scroll
- Hover: Lift effect with glow
- Image: Subtle zoom on hover

---

### Section 4: Experience

**Section Purpose:** Show professional journey.

#### Composition
- Vertical timeline with alternating left/right cards
- Each entry: Role, company, date, description
- Connecting line down the center

#### Content
- Heading: **"Experience"**
- Entries:
  1. **Technical Lead** — GDSC ULM — Aug 2025 – Present
  2. **Digital Editor / Web Master** — The Hawkeye — Fall 2024 – Present
  3. **Tutor** — Student Success Center — Jan 2025 – Present
  4. **IT & Operations Intern** — Medicross Humaceuticals — Oct 2022 – Jun 2023

#### Animations
- Timeline line draws as you scroll
- Cards slide in from respective sides
- Staggered entrance

---

### Section 5: Skills

**Section Purpose:** Display technical toolkit.

#### Composition
- Section heading
- Skills organized in category cards
- Each card has icon + skill list
- Grid layout (2x2 on desktop)

#### Content
- Heading: **"Skills & Technologies"**
- Categories:
  - **Languages:** Python, Java, JavaScript, SQL
  - **Frameworks:** React, Next.js, Node.js, REST APIs
  - **Data & AI:** Pandas, Visualization, ML, Data Analysis
  - **Tools:** Git, Figma, Supabase, Firebase

#### Animations
- Cards: Fade in with stagger
- Icons: Subtle pulse or float

---

### Section 6: Contact

**Section Purpose:** Encourage visitors to reach out.

#### Composition
- Two-column layout
- Left: Contact form (Name, Email, Message)
- Right: Direct contact info + social links

#### Content
- Heading: **"Let's Work Together"**
- Subtext: **"Have a project in mind? I'd love to hear about it."**
- Form CTA: **"Send Message"**
- Contact info: Email, GitHub, LinkedIn, Location

#### Animations
- Form fields: Staggered fade in
- Social links: Hover glow effect

---

### Section 7: Footer

**Section Purpose:** Clean closing with navigation.

#### Composition
- Centered content
- Large name/logo
- Navigation links
- Copyright + back to top

#### Content
- Name: **"Prasanna Jha"**
- Links: Work, Experience, Skills, Contact
- Copyright: **"© 2026 Prasanna Jha. All rights reserved."**

---

## 6. Animation System

### Global Animations
- **Page load:** Staggered fade-in for all elements
- **Scroll:** Intersection Observer triggers animations
- **Hover:** Smooth transitions (200-300ms)

### Animation Types
- **Fade In + Slide Up:** `opacity: 0 → 1`, `y: 30px → 0`
- **Scale In:** `scale: 0.95 → 1`, `opacity: 0 → 1`
- **Slide In:** `x: ±50px → 0`, `opacity: 0 → 1`
- **Count Up:** Numbers animate from 0 to target
- **Float:** Infinite subtle Y-axis movement
- **Glow Pulse:** Subtle box-shadow pulse on accent elements

### Timing
- Duration: 0.4–0.8s for most animations
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- Stagger: 0.1s between related elements

---

## 7. Asset Inventory

### Images Required

**hero_portrait_v2**
- Purpose: Hero section background or accent
- Treatment: Dark, moody, subtle gradient overlay compatible
- Prompt: "Abstract dark gradient background with subtle purple and blue light rays, minimal, modern, tech aesthetic"

**project_carbon_v2**
- Purpose: Carbon Horizon project card
- Treatment: Dark theme, data visualization aesthetic
- Prompt: "Dark themed data dashboard visualization, carbon emissions charts, modern UI, purple and blue accents, minimal design"

**project_notelink_v2**
- Purpose: NoteLinkAI project card
- Treatment: Dark theme, AI/tech aesthetic
- Prompt: "Dark themed AI interface mockup, neural network visualization, purple glow, modern minimal design"

**project_maze_v2**
- Purpose: Escape the Virtual Maze project card
- Treatment: Dark theme, game aesthetic
- Prompt: "Dark themed cyber maze with glowing pathways, purple and blue neon accents, game environment, minimal"

---

## 8. Responsive Strategy

- **Desktop:** Full layouts as designed
- **Tablet:** Adjusted spacing, 2-column grids become single column where needed
- **Mobile:** Single column, stacked layouts, reduced font sizes
- **Touch:** Larger tap targets (min 44px)

---

## 9. Complete Copy Document

**Navigation**
- Logo: "Prasanna Jha"
- Links: Work, Experience, Skills, Contact

**Hero**
- "Prasanna Jha"
- "Computer Science Student & Full-Stack Developer"
- "Building systems at the intersection of engineering, design, and data"
- "View My Work" | "Get In Touch"

**About**
- "About Me"
- "I'm a Computer Science student at the University of Louisiana at Monroe with a minor in Mathematics. I specialize in full-stack development, data analysis, and applied machine learning."
- Stats: "4+ Years Experience", "8+ Projects Completed", "3 Leadership Roles"

**Projects**
- "Featured Projects"
- Carbon Horizon, NoteLinkAI, Escape the Virtual Maze

**Experience**
- "Experience"
- All roles with dates and descriptions

**Skills**
- "Skills & Technologies"
- All categories with skills

**Contact**
- "Let's Work Together"
- "Have a project in mind? I'd love to hear about it."
- "Send Message"

**Footer**
- "Prasanna Jha"
- "© 2026 Prasanna Jha. All rights reserved."
