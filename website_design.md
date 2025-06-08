# Pixel-Perfect Cloning Specification(Portfolio of **PranjulSaxena** using Linear-style reference)

---

##0. Global Design Language (Cloned from Reference)

###0.1 Brand & Art Direction Overview• Ultra-clean, dark, product-centric aesthetic, minimal chrome• Dense but generous negative space, strong left-aligned typographic rhythm• All copy set on deep “graphite” background with subtle radial/linear fades for depth• High-contrast white text (#FFFFFF) for headings, muted grey (#C4C4C4) for body, single neon accent per element (green, yellow, purple) for micro-highlights• Card surfaces float via soft large-radius box-shadow; subtle blur/glass overlays on hero graphic• Micro-interactions: card tilt on hover, arrow icon slide-in, opacity fades on scroll (Framer Motion)• Mobile-first column stacking, then12-col center-max1280px grid on desktop###0.2 Color Palette (EXACT clone)| Token | HEX | Usage | Notes |
|-------|-----|-------|-------|
| BG-Primary | #0E0F11 | Full-page background |
| BG-Card | #131417 | All cards/sections | Slight2% lighter than BG-Primary |
| Text-Primary | #FFFFFF | H1–H4 |
| Text-Secondary | #C4C4C4 | Body, captions |
| Accent-Green | #3DF77F | Skill bars, small status dots |
| Accent-Yellow | #F5C84C | Line graph highlight, timeline nodes |
| Accent-Purple | #9F7BFF | Button focus ring |
| Divider-Gray | #202125 |1px separators |

###0.3 Typography Scale (clone exactly)• Font family: Inter, system-ui• Desktop sizes (mobile scales down by1 step): – H1:56/64px bold – H2:40/48px semibold – H3:24/32px semibold – Body-lg:18/28px regular – Body:16/24px regular – Caption:14/20px medium• Letter-spacing: –0.01em headings, normal body• All caps micro-labels12px/16px medium,120tracking###0.4 Spacing & Layout Grid•12-column,72px max gutter desktop;16px mobile gutter• Section vertical rhythm:160px top & bottom desktop,96px mobile• Card internal padding:40px desktop,24px mobile• Uniform24px radius on all cards• Z-depth: hero graphic z-index –1 with40px blur shadow###0.5 Visual Effects & Treatments• Glassy hero screenshot overlay with4px blur and30% white linear gradient top fade• Cards animate up24px and opacity0→1 on viewport enter (Framer Motion,0.4s)• Hover: transform-scale(1.02) & subtle inner shadow• Accent lines animate with GSAP stroke-dashoffset for graphs/progress bars###0.6 Component Styles (clone exactly)• Navigation bar: fixed,64px height, logo left, links center, CTA button right• CTA button:36px height, pill radius,1px #2A2B2F border, hover-invert fill• Card carousel: snap-scroll, prev/next dots bottom-center• Timeline list: stacked rounded cards with vertical connector line---

##1. Project SummaryCreate a personal, mobile-first developer portfolio for **PranjulSaxena**. The page showcases: hero intro, about, technical skills, project gallery, professional experience, key achievements, and contact form. Visual styling mimics Linear.app exactly—dark UI, neon accents, motion-heavy interactions—implemented with TailwindCSS and FramerMotion.

---

##2. Main Page Overview (Route `/`)The Linear homepage structure is used as scaffold. Each reference section = portfolio section with identical dimensions/behaviour; only wording & imagery change to reflect Pranjul’s profile.

| Reference Section | Portfolio Equivalent |
|-------------------|----------------------|
| Hero headline + screenshot | Hero intro + code editor mock-up |
|3-card “Made for modern…” | About:3 personal value pillars |
| Split text + screen mock | Skills progress bars + live code gif |
| Carousel “Collaborate…” | Projects slider (4 projects) |
| Center icon-grid + headline | Achievements spotlight |
| Stacked large cards list | Experience timeline (jobs) |
| Footer (not provided) | Contact form & social links (clone unseen footer style from Linear docs page if needed) |

---

##3. Section-by-Section Specifications###3.1 Top Navigation Bar1. Visual Clone Instructions • Use exact64px height, black translucency (#0E0F11 /70%),1px bottom divider (#202125)2. Content Replacement • Logo text: “PS” (monogram) in place of Linear glyph • Nav items: About, Skills, Projects, Experience, Achievements, Blog, Contact • CTA button: “DownloadCV”3. Layout & Structure • Logo left, nav items center, CTA right (flex)4. Component Cloning • Button retains pill shape, small neon focus ring (#9F7BFF) on hover5. Asset Replacements • Logo asset prompt: “Minimal circular white monogram ‘PS’ on transparent background, flat icon style”6. Interaction Patterns • Same underline-on-hover for nav links (linear left→right sweep)---

###3.2 Hero (“Linear is a purpose-built tool…”) → “Hi, I'm PranjulSaxena”

