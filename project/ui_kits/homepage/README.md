# BroadLight Homepage UI Kit

## Overview
High-fidelity recreation of the BroadLight corporate homepage as a click-through React prototype.

## Components
| File | Description |
|---|---|
| `Header.jsx` | Sticky nav with active section highlight + CTA button |
| `Hero.jsx` | Full-viewport gradient hero with animated decorations and dual CTA |
| `CompanyInfo.jsx` | Glassmorphism card on light gradient background |
| `Services.jsx` | 3-column service cards on dark blue gradient with hover lift |
| `Contact.jsx` | Contact form with live state + success feedback |
| `Footer.jsx` | 3-column footer on deep navy-purple gradient |
| `index.html` | App shell — loads all components, handles scroll tracking |

## Design Width
Desktop-first, responsive. Designed at 1280px+; collapses gracefully to mobile.

## Source
Derived from `uploads/broadlight_HP2026.html` (2026 homepage). 
GitHub repo `paddler/BL_HP` was empty at time of creation.

## Notes
- Font: Noto Sans JP (Google Fonts) substituting for Hiragino Sans / Meiryo
- No custom icon set — emoji used as service icons per source
- Interactions: smooth-scroll nav, hover states on cards and buttons, form submission with success state
