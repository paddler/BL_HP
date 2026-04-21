# BroadLight Design System

## Company Overview

**BroadLight (ブロードライト)** is a Japanese AI consulting company that helps businesses transform through cutting-edge AI technology. They specialize in data science, machine learning, and business automation — serving as a strategic partner from vision to execution.

- **Tagline:** ビジネスをAIで変革する (Transform Business with AI)
- **Mission:** AIで未来を拓き、社会に貢献する (Open the future with AI, contribute to society)
- **Location:** 〒100-0003 東京都千代田区大手町3-1-1 大手町ビル5F
- **Email:** info@broadlight.co.jp
- **Domain:** broadlight.co.jp

### Products / Surfaces
1. **Corporate Homepage** — Japanese-language marketing site introducing the company, services, and contact form

### Services
- AI戦略コンサルティング (AI Strategy Consulting)
- データサイエンスソリューション (Data Science Solutions)
- 自動化実装・運用 (Automation Implementation & Operations)

---

## Sources Provided
- `uploads/broadlight_HP2026.html` — Full homepage HTML source (2026 version)
- `uploads/BL_logo.png` — Company logo (blue geometric triangular shapes)
- `BL_HP/` — Codebase mount (empty at time of system creation)
- GitHub: `paddler/BL_HP` — Repository (empty/uninitialized at time of creation)

---

## CONTENT FUNDAMENTALS

### Language
- **Primary language: Japanese (日本語)** — all public-facing copy is in Japanese
- Formal, polished tone (です・ます調) — no casual language
- No emoji in body copy (decorative emoji used sparingly in dev/prototype context only)
- No slang or overly casual phrasing

### Tone & Voice
- **Professional and visionary** — forward-looking language about AI transforming business
- **Partner-focused** — uses "お客様と共に" (together with customers), "パートナー" framing
- Uses "私たち" (we/us) as first-person company voice
- Addresses customers as "お客様" — formal, respectful
- Avoids aggressive sales language; emphasizes trust, expertise, and long-term partnership

### Copy Patterns
- Section headings: short noun phrases (e.g. 会社情報, 事業領域, ご相談・お問い合わせ)
- Service descriptions: 2–3 sentences, structured as [method] → [outcome]
- CTA labels: polite verb forms (送信する, お問い合わせ)
- Mission statement: compact, inspirational single line

### What's NOT present
- No English subheadings or bilingual text (aside from brand name "BroadLight")
- No exclamation points or overly enthusiastic punctuation
- No hashtags, social proof numbers, or buzzword lists

---

## VISUAL FOUNDATIONS

### Color System
Blue is the dominant brand color across the entire spectrum — from deep navy through vivid cobalt to electric cyan.

**Primary Blues:**
- `#0A3FBF` — Deep brand blue (hero gradient start)
- `#1662D9` — Core primary blue (links, accents, CTAs)
- `#23C9F3` — Cyan-blue (gradient midpoint, button highlights)
- `#56E0FF` / `#55D9FF` — Electric cyan (highlights, hover states, link underlines)

**Dark / Footer:**
- `#091A4D` — Deep navy (footer base)
- `#0C1837` — Near-black navy (heading text on light bg)
- `#2B1E67` — Deep navy-purple (footer gradient end)

**Text:**
- `#2E3A52` — Body text (dark slate-blue)
- `#0C1837` — Heading text

**Background:**
- `#EAF7FF` — Light blue tint (section bg start)
- `#F7FBFF` — Near-white with blue tint (section bg end)
- `#FFFFFF` — Cards and form elements

### Gradients
All major sections use diagonal gradients (135°):
- **Hero:** `#0A3FBF → #1662D9 → #23C9F3 → #56E0FF`
- **Services:** `#0B2E9B → #1347C8 → #1D78E5 → #55D9FF`
- **Contact:** `#1132A6 → #0F4FBF → #2A69E8`
- **Footer:** `#091A4D → #0E245F → #2B1E67`
- **CTA Button:** `#23C9F3 → #1662D9`
- **Light BG:** `#EAF7FF → #F7FBFF` (vertical, 180°)