1. Visual Clone •2-column layout: text left45%, floating screenshot right55% with same angle/lighting2. Content Replacement • H1: “Building elegant digital experiences.” • Sub-body: “I’m PranjulSaxena, a full-stack developer crafting performant, delightful web products.” • Primary CTA button: “View Projects” • Secondary link: “Get in touch →”3. Layout clone • Identical paddings, same CTA stack4. Components • Buttons styled the same; secondary = text with arrow icon5. Assets • Replace dashboard screenshot with: Prompt → “High-resolution dark mode code editor window displaying React/TypeScript component code with syntax highlighting, angled perspective, subtle glow”6. Interactions • Code editor mock slides up16px on load, fades in (0.6s)---

###3.3 About Cards Grid (“Made for modern product teams”)

1. Visual Clone •3 equal cards with rounded corners, black glass material2. Content Replacement • Section H2: “Driven by curiosity, focused on impact” • Right paragraph: “My process mixes rapid prototyping, pixel-perfect detail, and relentless optimisation.” • Card titles & captions:1. “Craft” – “From UX to shipped code, I obsess over detail.”2. “Velocity” – “Move fast with modern tooling & CI/CD.”3. “Quality” – “Maintainable, tested, future-proof codebase.”3. Layout • Same card spacing and arrow-circle icons bottom-right4. Components • Arrow icon identical; hover lifts card5. Assets • Replace3D glyphs with:1. Prompt: “3D layered UI panel stack icon, dark metallic”2. “Diagonal speed lines3D card, subtle neon”3. “Polished cube with check-mark engraving, dark theme”---

###3.4 Skills Split Section (“Ideate and specify what to build next”)

1. Visual Clone • Left column small title list, right column tall framed screenshot2. Content Replacement • Left H3: “Toolkit & Mastery” • Bulleted sub items (use same list style/arrow glyph): • “JavaScript / TypeScript” • “React, Next.js, Remix” • “Node, GraphQL, Prisma” • “AWS & Vercel Deploy” • Under list mini description replicates caption style: “Always exploring the bleeding edge.”3. Right Asset • Replace document screenshot with vertical progress bars (Tailwind) mock: Prompt → “Dark UI dashboard displaying animated circular and linear progress bars labelled with tech stack names, elevated card”4. Components • Maintain spotlight on first bullet (green accent) identical to reference5. Interaction • Progress bars animate fill on scroll via GSAP same timing---

###3.5 Projects Carousel (“Collaborate across tools and teams”)

1. Visual Clone • Horizontal snap cards group of4, same nav dots2. Content Replacement • Micro-label: “Selected Work” • H2: “Projects that solve real problems” • Paragraph right: “A glimpse of products I architected end-to-end.” • Four cards:1. “TaskPilot” – “AI-powered task manager”2. “E-Com Edge” – “Headless commerce platform”3. “DevDash” – “Developer analytics mobile app”4. “Open-Source Tools” – “Community driven utilities” (Each with brief caption and arrow icon)3. Assets • For each card: dark blurred screenshot prompt matching project (retain card shadow/angle)4. Interaction • Same swipe, card dims on idle, accent arrow slide on hover---

###3.6 Achievement Spotlight (“The new standard…” icon grid)

1. Visual Clone • Centered icon grid backdrop (5×5), one large central icon pops, headline underneath2. Content Replacement • Center icon prompt: “Gold trophy icon, flat3D on dark grid” • Micro-label: “Highlights” • H2: “A journey of continuous excellence” • Body: “From hackathons to production launches, recognition fuels my passion.”3. Interaction • Icons pulse low-opacity loop same as reference---

###3.7 Experience Stacked Cards List (Large graph & phone mocks)

1. Visual Clone • Vertically stacked large rounded cards (2 per row desktop), each with small corner icon & graph/illustration2. Content Replacement • Card1: • Label: “2023 – Present” • Title: “Senior Frontend Engineer, Acme Corp” • Caption: “Leading UI architecture for SaaS analytics platform.” • Graph image prompt: “Curved yellow line chart over dark grid” • Card2:2021-2023 etc. Provide total4 cards for timeline.3. Layout & Component • Keep same accent line/dot in top-left, arrow bottom-right4. Interaction • Cards animate sequentially on scroll---

###3.8 Contact / Footer (clone unseen but follow Linear’s docs footer)

1. Visual Clone Assumption • Two-column: short form left, links right;1px top divider2. Content Replacement • H3: “Let’s build something amazing” • Form fields: Name, Email, Message, Submit CTA (accent–purple focus) • Social links: GitHub, LinkedIn, Twitter (icon list)3. Interaction • Submit button loading spinner replicates Linear docs behaviour---

## Clone Fidelity Checklist✓100% visual properties (layout, shadows, font scale, motion) documented✓ All original text replaced with Pranjul-specific copy of equal length✓ All imagery has precise generation prompts preserving dimensions & treatment✓ Interactive behaviours mapped1-to-1 (hover, scroll, carousel, animation)✓ No deviation from reference style; only content & subject matter altered