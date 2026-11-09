---
name: "Arthur Tsaritov Portfolio"
description: "A digital screening room for AI film, interactive web direction, and commercial design."
colors:
  screening-black: "#080808"
  frame-black: "#111111"
  bone-paper: "#ebece7"
  quiet-gray: "#999c97"
  paper-muted: "#5f625e"
  action-cyan: "#8debff"
  white: "#ffffff"
  dark-hairline: "rgba(8,8,8,.32)"
  light-hairline: "rgba(235,236,231,.24)"
typography:
  display: { fontFamily: "Onest, system-ui, sans-serif", fontSize: "clamp(62px, 10vw, 152px)", fontWeight: 300, lineHeight: 0.78, letterSpacing: "-0.04em" }
  headline: { fontFamily: "Onest, system-ui, sans-serif", fontSize: "clamp(52px, 7vw, 96px)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-0.04em" }
  title: { fontFamily: "Onest, system-ui, sans-serif", fontSize: "clamp(30px, 4vw, 60px)", fontWeight: 300, letterSpacing: "-0.03em" }
  body: { fontFamily: "Onest, system-ui, sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: 1.45 }
  label: { fontFamily: "Onest, system-ui, sans-serif", fontSize: "13px", fontWeight: 400 }
rounded:
  circular: "50%"
spacing:
  edge: "clamp(18px, 3.2vw, 52px)"
  media-gap: "clamp(16px, 2.4vw, 40px)"
  section-block: "clamp(110px, 14vw, 210px)"
  sequence-gap: "clamp(80px, 12vw, 180px)"
components:
  live-project-action: { backgroundColor: "{colors.action-cyan}", textColor: "{colors.screening-black}", rounded: "{rounded.circular}", size: "170px" }
  live-project-action-hover: { backgroundColor: "{colors.white}", textColor: "{colors.screening-black}", rounded: "{rounded.circular}", size: "170px" }
  live-browser: { backgroundColor: "{colors.frame-black}", textColor: "{colors.bone-paper}" }
  film-caption: { backgroundColor: "{colors.bone-paper}", textColor: "{colors.screening-black}", typography: "{typography.label}" }
---

# Design System: Arthur Tsaritov Portfolio

## Overview

**Creative North Star: "Digital Screening Room"**

The portfolio is staged as a sequence of screening environments: a full-viewport panoramic film opening, a bone-paper moving-image gallery, a dark live-web chamber, and a final bone-paper commercial archive. Work stays large and flat while interface chrome recedes into fine rules, compact credits, and generous negative space.

Its character is cinematic, restrained, and editorial. One authored hero reveal establishes the entrance; after that, motion belongs to the films and functional state changes. The system rejects tilted media, glow, ornamental cards, and decorative depth.

**Key Characteristics:**

- Full-screen film hero with title-credit typography.
- Landscape films dominate at 16:9, 2.1:1, and 2.35:1.
- Portrait studies and commercial cases use secondary horizontal reels.
- Near-black and bone surfaces alternate by chapter.
- Electric cyan is reserved for action, focus, status, selection, and contact.
- Square frames, fine rules, large scale, and no shadows.

## Colors

The palette combines screening-room black with warm bone paper and uses electric cyan as its only action color.

### Primary

- **Electric Cyan** (`#8debff`): Live-project action, availability indicator, focus outline, selection, live status, and contact footer.

### Neutral

- **Screening Black** (`#080808`): Main dark canvas and inverse text on light surfaces.
- **Frame Black** (`#111111`): Live-browser chrome and media fallback.
- **Bone Paper** (`#ebece7`): AI and commercial-gallery surfaces plus primary text on dark chapters.
- **Quiet Gray** (`#999c97`): Supporting copy and browser chrome on dark surfaces.
- **Paper Muted** (`#5f625e`): Supporting copy on bone surfaces.
- **White** (`#ffffff`): Hero copy and the live-action hover inversion.
- **Dark / Light Hairlines:** Low-opacity rules organize captions, cases, and dark browser chrome.

### Named Rules

**The One Action Color Rule.** Cyan marks action or state; it is not a decorative wash.

**The Work Owns the Spectrum Rule.** Neutral surfaces leave supplied film and campaign imagery chromatically dominant.

## Typography

**Display Font:** Onest (with system UI and sans-serif fallbacks)  
**Body Font:** Onest (with system UI and sans-serif fallbacks)

**Character:** One self-hosted sans serif creates both cinematic scale and quiet production-credit detail. Display type is light, tightly tracked, and compressed; functional text stays regular and compact.

### Hierarchy

- **Display** (300, `clamp(62px, 10vw, 152px)`, 0.78): Stacked hero name.
- **Headline** (300, `clamp(52px, 7vw, 96px)`, 0.9): Chapter declarations, held to 12ch.
- **Title** (300, `clamp(30px, 4vw, 60px)`): Case titles and reel headings.
- **Body** (400, `15px`, 1.45): Short descriptions with a 40ch maximum.
- **Label** (400, `12–13px`): Navigation, credits, captions, status, and controls.

### Named Rules

**The Title-Credit Rule.** Scale establishes the title; small regular labels behave like film credits. Do not introduce bold display weights.

## Layout

The hero fills `100svh` with a 680px minimum. Film covers the viewport; the two-line name and role sit on a bottom credit rule, with a caption row below. A fixed three-column header uses a stable black-to-transparent top scrim over changing footage.

Sections use `clamp(110px, 14vw, 210px)` vertical padding and a shared `clamp(18px, 3.2vw, 52px)` edge. Chapter headers pair a broad headline with a narrow description. AI films form a vertical program: full-width feature and panorama frames alternate with equal-column two-up sequences. Standard media is 16:9, the feature 2.1:1, and the edge-to-edge panorama 2.35:1.

Portrait films form a keyboard-focusable, scroll-snapped 9:16 reel. Commercial cases repeat the horizontal viewing model with images up to 82vw / 1180px wide. Goulash is a tall live iframe track rather than a static card.

At 900px navigation categories disappear, chapter headers stack, and the hero credit lockup becomes one column. At 600px film pairs become a single sequence, panorama bleed is removed, films normalize to 16:10, reels widen, and section padding becomes 100px.

## Elevation & Depth

The system is deliberately flat: no box shadows, glow, tilt, or simulated floating layers. Depth comes from alternating tonal chapters, full-bleed moving image, the hero shade, stable header scrim, and fine rules.

### Named Rules

**The Flat Screening Rule.** Media is an authored screen, not a floating card; keep frames square and parallel to the viewport.

## Shapes

Film, image, browser, and chapter surfaces use square corners. Hairlines define captions and boundaries. Circles are reserved for the availability indicator, 170px live-project action (140px on compact screens), and 44px commercial-case controls. There is no general radius scale beyond the true circle.

## Components

### Buttons

- **Shape:** The signature live-project action is a 170px circle, contracting to 140px below 600px.
- **Primary:** Cyan fill with screening-black stacked label text, centered over the iframe preview.
- **Hover / Focus:** Hover scales to 1.06 and reverses to white with black text over 350ms. Focus uses a 2px cyan outline with 4px offset.
- **Activated:** The action fades, scales down, and releases pointer input to the iframe.

### Cards / Containers

- **Corner Style:** Square throughout.
- **Background:** Films sit directly on bone paper; the live-browser shell uses frame black on screening black.
- **Shadow Strategy:** None.
- **Border:** Hairlines appear above and below browser chrome and above media captions.
- **Internal Padding:** Media stays edge to edge; browser bars use 14px vertical padding.

### Navigation

The fixed header is a three-part grid: wordmark, centered category links, and availability. Compact 13px labels sit over a stable dark scrim. Category hover adds a one-pixel underline. Below 900px categories disappear; below 600px availability collapses to a 44px indicator target.

### Film Program

Landscape films are primary. Video fills fixed-ratio screens with `object-fit: cover`; fine-rule footers pair titles with right-aligned disciplines. Films play only near the viewport and pause when out of view or when reduced motion is requested.

### Portrait Reel

Nine-by-sixteen studies form a secondary horizontal, scroll-snapped track, subordinate to the landscape program.

### Live Browser

Goulash begins as a non-interactive iframe preview. The circular action is centered in the browser stage; it enables pointer input, changes status from “Preview” to “Live / scroll inside,” and recedes. A persistent link opens the full page.

### Commercial Case Track

Each case uses a large title and muted discipline above a hairline, with paired 44px circular previous/next controls. Three large images sit in a keyboard-focusable, scroll-snapped horizontal track that supports native overflow, visible scroll affordance, button paging, and vertical-wheel-to-horizontal movement while more content remains.

## Do's and Don'ts

- **Do** let films and case imagery occupy the largest areas.
- **Do** preserve the landscape hierarchy and treat portrait work as a secondary reel.
- **Do** alternate near-black screening chapters with bone gallery chapters.
- **Do** retain the stable scrim, keyboard focus, live iframe access, and reduced-motion behavior.
- **Do** use one authored hero reveal, then let content motion and interaction carry the experience.
- **Don't** tilt media, add glow, apply shadows, or round viewing frames.
- **Don't** turn work into small equal-weight cards or a dashboard grid.
- **Don't** introduce another action accent or use cyan as ambient decoration.
- **Don't** replace motion with static thumbnails when playable video exists.
- **Don't** fabricate metrics, awards, testimonials, or case-study claims.