### Typography
- **Font stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif`
- Japanese-optimized: Hiragino Sans for macOS/iOS, Meiryo for Windows
- No custom web fonts — system fonts only
- **Line height:** 1.8–1.9 for body (generous, readable for Japanese text)
- **Weight usage:** 600 (subheadings, labels), 700 (headings, CTAs), 800 (hero H1)
- **Letter spacing:** `0.02em` on hero H1 only
- **Scale:** Hero H1 at `clamp(3rem, 8vw, 6rem)`; section headings `clamp(2rem, 4vw, 2.8rem)`

*⚠️ Font substitution: System fonts are used. For cross-platform consistency, **Noto Sans JP** (Google Fonts) is used in design system previews as the nearest match to Hiragino Sans / Meiryo.*

### Backgrounds & Imagery
- No photography used
- No illustrations
- Backgrounds are pure gradients or flat tinted colors
- No textures or patterns in production (wave-divider uses repeating-linear-gradient as a subtle striped texture only)
- Logo is geometric: overlapping triangular shapes, shades of blue

### Cards
- Background: `rgba(255,255,255,0.12)` on dark sections (glassmorphism); `rgba(255,255,255,0.9)` on light sections
- `backdrop-filter: blur(15–20px)` — glass effect throughout
- Border-radius: `20–24px`
- Border: `1px solid rgba(255,255,255,0.2)` on dark; `1px solid rgba(255,255,255,0.5)` on light
- Shadow: `0 10px 50px rgba(10,63,191,0.15)` (blue-tinted shadow)

### Hover / Interaction States
- Cards: `translateY(-8px)` lift + deeper background opacity + stronger box-shadow
- Buttons: `translateY(-3px)` lift + stronger glow shadow
- Links: color transition to `#56E0FF` (cyan)
- Inputs on focus: `border-color: #56E0FF` + `box-shadow: 0 0 0 4px rgba(86,224,255,0.2)`
- Transition duration: `0.3s ease` universally

### Animations
- **fadeInUp:** opacity 0→1 + translateY(30px→0), 0.8–1.0s ease-out; used for hero and key sections on scroll
- **float:** gentle vertical bobbing ±20px, 6–8s infinite; used for decorative background elements
- **wave:** horizontal scroll for striped texture overlay, 20s linear infinite
- No spring/bounce animations — all easing is CSS `ease` or `ease-out`

### Spacing
- Section padding: `8rem 2rem` (generous vertical breathing room)
- Card padding: `3–4rem 2–3rem`
- Grid gap: `2.5rem`
- Max content width: `1200px` (grid), `900px` (company card), `700px` (contact form)

### Shadows
- Cards: `0 10px 50px rgba(10,63,191,0.15)` — blue-tinted soft shadow
- Button glow: `0 8px 20px rgba(35,201,243,0.4)` — cyan glow
- Hero text: `text-shadow: 0 4px 20px rgba(0,0,0,0.3)`

### Corner Radii
- Cards: `20–24px`
- Buttons (pill): `50px`
- Inputs: `12px`
- Social icons: `50%` (circle)

### Borders
- Glass card borders: `1px solid rgba(255,255,255,0.2–0.5)`
- Mission text divider: `2px solid rgba(22,98,217,0.2)`
- Footer divider: `1px solid rgba(255,255,255,0.1)`

---

## ICONOGRAPHY

### Approach
BroadLight uses **emoji as service icons** in the current homepage (🔍, 📊, 🤖 for services; 🧠, 🖥️, ⚙️ as hero decorations). These are large decorative emoji, not a systematic icon set.

There is no dedicated icon font, SVG sprite, or custom icon system in the provided codebase.

**Social icons** use plain text characters: `in`, `𝕏`, `f` inside circular `<a>` elements.

### Substitution Note
⚠️ No SVG icon library is bundled. For production or design work requiring consistent iconography, **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) or **Phosphor Icons** are recommended as a good match for the clean, modern, business-oriented aesthetic.

### Logo
The BroadLight logo (`assets/BL_logo.png`) is a geometric abstract mark made of overlapping triangular chevron shapes in multiple shades of blue — suggesting direction, momentum, and layering. It is purely symbolic (no logotype text embedded).

---

## File Index

```
README.md                    ← This file
SKILL.md                     ← Agent skill definition
colors_and_type.css          ← CSS custom properties for colors, type, spacing
assets/
  BL_logo.png                ← Company logo
preview/
  colors-primary.html        ← Primary blue palette
  colors-semantic.html       ← Semantic color roles
  colors-gradients.html      ← Gradient swatches
  type-scale.html            ← Typographic scale
  type-specimens.html        ← JP/EN type specimens
  spacing-tokens.html        ← Spacing + radius + shadow tokens
  components-buttons.html    ← Button styles
  components-cards.html      ← Card variants
  components-forms.html      ← Form input styles
  brand-logo.html            ← Logo usage
ui_kits/
  homepage/
    README.md                ← Homepage UI kit notes
    index.html               ← Interactive homepage prototype
    Header.jsx               ← Nav header component
    Hero.jsx                 ← Hero section
    CompanyInfo.jsx          ← Company info section
    Services.jsx             ← Services grid
    Contact.jsx              ← Contact form
    Footer.jsx               ← Footer
```
